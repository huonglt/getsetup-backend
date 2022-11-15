import {
  findWeekNumber,
  findWeekDays,
  findNextXWeekDays,
} from '../util/weekUtil'

/**
 * Generate availaiblity weeks for seed data
 * Assume that the app is currently support 4 availability weeks
 */
export const generateAvailabilityWeeks = () => {
  const today = new Date()
  const currentWeekNumber = findWeekNumber(today)
  const thisWeekDays = findWeekDays(today)

  return [
    {
      weekNumber: currentWeekNumber,
      weekDays: thisWeekDays,
    },
    {
      weekNumber: currentWeekNumber + 1,
      weekDays: findNextXWeekDays(1),
    },
    {
      weekNumber: currentWeekNumber + 2,
      weekDays: findNextXWeekDays(2),
    },
    {
      weekNumber: currentWeekNumber + 3,
      weekDays: findNextXWeekDays(3),
    },
  ]
}
