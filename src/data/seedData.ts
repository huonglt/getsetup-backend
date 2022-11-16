import { generateAvailabilityWeeks } from '../tools/dataGenerator'
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

// list of availablity weeks supported by the system
export const availabilityWeeks = generateAvailabilityWeeks()
