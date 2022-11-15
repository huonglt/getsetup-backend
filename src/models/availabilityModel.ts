import { v4 as uuidv4 } from 'uuid'

type FilterOption = {
  userId: number
  weekNumber: number
}
type Availability = {
  from: Date
  to: Date
}

type GuideAvailability = {
  userId: number
  weekNumber: number
  availability: Availability[]
}
type GuideAvailabilityDoc = GuideAvailability & {
  _id: string
}

// containing all the docs of the systen
const allDocs: GuideAvailabilityDoc[] = []

/**
 * Method the find a document in the system matching the filter option
 * @param {FilterOption} option - the option containing the criteria to find matching documents
 * @returns {Promise<GuideAvailabilityDoc|null>}} - promise returning the first document matching the option or null if match not found
 */
const findOne = async (option: FilterOption) => {
  const result = allDocs.filter(
    (doc) =>
      doc.userId === option.userId && doc.weekNumber === option.weekNumber
  )
  if (result.length > 0) {
    return result[0]
  }
  return null
}

/**
 * Method to update a document if it already exist or insert the document if it not existed
 * @param {GuideAvailability} guideAvailability - the availability to insert / update to the documents
 * @returns {GuideAvailabilityDoc} - the updated doc or the newly created doc
 */
const findOneAndUpdate = async (guideAvailability: GuideAvailability) => {
  const { userId, weekNumber } = guideAvailability
  const option: FilterOption = { userId, weekNumber }
  const doc = await findOne(option)
  // document not exist, add it to allDocs
  if (!doc) {
    const newDoc = {
        // generate unique id for the document like how Moongoose does it
      _id: uuidv4(),
      ...guideAvailability,
    }
    allDocs.push(newDoc)
    return newDoc
  } else {
    // doc already exist, replace its availability
    doc.availability = guideAvailability.availability
  }
  return doc
}

/**
 * Simulate Moongoose Model for demo purposes
 */
export const AvailabilityModel = {
  findOne,
  findOneAndUpdate,
}
