const request = require('supertest');
import app from '../app';

test('Should return user details', async () => {
  const response = await request(app)
    .get('/api/users/michael/details')
    .send()
    .expect(200);
});
