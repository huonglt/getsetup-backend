import express from 'express'
import * as guideController from '../controllers/guideController'

const router = express.Router()

/**
 * GET /guide/list request
 * Retrieve list of all guides currently supported
 */
router.get(
  '/list',
  guideController.getGuideList
)


export default router
