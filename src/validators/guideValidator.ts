import { Request } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { GuideAvailability } from '../models/guide'

export function isValidGuideAvailability(
  params: any
): params is GuideAvailability {
  if (!params || typeof params !== 'object') {
    return false
  }
  const isValidId = typeof params.id === 'number'
  const isValidWeek = typeof params.week === 'number'

  return isValidId && isValidWeek
}
