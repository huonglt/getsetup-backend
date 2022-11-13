import mongoose from 'mongoose'
const Schema = mongoose.Schema

const availableTimeSchema = new Schema({
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  booked: { type: Boolean, required: true, default: false },
})

const guideAvailabilitySchema = new Schema({
  userId: { type: Number, index: true, required: true, unique: true },
  weekNumber: { type: Number, min: 1, max: 52, required: true, unique: true },
  availability: [availableTimeSchema],
})

export const AvailableTimeModel = mongoose.model(
  'AvailableTimeModel',
  availableTimeSchema
)

export const GuideAvailabilityModel = mongoose.model(
  'GuideAvailabilityModel',
  guideAvailabilitySchema
)
