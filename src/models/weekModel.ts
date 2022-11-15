import { availabilityWeeks } from '../data/seedData'

/**
 * Simulate a week model where data is mocked
 */
const getWeekdays = async (weekNumber: number) => {
  const week = availabilityWeeks.find((item) => item.weekNumber === weekNumber)
  return Promise.resolve(week?.weekDays)
}

const getAvailabilityWeeks = async () => {
  return Promise.resolve(availabilityWeeks)
}

export const WeekModel = {
  getWeekdays,
  getAvailabilityWeeks,
}
