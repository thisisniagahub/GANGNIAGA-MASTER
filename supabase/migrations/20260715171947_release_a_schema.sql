-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Enums
CREATE TYPE document_status AS ENUM ('draft', 'processing', 'ready', 'failed', 'archived');
CREATE TYPE ingestion_status AS ENUM ('pending', 'processing', 'completed', 'failed');
CREATE TYPE message_role AS ENUM ('user', 'assistant', 'system');

-- Roles
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- User Roles
CREATE TABLE user_roles (
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id, role_id)
);

-- Documents
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    status document_status NOT NULL DEFAULT 'draft',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Document Versions
CREATE TABLE document_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    version_number INT NOT NULL,
    content_hash TEXT NOT NULL,
    storage_path TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(document_id, version_number)
);

-- Ingestion Jobs
CREATE TABLE ingestion_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_version_id UUID NOT NULL REFERENCES document_versions(id) ON DELETE CASCADE,
    status ingestion_status NOT NULL DEFAULT 'pending',
    error_message TEXT,
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Chunks
CREATE TABLE chunks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_version_id UUID NOT NULL REFERENCES document_versions(id) ON DELETE CASCADE,
    chunk_index INT NOT NULL,
    content TEXT NOT NULL,
    token_count INT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Embeddings
CREATE TABLE chunk_embeddings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chunk_id UUID NOT NULL REFERENCES chunks(id) ON DELETE CASCADE,
    model TEXT NOT NULL,
    embedding vector(1536) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create HNSW index for vector similarity search
CREATE INDEX ON chunk_embeddings USING hnsw (embedding vector_cosine_ops);

-- Conversations
CREATE TABLE conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Messages
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
    role message_role NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Citations
CREATE TABLE citations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    message_id UUID NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
    chunk_id UUID NOT NULL REFERENCES chunks(id) ON DELETE CASCADE,
    relevance_score FLOAT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Provider Runs (LLM/Embedding generation cost tracking)
CREATE TABLE provider_runs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    run_type TEXT NOT NULL, -- e.g., 'embedding', 'completion'
    provider TEXT NOT NULL, -- e.g., 'openai', 'anthropic'
    model TEXT NOT NULL,
    prompt_tokens INT DEFAULT 0,
    completion_tokens INT DEFAULT 0,
    cost FLOAT DEFAULT 0,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Audit Events
CREATE TABLE audit_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id UUID NOT NULL,
    details JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- RLS Policies Setup

-- Enable RLS on all tables
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ingestion_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE chunks ENABLE ROW LEVEL SECURITY;
ALTER TABLE chunk_embeddings ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE citations ENABLE ROW LEVEL SECURITY;
ALTER TABLE provider_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_events ENABLE ROW LEVEL SECURITY;

-- Helper Function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_roles ur
    JOIN roles r ON ur.role_id = r.id
    WHERE ur.user_id = auth.uid() AND r.name = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RLS for roles
CREATE POLICY "Roles are viewable by all authenticated users" ON roles FOR SELECT TO authenticated USING (true);

-- RLS for user_roles
CREATE POLICY "Users can view their own roles" ON user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- RLS for documents
CREATE POLICY "Users can view their own documents" ON documents FOR SELECT TO authenticated USING (auth.uid() = owner_id);
CREATE POLICY "Users can insert their own documents" ON documents FOR INSERT TO authenticated WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Users can update their own documents" ON documents FOR UPDATE TO authenticated USING (auth.uid() = owner_id);
CREATE POLICY "Users can delete their own documents" ON documents FOR DELETE TO authenticated USING (auth.uid() = owner_id);

-- RLS for document_versions
CREATE POLICY "Users can view versions of their own documents" ON document_versions FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM documents WHERE documents.id = document_versions.document_id AND documents.owner_id = auth.uid())
);
CREATE POLICY "Users can manage versions of their own documents" ON document_versions FOR ALL TO authenticated USING (
    EXISTS (SELECT 1 FROM documents WHERE documents.id = document_versions.document_id AND documents.owner_id = auth.uid())
);

