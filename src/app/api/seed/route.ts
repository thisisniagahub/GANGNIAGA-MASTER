import { NextResponse } from 'next/server';
import { vectorStore, ai } from '@/lib/services';

export async function POST() {
  try {
    const dummyData = [
      "GangNiaga Executive OS adalah sebuah platform tadbir urus AI untuk mengautomasikan tugasan korporat.",
      "Bounded Pilot pertama memfokuskan kepada Knowledge Retrieval dengan latency P95 di bawah 1.5 saat.",
      "Sistem ini menggunakan Llama-3 70B dari Groq dan pgvector untuk menyimpan memori."
    ];
    await Promise.all(dummyData.map(async (doc) => {
      const emb = await ai.generateEmbedding(doc);
      await vectorStore.insert(doc, emb, '00000000-0000-0000-0000-000000000000', { source: "dummy_seed" });
    }));
    return NextResponse.json({ message: "Data dummy berjaya dimasukkan!" });
  } catch(e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to seed' }, { status: 500 });
  }
}
