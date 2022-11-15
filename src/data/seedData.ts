import {
  findNextXWeekDays,
  findWeekDays,
  findWeekNumber,
} from '../util/weekUtil'
/**
 * There is no actual database setup for this excercise
 * This module is to contain seed data, acting like database, for the app
 */

// list of all guides supported by the system
export const guides = [
  {
    userId: 1,
    userName: 'Doris Wilson',
  },
  {
    userId: 2,
    userName: 'Amy Smith',
  },
]

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
      weekDays: findNextXWeekDays(4),
    },
  ]
}
