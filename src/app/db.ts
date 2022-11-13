import log from 'loglevel'
import mongoose from 'mongoose'

// start mongodb
export const startMongoDB = async (
  hostName: string,
  port: number,
  dbName: string
) => {
  try {
    const dbConnection = `mongodb://${hostName}:${port}/${dbName}`
    await mongoose.connect(dbConnection)
    log.info('mongodb started')
  } catch (err) {
    log.error(`Error connecting to test db ${JSON.stringify(err)}`)
  }
}
