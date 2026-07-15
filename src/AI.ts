import { embed, generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

// Define the provider. This allows us to use standard OpenAI or OpenAI compatible providers like OpenRouter/NVIDIA
const openai = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY || 'MISSING_API_KEY',
  baseURL: process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1', 
});

export class PilotAI {
  constructor() {}

  async generateEmbedding(text: string): Promise<number[]> {
    if (!process.env.OPENROUTER_API_KEY && !process.env.OPENAI_API_KEY) {
      // Return dummy 1536 embedding for test if no key
      return new Array(1536).fill(0.01);
    }
    
    try {
      const { embedding } = await embed({
        model: openai.embedding('openai/text-embedding-3-small'),
        value: text,
      });
      return embedding;
    } catch (error) {
      console.error("Error generating embedding:", error);
      // Return dummy array on error to prevent crashing dev env
      return new Array(1536).fill(0.01);
    }
  }

  // We keep this for backward compatibility in case it's used elsewhere,
  // but ask/route.ts will be refactored to use streamText directly.
  async generateAnswer(query: string, context: string): Promise<string> {
    if (!process.env.OPENROUTER_API_KEY && !process.env.OPENAI_API_KEY) {
      return "Maklumat tidak ditemui (Tiada API Key).";
    }

    try {
      const { text } = await generateText({
        model: openai('openai/gpt-4o-mini'),
        system: 'You are the GangNiaga Executive AI. Answer the user question based ONLY on the provided context. Answer in Bahasa Melayu. If the answer is not in the context, say "Maklumat tidak ditemui dalam Knowledge Base."',
        prompt: `Context:\n${context}\n\nQuestion: ${query}`,
        temperature: 0.2,
      });
      return text;
    } catch (error) {
      console.error("Error generating answer:", error);
      return "Ralat menjana jawapan.";
    }
  }
}
