-- Migration: Create match_chunks RPC function for pgvector similarity search
CREATE OR REPLACE FUNCTION match_chunks (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
RETURNS TABLE (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE sql STABLE
AS $$
  SELECT
    c.id,
    c.content,
    jsonb_build_object('document_version_id', c.document_version_id, 'chunk_index', c.chunk_index) as metadata,
    1 - (ce.embedding <=> query_embedding) AS similarity
  FROM chunks c
  JOIN chunk_embeddings ce ON c.id = ce.chunk_id
  WHERE 1 - (ce.embedding <=> query_embedding) > match_threshold
  ORDER BY ce.embedding <=> query_embedding
  LIMIT match_count;
$$;
