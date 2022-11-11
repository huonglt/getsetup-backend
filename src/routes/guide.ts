import express from 'express'
import * as guideController from '../controllers/guideController'

const router = express.Router()

/**
 * GET /guide/:id request
 */
router.get('/:id', guideController.getGuideAvailability)

export default router
