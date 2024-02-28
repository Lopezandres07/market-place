import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Market Place API',
      version: '1.0.0',
      description: 'API para el manejo de usuarios y articulos',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
  },
  apis: ['config/routes/docs/*.yaml'],
}

const swaggerDocument = YAML.load('config/routes/docs/swaggerV1.yaml')

const specs = swaggerJSDoc({ ...options, ...swaggerDocument })

export default (app) => {
  app.use(
    '/api/v1/docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      customCssUrl:
        'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-material.css',
    })
  )
}
