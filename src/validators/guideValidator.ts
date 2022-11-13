import * as yup from 'yup'

const paramsSchema = yup.object({
  userId: yup.number().required(),
  weekNumber: yup.number().required(),
})

/**
 * Validate the request.params to the schema
 * @param params
 * @returns
 */
export const isValidGuideAvailability = async (params: any) => {
  const isValid = await paramsSchema.isValid(params)
  return isValid === true
}
