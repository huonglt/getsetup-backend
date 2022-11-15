import { weekDays, weekNumbers } from '../data/seedData'
/**
 * Simulate a week model where data is mocked
 */
const getWeekdays = async () => {
  return Promise.resolve(weekDays)
}

const getWeekNumbers = async () => {
  return Promise.resolve(weekNumbers)
}

export const WeekModel = {
  getWeekdays,
  getWeekNumbers,
}
