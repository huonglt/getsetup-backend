import { generateWeekNumbers } from '../data/seedData'

const weekNumbers = generateWeekNumbers()

/**
 * Simulate a week model where data is mocked
 */
const getWeekdays = async (weekNumber: number) => {
  const weekDays = weekNumbers.find((item) => item.weekNumber === weekNumber)
  return Promise.resolve(weekDays)
}

const getWeekNumbers = async () => {
  return Promise.resolve(weekNumbers)
}

export const WeekModel = {
  getWeekdays,
  getWeekNumbers,
}
