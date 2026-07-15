import { NextResponse } from 'next/server';
import { vectorStore, ai } from '@/lib/services';
import { createClient } from '@/utils/supabase/server';

export async function POST(req: Request) {
  try {
    const { cookies } = await import('next/headers');
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const text = await file.text(); // Assuming text/plain or markdown files for now

    // Optional: split text into chunks
    const chunks = text.split(/(?:\n\s*){2,}/); // simple paragraph split

    await Promise.all(chunks.map(async (chunk) => {
      if (chunk.trim()) {
        const emb = await ai.generateEmbedding(chunk);
        await vectorStore.insert(chunk, emb, user.id, { source: file.name });
      }
    }));

    return NextResponse.json({ message: 'Document ingested successfully' });
  } catch(e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to ingest document' }, { status: 500 });
  }
}
