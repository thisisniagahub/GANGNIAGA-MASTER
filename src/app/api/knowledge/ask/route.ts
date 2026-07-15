import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { vectorStore, ai } from '@/lib/services';
import { createClient } from '@/utils/supabase/server';
const openai = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY || 'MISSING_API_KEY',
  baseURL: process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1',
});

export async function POST(req: Request) {
  try {
    const { query, messages } = await req.json();
    const userQuery = query || (messages && messages.length > 0 ? messages[messages.length - 1].content : '');
    
    if (!userQuery) {
      return new Response(JSON.stringify({ error: 'query is required' }), { status: 400 });
    }

    const queryEmbedding = await ai.generateEmbedding(userQuery);
    const results = await vectorStore.search(queryEmbedding, 3);
    const context = results.map((r: any) => r.content).join('\n---\n');

    const { text: answer } = await generateText({
      model: openai('openai/gpt-4o-mini'),
      system: 'You are the GangNiaga Executive AI. Answer the user question based ONLY on the provided context. Answer in Bahasa Melayu. If the answer is not in the context, say "Maklumat tidak ditemui dalam Knowledge Base."',
      prompt: `Context:\n${context}\n\nQuestion: ${userQuery}`,
      temperature: 0.2,
    });

    // Save to database
    const { cookies } = await import('next/headers');
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data: { user } } = await supabase.auth.getUser();

    let convId = req.headers.get('x-conversation-id');
    if (user) {
      
      if (!convId) {
        const { data: newConv } = await supabase.from('conversations')
          .insert({ user_id: user.id, title: userQuery.substring(0, 50) })
          .select('id').single();
        if (newConv) convId = newConv.id;
      }

      if (convId) {
        await supabase.from('messages').insert([
          { conversation_id: convId, role: 'user', content: userQuery },
          { conversation_id: convId, role: 'ai', content: answer }
        ]);
      }
    }

    return new Response(JSON.stringify({ answer, conversationId: convId }), { headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    console.error('AI Ask error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error processing AI request' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
