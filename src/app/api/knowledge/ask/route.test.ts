import { describe, it, expect, vi } from 'vitest';
import { POST } from './route';

vi.mock('ai', () => ({
  generateText: vi.fn().mockResolvedValue({ text: 'Mock generated answer' }),
}));

vi.mock('@/lib/services', () => ({
  vectorStore: {
    search: vi.fn().mockResolvedValue([
      { content: 'Mock context 1' },
      { content: 'Mock context 2' }
    ])
  },
  ai: {
    generateEmbedding: vi.fn().mockResolvedValue([0.1, 0.2, 0.3]),
  }
}));

vi.mock('@/utils/supabase/server', () => ({
  createClient: vi.fn().mockReturnValue({
    auth: {
      getUser: vi.fn().mockResolvedValue({ data: { user: null } })
    }
  })
}));

vi.mock('next/headers', () => ({
  cookies: vi.fn().mockReturnValue({
    getAll: vi.fn(),
    setAll: vi.fn()
  })
}));

describe('POST /api/knowledge/ask', () => {
  it('should return 400 if query is missing', async () => {
    const req = new Request('http://localhost/api/knowledge/ask', {
      method: 'POST',
      body: JSON.stringify({}),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe('query is required');
  });

  it('should return answer', async () => {
    const req = new Request('http://localhost/api/knowledge/ask', {
      method: 'POST',
      body: JSON.stringify({ query: 'What is this?' }),
    });
    const res = await POST(req);
    const data = await res.json();
    if (res.status !== 200) console.error("Test error:", data);
    expect(res.status).toBe(200);
    expect(data.answer).toBe('Mock generated answer');
  });
});
