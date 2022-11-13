import { Request, Response } from 'express'
import log from 'loglevel'
import { GuideAvailabilityModel } from '../models/guideModel'
import { isValidGuideAvailability } from '../validators/guideValidator'

/**
 * Retrieve teaching availability for a guide in a given week
 */
export const getGuideAvailability = async (req: Request, res: Response) => {
  // make sure request data is correct
  const isValid = await isValidGuideAvailability(req.params)
  if (!isValid) {
    log.error(
      `Param object is not valid GuideAvailability: ${JSON.stringify(
        req.params
      )}`
    )

    res.status(400).json({ error: 'Data invalid' })
    return
  }

  // retrieve data from mongodb
  const { userId, weekNumber } = req.params
  try {
    const result = await GuideAvailabilityModel.find({ userId, weekNumber })
    res.status(200).json({ data: result })
  } catch (err) {
    res.status(500).json({ error: 'Some error while trying to fetch data' })
  }
}
