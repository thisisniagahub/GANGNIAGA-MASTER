import OpenAI from 'openai';

export class NvidiaAI {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.NVIDIA_API_KEY || 'YOUR_NVIDIA_API_KEY',
      baseURL: 'https://integrate.api.nvidia.com/v1',
    });
  }

  async generateEmbedding(text: string): Promise<number[]> {
    const response = await this.client.embeddings.create({
      input: text,
      model: 'snowflake/arctic-embed-l',
      encoding_format: 'float',
    });
    return response.data[0].embedding;
  }

  async generateAnswer(query: string, context: string): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: 'meta/llama3-70b-instruct',
      messages: [
        {
          role: 'system',
          content: 'You are the GangNiaga Executive AI. Answer the user question based ONLY on the provided context. If the answer is not in the context, say "Maklumat tidak ditemui dalam Knowledge Base."'
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
