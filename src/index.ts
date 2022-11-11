import express from 'express'
import dotenv from 'dotenv'
import { getGuideAvailability } from './controllers/guideController'

dotenv.config()
const port = process.env.PORT

const app = express()
app.get('/guideAvailability', getGuideAvailability)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
