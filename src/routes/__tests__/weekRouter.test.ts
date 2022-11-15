import { weekRouter } from '../index'
import request from 'supertest'
import express from 'express'
import { availabilityWeeks } from '../../data/seedData'

const app = express()
app.use('/week', weekRouter)

describe('Week router module', () => {
  test('return status and data correctly for request /weekNumbers', async () => {
    const res = await request(app).get('/week/availabilityWeeks')
    expect(res.header['content-type']).toBe('application/json; charset=utf-8')
    expect(res.statusCode).toBe(200)

    expect(res.text).toEqual(JSON.stringify(availabilityWeeks))
  })
})
