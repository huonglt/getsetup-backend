import express from 'express'
import log from 'loglevel'
import { availabilityController, guideRouter, weekRouter } from '../routes/index'
import bodyParser from 'body-parser'
import cors from 'cors'
/**
 * create expressjs server
 * set up routes
 */
export const startServer = (port: number, hostname: string) => {
  const app = express()

  // to allow frontend app able to send api request to backend app without CORS error
  app.use(
    cors({
      origin: 'http://localhost:4000',
    })
  )
  app.use(bodyParser.json())

  app.use('/availability', availabilityController)
  app.use('/week', weekRouter)
  app.use('/guide', guideRouter)

  app.listen(port, hostname, () => {
    log.info(`express server running at http://${hostname}:${port}`)
  })
}
