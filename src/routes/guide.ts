import express from 'express'
import * as guideController from '../controllers/guideController'
import {
  retrieveGuideAvailabilityRequestSchema,
  submitGuideAvailabilityRequestSchema,
} from '../validators/validatorSchema'

const router = express.Router()

/**
 * GET /guide/:id/:week request
 * Retrieve guide teaching availability for a given week
 * id: number - guide id
 * week: number - in range [0-51]
 */
router.get(
  '/:userId/:weekNumber',
  retrieveGuideAvailabilityRequestSchema,
  guideController.getGuideAvailability
)

/**
 * submit availability for a guide in a given week with an array of time available
 */
router.post(
  '/availability',
  submitGuideAvailabilityRequestSchema,
  guideController.submitGuideAvailability
)

export default router
