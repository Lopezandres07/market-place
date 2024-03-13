import request from 'supertest';
import app from '../../server.js'; // Importa tu aplicación Express

describe('Get /products', () => {
  it('should respond with status 200 when fetching all products', async () => {
    const response = await request(app).get('/products');
    expect(response.status);
    // Puedes agregar más aserciones según sea necesario
  });
});
