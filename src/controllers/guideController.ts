import { Request, Response } from 'express'
import { request } from 'http'

/**
 * Get guide availability
 */
export const getGuideAvailability = (req: Request, res: Response) => {
  console.log(`request req.params = ${JSON.stringify(req.params)}`)

  res.send('TODO: retrieve guide availability')
}
