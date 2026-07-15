import { VectorStore } from '../VectorStore';
import { PilotAI } from '../AI';

const globalForServices = globalThis as unknown as {
  vectorStore: VectorStore | undefined;
  ai: PilotAI | undefined;
};

export const vectorStore = globalForServices.vectorStore ?? new VectorStore();
export const ai = globalForServices.ai ?? new PilotAI();

if (process.env.NODE_ENV !== 'production') {
  globalForServices.vectorStore = vectorStore;
  globalForServices.ai = ai;
}

// In Next.js, this module will be evaluated when imported by a route handler.
// We call initialize() here to replicate the behavior of app.ts.
vectorStore.initialize().catch(console.error);
