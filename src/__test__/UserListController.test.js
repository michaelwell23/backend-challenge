const request = require('supertest');
import app from '../app';

test('Should list users of the api', async () => {
  const response = await request(app)
    .get('/api/users?sence=2')
    .send()
    .expect(200);
});
