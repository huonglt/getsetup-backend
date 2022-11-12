import { Request, Response } from 'express'
import log from 'loglevel'

import { isValidGuideAvailability } from '../validators/guideValidator'

/**
 * Get guide availability
 */
export const getGuideAvailability = (req: Request, res: Response) => {
  const isValid = isValidGuideAvailability(req.params)
  if (!isValid) {
    log.error(
      `Param object is not valid GuideAvailability: ${JSON.stringify(
        req.params
      )}`
    )

    res.status(400).json({ error: 'Data invalid' })
    return
  }
  const { id, week } = req.params
  console.log(`request req.params = ${JSON.stringify(req.params)}`)

  res.send('TODO: retrieve guide availability')
}
