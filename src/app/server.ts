import express from 'express'
import log from 'loglevel'
import { guideRouter } from '../routes/index'

/**
 * create expressjs server
 * set up routes
 */
export const startServer = (port: number, hostname: string) => {
  const app = express()
  app.use('/guide', guideRouter)

  app.listen(port, hostname, () => {
    log.info(`express server running at http://${hostname}:${port}`)
  })
}
