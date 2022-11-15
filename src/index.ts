import dotenv from 'dotenv'
import { startServer } from './app/server'
import { startMongoDB } from './app/db'
import log from 'loglevel'

// enable all log level
log.enableAll()

dotenv.config()
const {
  EXPRESS_SERVER_PORT,
  EXPRESS_SERVER_HOSTNAME,
  MONGO_DB_HOST,
  MONG0_DB_NAME,
  MONG0_DB_PORT,
} = process.env

/**
 * Bootstrap app by starting up expressjs server and create connection to mongodb
 */
const boostrapApp = async () => {
  // start expressjs server
  startServer(Number(EXPRESS_SERVER_PORT), EXPRESS_SERVER_HOSTNAME)

  // if you want to use actual mongodb, uncomment the line below. It requires a mongodb database created. Otherwise app will use in-memory data
  //startMongoDB(MONGO_DB_HOST, Number(MONG0_DB_PORT), MONG0_DB_NAME)
}

boostrapApp()