-- RLS for ingestion_jobs
CREATE POLICY "Users can view ingestion jobs of their own documents" ON ingestion_jobs FOR SELECT TO authenticated USING (
    EXISTS (
        SELECT 1 FROM document_versions dv
        JOIN documents d ON dv.document_id = d.id
        WHERE dv.id = ingestion_jobs.document_version_id AND d.owner_id = auth.uid()
    )
);
CREATE POLICY "Users can manage ingestion jobs of their own documents" ON ingestion_jobs FOR ALL TO authenticated USING (
    EXISTS (
        SELECT 1 FROM document_versions dv
        JOIN documents d ON dv.document_id = d.id
        WHERE dv.id = ingestion_jobs.document_version_id AND d.owner_id = auth.uid()
    )
);

-- RLS for chunks
CREATE POLICY "Users can view chunks of their own documents" ON chunks FOR SELECT TO authenticated USING (
    EXISTS (
        SELECT 1 FROM document_versions dv
        JOIN documents d ON dv.document_id = d.id
        WHERE dv.id = chunks.document_version_id AND d.owner_id = auth.uid()
    )
);
CREATE POLICY "Users can manage chunks of their own documents" ON chunks FOR ALL TO authenticated USING (
    EXISTS (
        SELECT 1 FROM document_versions dv
        JOIN documents d ON dv.document_id = d.id
        WHERE dv.id = chunks.document_version_id AND d.owner_id = auth.uid()
    )
);

-- RLS for chunk_embeddings
CREATE POLICY "Users can view embeddings of their own documents" ON chunk_embeddings FOR SELECT TO authenticated USING (
    EXISTS (
        SELECT 1 FROM chunks c
        JOIN document_versions dv ON c.document_version_id = dv.id
        JOIN documents d ON dv.document_id = d.id
        WHERE c.id = chunk_embeddings.chunk_id AND d.owner_id = auth.uid()
    )
);
CREATE POLICY "Users can manage embeddings of their own documents" ON chunk_embeddings FOR ALL TO authenticated USING (
    EXISTS (
        SELECT 1 FROM chunks c
        JOIN document_versions dv ON c.document_version_id = dv.id
        JOIN documents d ON dv.document_id = d.id
        WHERE c.id = chunk_embeddings.chunk_id AND d.owner_id = auth.uid()
    )
);

-- RLS for conversations
CREATE POLICY "Users can view their own conversations" ON conversations FOR SELECT TO authenticated USING (auth.uid() = owner_id);
CREATE POLICY "Users can insert their own conversations" ON conversations FOR INSERT TO authenticated WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Users can update their own conversations" ON conversations FOR UPDATE TO authenticated USING (auth.uid() = owner_id);
CREATE POLICY "Users can delete their own conversations" ON conversations FOR DELETE TO authenticated USING (auth.uid() = owner_id);

-- RLS for messages
CREATE POLICY "Users can view messages of their own conversations" ON messages FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM conversations WHERE conversations.id = messages.conversation_id AND conversations.owner_id = auth.uid())
);
CREATE POLICY "Users can manage messages of their own conversations" ON messages FOR ALL TO authenticated USING (
    EXISTS (SELECT 1 FROM conversations WHERE conversations.id = messages.conversation_id AND conversations.owner_id = auth.uid())
);

-- RLS for citations
CREATE POLICY "Users can view citations of their own messages" ON citations FOR SELECT TO authenticated USING (
    EXISTS (
        SELECT 1 FROM messages m
        JOIN conversations c ON m.conversation_id = c.id
        WHERE m.id = citations.message_id AND c.owner_id = auth.uid()
    )
);
CREATE POLICY "Users can manage citations of their own messages" ON citations FOR ALL TO authenticated USING (
    EXISTS (
        SELECT 1 FROM messages m
        JOIN conversations c ON m.conversation_id = c.id
        WHERE m.id = citations.message_id AND c.owner_id = auth.uid()
    )
);

-- RLS for provider_runs
CREATE POLICY "Users can view their own provider runs" ON provider_runs FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own provider runs" ON provider_runs FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- RLS for audit_events
CREATE POLICY "Users can view their own audit events" ON audit_events FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own audit events" ON audit_events FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Setup update triggers for updated_at columns
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_documents_updated_at BEFORE UPDATE ON documents FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_conversations_updated_at BEFORE UPDATE ON conversations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
