import OpenAI from 'openai';
import crypto from 'crypto';

export class PilotAI {
  private groq: OpenAI;

  constructor() {
    this.groq = new OpenAI({
      apiKey: process.env.GROQ_API_KEY || 'MISSING_API_KEY',
      baseURL: 'https://api.groq.com/openai/v1',
    });
  }

  // Deterministic mock embedding generator for Bounded Pilot Preview (384 dimensions)
  async generateEmbedding(text: string): Promise<number[]> {
    const hash = crypto.createHash('sha256').update(text).digest();
    const embedding = new Array(384).fill(0);
    for (let i = 0; i < 384; i++) {
      // Create a deterministic pseudo-random float between -1 and 1 based on text hash
      const byte1 = hash[i % hash.length];
      const byte2 = hash[(i + 1) % hash.length];
      embedding[i] = ((byte1 * 256 + byte2) / 65535) * 2 - 1;
    }
    
    // Normalize vector
    const magnitude = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
    return embedding.map(val => val / magnitude);
  }

  async generateAnswer(query: string, context: string): Promise<string> {
    const response = await this.groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: 'You are the GangNiaga Executive AI. Answer the user question based ONLY on the provided context. Answer in Bahasa Melayu. If the answer is not in the context, say "Maklumat tidak ditemui dalam Knowledge Base."'
        },
        {
          role: 'user',
          content: `Context:\n${context}\n\nQuestion: ${query}`
        }
      ],
      temperature: 0.2,
      max_tokens: 1024,
    });
    return response.choices[0].message.content || '';
  }
}
