import mongoose from 'mongoose'
const Schema = mongoose.Schema

/**
 * Mongoose schema for Available Time, which is a nested document inside GuideAvailability document
 */
const availableTimeSchema = new Schema({
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  booked: { type: Boolean, required: true, default: false },
})

/**
 * Mongoose schema for Guide Availability
 */
const guideAvailabilitySchema = new Schema({
  userId: { type: Number, index: true, required: true, unique: true },
  weekNumber: { type: Number, min: 1, max: 52, required: true, unique: true },
  availability: [availableTimeSchema],
})

/**
 * The guide available time model to read and write documents into underlying MongoDB database
 */
export const GuideAvailabilityModel = mongoose.model(
  'GuideAvailabilityModel',
  guideAvailabilitySchema
)
