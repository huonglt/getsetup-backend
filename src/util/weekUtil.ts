/**
 * Module to contain utility methods for week number and days of a given week
 */

/**
 * Method to get the week days of a date
 * A week is from Monday to Sunday (can be changed to Sunday to Monday)
 * A day in the week is at 0 hour, 0 minute, 0 second
 * @param {Date} date - a date to find the week days for
 * @returns {Date[]} - the week containing the date
 */
export const findWeekDays = (date: Date): Date[] => {
  const weekDays: Date[] = []
  for (let i = 1; i <= 7; i++) {
    let day = new Date(date.setDate(date.getDate() - date.getDay() + i))
    // set hour, minute and second to 0
    day = new Date(day.setHours(0))
    day = new Date(day.setMinutes(0))
    day = new Date(day.setSeconds(0))
    weekDays.push(day)
  }

  return weekDays
}

/**
 * Method to find week days in next X week from a date
 * @param {number} week - in the next X week
 * @returns {Date[]} - week days in next X week
 */
export const findNextXWeekDays = (date: Date, week: number): Date[] => {
  //const today = new Date()
  let dateInXWeek = new Date(date.setDate(date.getDate() + week * 7))
  // set hour, minute and second to 0
  dateInXWeek = new Date(dateInXWeek.setHours(0))
  dateInXWeek = new Date(dateInXWeek.setMinutes(0))
  dateInXWeek = new Date(dateInXWeek.setSeconds(0))
  return findWeekDays(dateInXWeek)
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
