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

// weekDays for a given week. For now return same set of week days for any week. In the future return better meaningful data
export const weekDays = [
  new Date(2022, 10, 14),
  new Date(2022, 10, 15),
  new Date(2022, 10, 16),
  new Date(2022, 10, 17),
  new Date(2022, 10, 18),
  new Date(2022, 10, 19),
  new Date(2022, 10, 20),
]

// list of all week numbers supported by the system
export const weekNumbers = [
  {
    weekNumber: 1,
    monday: new Date(2022, 10, 14),
    sunday: new Date(2022, 10, 20),
  },
  {
    weekNumber: 2,
    monday: new Date(2022, 10, 21),
    sunday: new Date(2022, 10, 27),
  },
  {
    weekNumber: 3,
    monday: new Date(2022, 10, 28),
    sunday: new Date(2022, 11, 4),
  },
  {
    weekNumber: 4,
    monday: new Date(2022, 11, 5),
    sunday: new Date(2022, 11, 11),
  },
]
