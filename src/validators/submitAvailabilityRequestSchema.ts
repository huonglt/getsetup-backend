import { checkSchema } from 'express-validator'

/**
 * Schema to validate data for submitting teaching availability request
 */
export const submitAvailabilityRequestSchema = checkSchema({
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
  availability: {
    exists: {
      errorMessage: 'availability is required',
      options: { checkFalsy: true },
    },
    isArray: {
      options: {
        min: 1,
      },
      errorMessage: 'Availability need to be an array',
    },
  },
  'availability.*.from': {
    exists: {
      errorMessage: 'From is required',
      options: { checkFalsy: true },
    },
    isDate: {
      if: (value: string) => {
        new Date(value).toString() !== 'Invalid Date'
      },
      errorMessage: 'from field must be a date string',
    },
  },
  'availability.*.to': {
    exists: {
      errorMessage: 'to field is required',
      options: { checkFalsy: true },
    },
    isDate: {
      if: (value: string) => {
        new Date(value).toString() !== 'Invalid Date'
      },
      errorMessage: 'to field must be a date string',
    },
  },
})
