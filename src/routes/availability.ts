import express from 'express'
import * as availabilityController from '../controllers/availabilityController'
import {
  submitAvailabilityRequestSchema,
  retrieveAvailabilityRequestSchema,
} from '../validators'

const router = express.Router()

/**
 * GET /guide/:id/:week request
 * Retrieve guide teaching availability for a given week
 * id: number - guide id
 * week: number - in range [0-51]
 */
router.get(
  '/:userId/:weekNumber',
  retrieveAvailabilityRequestSchema,
  availabilityController.getGuideAvailability
)

/**
 * POST /guide/availability
 * submit availability for a guide in a given week with an array of time available
 */
router.post(
  '/availability',
  submitAvailabilityRequestSchema,
  availabilityController.submitGuideAvailability
)

export default router
