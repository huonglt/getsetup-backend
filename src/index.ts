import express from 'express'
import dotenv from 'dotenv'
import { guideRouter } from './routes'

dotenv.config()
const port = process.env.PORT

const app = express()
app.use('/guide', guideRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
