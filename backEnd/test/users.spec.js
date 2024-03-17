import request from 'supertest'
import app from '../server'
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

describe('POST /api/v1/login login user with invalid credentials', () => {
  const payload = {
    data: {
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  }

  it('should respond with status 500', async () => {
    const response = await request(app).post('/api/v1/login').send(payload)
    expect(response.statusCode).toBe(500)
  })
})
