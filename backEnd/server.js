import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import swagger from './config/swagger/swagger.js'
import userRoutes from './config/routes/userRoutes.js'
import productsRoutes from './config/routes/productsRoutes.js'

const app = express()

app.use('*', cors())
app.use(express.json())
swagger(app)

/* const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use('/uploads', express.static(join(__dirname, 'uploads'))) */

app.use('/api/v1', userRoutes)
app.use('/api/v1', productsRoutes)

export default app
