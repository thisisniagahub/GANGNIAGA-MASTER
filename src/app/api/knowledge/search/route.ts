import { NextResponse } from 'next/server';
import { vectorStore } from '@/lib/services';

export async function POST(req: Request) {
  try {
    const { queryEmbedding, limit } = await req.json();
    
    if (!queryEmbedding || !Array.isArray(queryEmbedding)) {
      return NextResponse.json({ error: 'queryEmbedding must be an array of numbers' }, { status: 400 });
    }

    const results = await vectorStore.search(queryEmbedding, limit || 5);
    return NextResponse.json({ results });
  } catch (error: any) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
