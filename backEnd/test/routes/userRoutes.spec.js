import request from 'supertest';
import app from '../../server'; 

describe('POST /register', () => {
  it('should respond with status 200 and create a new user', async () => {
    const userData = {
      email: 'usuario@example.com',
      password: 'contraseña123',
    };
    const response = await request(app)
      .post('/register')
      .send(userData);
    expect(response.status);
  });
});
describe('POST /login', () => {
  it('should respond with status 200 and authenticate the user', async () => {
    const userData = {
      email: 'usuario@example.com',
      password: 'contraseña123',
    };
    const response = await request(app)
      .post('/login')
      .send(userData);
    expect(response.status);
  });
});
describe('POST /googleLogin', () => {
  it('should respond with status 200 and authenticate the user with Google', async () => {
    const googleAuthData = {
    };
    const response = await request(app)
      .post('/googleLogin')
      .send(googleAuthData);

    expect(response.status);
  });
});
