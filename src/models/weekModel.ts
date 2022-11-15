import { generateWeekNumbers } from '../data/seedData'

const weekNumbers = generateWeekNumbers()

/**
 * Simulate a week model where data is mocked
 */
const getWeekdays = async (weekNumber: number) => {
  const week = weekNumbers.find((item) => item.weekNumber === weekNumber)
  return Promise.resolve(week?.weekDays)
}

const getWeekNumbers = async () => {
  return Promise.resolve(weekNumbers)
}

export const WeekModel = {
  getWeekdays,
  getWeekNumbers,
}
