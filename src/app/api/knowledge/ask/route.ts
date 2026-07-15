import { NextResponse } from 'next/server';
import { vectorStore, ai } from '@/lib/services';

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    if (!query) {
      return NextResponse.json({ error: 'query is required' }, { status: 400 });
    }

    const queryEmbedding = await ai.generateEmbedding(query);
    const results = await vectorStore.search(queryEmbedding, 3);
    const context = results.map((r: any) => r.content).join('\n---\n');

    const answer = await ai.generateAnswer(query, context);

    return NextResponse.json({ answer, contextUsed: results });
  } catch (error: any) {
    console.error('AI Ask error:', error);
    return NextResponse.json({ error: 'Internal server error processing AI request' }, { status: 500 });
  }
}
