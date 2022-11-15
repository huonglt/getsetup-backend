import mongoose from 'mongoose'
const Schema = mongoose.Schema

/**
 * Mongoose schema for Available Time, which is a nested document inside GuideAvailability document
 * Indidate a time slot [from, to] in a particular date where a guide is free or booked
 */
const availableTimeSchema = new Schema({
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  booked: { type: Boolean, required: true, default: false },
})

/**
 * Mongoose schema for Guide Availability
 * Represent schema of teaching availability of guide in a specific week
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
