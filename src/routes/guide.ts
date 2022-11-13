import express from 'express'
import * as guideController from '../controllers/guideController'

const router = express.Router()

/**
 * GET /guide/:id/:week request
 * Retrieve guide teaching availability for a given week
 * id: number - guide id
 * week: number - in range [0-51]
 */
router.get('/:userId/:weekNumber', guideController.getGuideAvailability)

export default router
