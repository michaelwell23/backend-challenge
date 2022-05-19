const request = require('supertest');
import app from '../app';

test('Should return user repository', async () => {
  const response = await request(app)
    .get('/api/users/michael/repos')
    .send()
    .expect(200);
});
