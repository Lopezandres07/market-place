import express from 'express'
import cors from 'cors'
import swagger from './config/swagger/swagger.js'
import userRoutes from './config/routes/userRoutes.js'
import productsRoutes from './config/routes/productsRoutes.js'

const app = express()
app.use('*', cors())

const PORT = 3000
swagger(app)

app.use(express.json())
app.use('/api/v1', userRoutes)
app.use('/api/v1', productsRoutes)

/* // Verificar si este archivo es el punto de entrada principal
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api/v1/docs`);
  });
} */

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
  console.log(`Swagger docs available at http://localhost:${PORT}/api/v1/docs`)
})

export default app
