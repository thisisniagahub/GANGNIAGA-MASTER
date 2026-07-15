import request from 'supertest';
import { app } from './app';

describe('API Endpoints', () => {
  it('GET /health should return status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('POST /api/knowledge/search should validate input', async () => {
    const res = await request(app)
      .post('/api/knowledge/search')
      .send({ queryEmbedding: 'not an array' });
    
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
