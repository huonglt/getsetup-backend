/**
 * Guide available time: hour.minute. Assume second is 0 for simplicity
 * hour: number from 0 - 23
 * minute: number from 0 - 59
 */
export type GuideTime = {
  hour: number
  minute: number
}

/**
 * Guide availability: example 8.30 - 9.30, 19.00 - 20.00
 * to must be > from
 * can set minimum duration for an available block. ex do not consider a block of only 10 minutes, or a valid block must be at least 15 or 30 mins
 */
export type GuideAvailability = {
  from: GuideTime
  to: GuideTime
}

export type Guide = {
  user: number
  weekNumber: number
  availability: GuideAvailability[]
}
