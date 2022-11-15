import express from 'express'
import * as weekController from '../controllers/weekController'

const router = express.Router()

/**
 * GET /week/weekDays/:weekNumber request
 * Retrieve week days for a given week
 */
router.get('/weekDays/:weekNumber', weekController.getWeekdays)

/**
 * GET /week/availability
 * Retrieve list of availability weeks that are supported
 */
router.get('/availabilityWeeks', weekController.getAvailabilityWeeks)

export default router
