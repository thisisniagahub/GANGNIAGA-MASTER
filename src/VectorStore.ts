// In-memory VectorStore for Preview purposes

interface Document {
  id: number;
  content: string;
  metadata: any;
  embedding: number[];
}

export class VectorStore {
  private documents: Document[] = [];
  private nextId: number = 1;

  constructor() {}

  async initialize() {
    console.log("Mock VectorStore initialized");
  }

  async insert(content: string, embedding: number[], metadata: any = {}) {
    this.documents.push({
      id: this.nextId++,
      content,
      metadata,
      embedding
    });
  }

  async search(queryEmbedding: number[], limit: number = 5) {
    // Simple cosine similarity search in memory
    const results = this.documents.map(doc => {
      let dotProduct = 0;
      let normA = 0;
      let normB = 0;
      for (let i = 0; i < queryEmbedding.length; i++) {
        dotProduct += queryEmbedding[i] * doc.embedding[i];
        normA += queryEmbedding[i] * queryEmbedding[i];
        normB += doc.embedding[i] * doc.embedding[i];
      }
      const similarity = dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
      return {
        ...doc,
        similarity
      };
    });

    results.sort((a, b) => b.similarity - a.similarity);
    return results.slice(0, limit).map(({ id, content, metadata, similarity }) => ({
      id, content, metadata, similarity
    }));
  }
}
