import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import log from 'loglevel'
import { AvailabilityModel } from '../models/availabilityModel'

/**
 * Retrieve teaching availability for a guide in a given week
 */
export const getGuideAvailability = async (req: Request, res: Response) => {
  // make sure request data is correct
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    })
  }

  // retrieve data from mongodb
  const { userId, weekNumber } = req.params
  const option = {
    userId: Number(userId),
    weekNumber: Number(weekNumber),
  }
  try {
    const result = await AvailabilityModel.findOne(option)
    return res.status(200).json(result)
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Some error while trying to fetch data' })
  }
}

/**
 * Add teaching availability timeslot for a given guide in a given week
 */
export const submitGuideAvailability = async (req: Request, res: Response) => {
  // validate request data
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    })
  }

  // overwrite the availability of a given guide in a given week in mongodb
  const { userId, weekNumber, availability } = req.body
  //const filter = { userId, weekNumber }
  //const options = { new: true, upsert: true }
  const guideAvailability = {
    userId,
    weekNumber,
    availability,
  }
  try {
    const result = await AvailabilityModel.findOneAndUpdate(guideAvailability)
    log.info(`submitGuideAvailability: result = ${JSON.stringify(result)}`)
    return res.status(200).json({ data: result })
  } catch (err) {
    return res.status(500).json({
      error:
        'Some error occurred while trying to save teaching availability data',
    })
  }
}
