import express from 'express'
import log from 'loglevel'
import {
  availabilityRouter,
  guideRouter,
  weekRouter,
} from '../routes/index'
import bodyParser from 'body-parser'
import cors from 'cors'
/**
 * create expressjs server
 * set up routes
 */
export const startServer = (port: number, hostname: string) => {
  const app = express()

  // for dev environemnt: to avoid CORS error when localhost frontend app send api requests
  app.use(
    cors({
      origin: 'http://localhost:4000',
    })
  )
  app.use(bodyParser.json())

  // all the routes currently supported
  app.use('/availability', availabilityRouter)
  app.use('/week', weekRouter)
  app.use('/guide', guideRouter)

  app.listen(port, hostname, () => {
    log.info(`express server running at http://${hostname}:${port}`)
  })
}
