import express from 'express'
import * as weekController from '../controllers/weekController'

const router = express.Router()

/**
 * GET /week/weekDays/:weekNumber request
 * Retrieve week days for a given week
 */
router.get(
  '/weekDays/:weekNumber',
  weekController.getWeekdays
)

/**
 * GET /week/weekNumbers
 * Retrieve list of week number that are supported
 */
router.get('/weekNumbers', weekController.getWeekNumbers)

export default router
