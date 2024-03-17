import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import swagger from './config/swagger/swagger.js'
import userRoutes from './config/routes/userRoutes.js'
import productsRoutes from './config/routes/productsRoutes.js'

const app = express()

// Comentar para ejecutar test ⬇️

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
  console.log(`Swagger docs available at http://localhost:${PORT}/api/v1/docs`)
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use('/uploads', express.static(join(__dirname, 'uploads')))

// Comentar para ejecutar test ⬆️

app.use('*', cors())
app.use(express.json())
app.use('/api/v1', userRoutes)
app.use('/api/v1', productsRoutes)
swagger(app)

export default app
