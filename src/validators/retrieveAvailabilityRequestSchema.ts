import { checkSchema } from 'express-validator'

/**
 * Schema to validate data for retrieve teaching availability request
 */
export const retrieveAvailabilityRequestSchema = checkSchema({
  userId: {
    exists: {
      errorMessage: 'UserId is required',
      options: { checkFalsy: true },
    },
    isNumeric: { errorMessage: 'UserId must be a number' },
  },
  weekNumber: {
    exists: {
      errorMessage: 'weekNumber is required',
      options: { checkFalsy: true },
    },
    isNumeric: { errorMessage: 'weekNumber must be a number' },
  },
})
