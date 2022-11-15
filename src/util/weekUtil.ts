/**
 * Module to contain utility methods for week number and days of a given week
 */

/**
 * Method to get the week days of a date
 * A week is from Monday to Sunday (can be changed to Sunday to Monday)
 * @param {Date} date - a date to find the week days for
 * @returns {Date[]} - the week containing the date
 */
export const findWeekDays = (date: Date): Date[] => {
  const weekDays: Date[] = []
  for (let i = 1; i <= 7; i++) {
    weekDays.push(new Date(date.setDate(date.getDate() - date.getDay() + i)))
  }
  /*const monday = new Date(date.setDate(date.getDate() - date.getDay() + 1))
  const sunday = new Date(date.setDate(date.getDate() - date.getDay() + 7))
  return [monday.toLocaleDateString(), sunday.toLocaleDateString()]*/
  return weekDays
}

/**
 * Method to find week days in next X week
 * @param {number} week - in the next X week
 * @returns {Date[]} - week days in next X week
 */
export const findNextXWeekDays = (week: number): Date[] => {
  const today = new Date()
  const todayInXWeek = new Date(today.setDate(today.getDate() + week * 7))
  return findWeekDays(todayInXWeek)
}

/**
 * Find the week number of a date
 * First of Jan is first week, and there are 52 weeks in a year
 * @param {Date} date - the date to find which nuber for
 * @returns {number} - the week number of the date
 */
export const findWeekNumber = (date: Date): number => {
  // date is 1 Jan, week number is 1
  if (date.getMonth() === 0 && date.getDate() === 1) {
    return 1
  }
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
  const daysElapsed = Math.floor(
    (date.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000)
  )

  const weekNumber = Math.ceil(daysElapsed / 7)
  return weekNumber
}
