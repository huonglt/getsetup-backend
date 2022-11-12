enum DAYS {
  MON = 0,
  TUS,
  WED,
  THUR,
  FRI,
  SAT,
  SUN,
}

/**
 * For a given week, guide available time in a day: { day: MON, from: 9, to: 10 }
 */
export type AvailableTime = {
  day: DAYS
  from: number
  to: number
}

export type GuideAvailability = {
  user: number
  weekNumber: number
  availability: AvailableTime[]
}
