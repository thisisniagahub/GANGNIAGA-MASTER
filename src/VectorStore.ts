import { supabaseAdmin } from './lib/supabase';

export interface Document {
  id: string;
  content: string;
  metadata: any;
  similarity?: number;
}

export class VectorStore {
  constructor() {}

  async initialize() {
    console.log("VectorStore initialized with Supabase pgvector");
  }

  async insert(content: string, embedding: number[], userId: string, metadata: any = {}) {
    try {
      if (!userId) {
        throw new Error('User ID is required to insert into VectorStore');
      }

      // Check if dummy document exists
      let { data: doc } = await supabaseAdmin.from('documents')
        .select('id')
        .eq('title', 'System Knowledge Base')
        .eq('owner_id', userId)
        .single();
      
      if (!doc) {
        const { data: newDoc, error: docError } = await supabaseAdmin.from('documents')
          .insert({ owner_id: userId, title: 'System Knowledge Base', status: 'ready' })
          .select('id').single();
        if (docError) throw docError;
        doc = newDoc;
      }

      // Check if dummy version exists
      let { data: version } = await supabaseAdmin.from('document_versions')
        .select('id')
        .eq('document_id', doc.id)
        .eq('version_number', 1)
        .single();

      if (!version) {
        const { data: newVersion, error: verError } = await supabaseAdmin.from('document_versions')
          .insert({ document_id: doc.id, version_number: 1, content_hash: 'dummy' })
          .select('id').single();
        if (verError) throw verError;
        version = newVersion;
      }

      // Insert chunk
      const { data: chunk, error: chunkError } = await supabaseAdmin.from('chunks')
        .insert({
          document_version_id: version.id,
          chunk_index: 0,
          content,
          token_count: Math.ceil(content.length / 4)
        })
        .select('id').single();
      
      if (chunkError) throw chunkError;

      // Insert embedding
      const { error: embedError } = await supabaseAdmin.from('chunk_embeddings')
        .insert({
          chunk_id: chunk.id,
          model: 'dummy-model',
          embedding
        });

      if (embedError) throw embedError;
    } catch (e) {
      console.error('Failed to insert into vector store:', e);
      throw e;
    }
  }

  async search(queryEmbedding: number[], limit: number = 5): Promise<Document[]> {
    const { data, error } = await supabaseAdmin.rpc('match_chunks', {
      query_embedding: queryEmbedding,
      match_threshold: 0.1, // very low threshold for testing
      match_count: limit
    });

    if (error) {
      console.error('Search error:', error);
      throw error;
    }

    return data.map((d: any) => ({
      id: d.id,
      content: d.content,
      metadata: d.metadata,
      similarity: d.similarity
    }));
  }
}
