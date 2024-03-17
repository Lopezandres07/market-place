import request from 'supertest'
import app from '../../server'
import { faker } from '@faker-js/faker'

describe('POST /api/v1/register create user with valid params', () => {
  const payload = {
    data: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatarURL: faker.image.avatar(),
    },
  }
  it('should respond with status 201', async () => {
    const response = await request(app).post('/api/v1/register').send(payload)
    expect(response.statusCode).toBe(201)
  })
})

/* describe('POST /login', () => {
  it('should respond with status 200 and authenticate the user', async () => {
    const userData = {
      email: 'usuario@example.com',
      password: 'contraseña123',
    }
    const response = await request(app).post('/login').send(userData)
    expect(response.status)
  })
})

describe('POST /googleLogin', () => {
  it('should respond with status 200 and authenticate the user with Google', async () => {
    const googleAuthData = {}
    const response = await request(app)
      .post('/googleLogin')
      .send(googleAuthData)

    expect(response.status)
  })
})
 */
