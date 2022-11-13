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
    isInt: { errorMessage: 'UserId must be a number' },
  },
  weekNumber: {
    exists: {
      errorMessage: 'weekNumber is required',
      options: { checkFalsy: true },
    },
    isInt: {
      options: { min: 1, max: 52 },
      errorMessage: 'weekNumber must be a value from 1 to 52',
    },
  },
})
