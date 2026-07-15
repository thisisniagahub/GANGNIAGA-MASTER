import express from 'express';
import path from 'path';
import { VectorStore } from './VectorStore';
import { PilotAI } from './AI';

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const vectorStore = new VectorStore();
const ai = new PilotAI();
vectorStore.initialize().catch(console.error);

app.post('/api/knowledge/search', async (req, res) => {
  try {
    const { queryEmbedding, limit } = req.body;
    
    if (!queryEmbedding || !Array.isArray(queryEmbedding)) {
      return res.status(400).json({ error: 'queryEmbedding must be an array of numbers' });
    }

    const results = await vectorStore.search(queryEmbedding, limit || 5);
    res.json({ results });
  } catch (error: any) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/knowledge/ask', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ error: 'query is required' });
    }

    // 1. Generate embedding for the query
    const queryEmbedding = await ai.generateEmbedding(query);

    // 2. Search knowledge base
    const results = await vectorStore.search(queryEmbedding, 3);
    const context = results.map((r: any) => r.content).join('\n---\n');

    // 3. Generate answer
    const answer = await ai.generateAnswer(query, context);

    res.json({ answer, contextUsed: results });
  } catch (error: any) {
    console.error('AI Ask error:', error);
    res.status(500).json({ error: 'Internal server error processing AI request' });
  }
});

// Endpoint untuk tujuan preview demo
app.post('/api/seed', async (req, res) => {
  try {
    const dummyData = [
      "GangNiaga Executive OS adalah sebuah platform tadbir urus AI untuk mengautomasikan tugasan korporat.",
      "Bounded Pilot pertama memfokuskan kepada Knowledge Retrieval dengan latency P95 di bawah 1.5 saat.",
      "Sistem ini menggunakan Llama-3 70B dari Groq dan pgvector untuk menyimpan memori."
    ];
    for (const doc of dummyData) {
      const emb = await ai.generateEmbedding(doc);
      await vectorStore.insert(doc, emb, { source: "dummy_seed" });
    }
    res.json({ message: "Data dummy berjaya dimasukkan!" });
  } catch(e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to seed' });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export { app };
