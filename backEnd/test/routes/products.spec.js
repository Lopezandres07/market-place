import request from 'supertest'
import app from '../../server'
import { faker } from '@faker-js/faker'

describe('GET /api/v1/products get all products', () => {
  it('should respond with status 200', async () => {
    const response = await request(app).get('/api/v1/products')
    expect(response.statusCode).toBe(200)
  })
})

describe('POST /api/v1/products create a new product', () => {
  const payload = {
    product: {
      user_id: 27,
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      price: faker.number.int({ min: 0, max: 9999 }),
      imageURL: faker.image.url(),
    },
  }

  console.log(payload)

  it('should respond with status 201', async () => {
    const response = await request(app).post('/api/v1/products').send(payload)
    expect(response.statusCode).toBe(201)
    expect(response.body).toHaveProperty('product')
  })
})
