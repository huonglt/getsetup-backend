import { availabilityRouter } from '../index'
import express from 'express'
import request from 'supertest'
import { AvailabilityModel } from '../../models/availabilityModel'
import bodyParser from 'body-parser'

jest.mock('../../models/availabilityModel')

const app = express()
app.use(bodyParser.json())
app.use('/availability', availabilityRouter)

describe('availabilityRoute', () => {
  it('no payload in body, /update route return 404', async () => {
    const payload: string | object = null
    const res = await request(app)
      .post('/availability/update')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    expect(res.status).toEqual(400)
  })

  it('invalid payload, /update route return 404', async () => {
    const payload: string | object = { userId: 1, weekNumber: 1 }
    const res = await request(app)
      .post('/availability/update')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    expect(res.status).toEqual(400)
  })

  it('valid payload, AvailabilityModel update document successful, /update route return 200 and correct data', async () => {
    const from = new Date(2022, 10, 14, 8, 0)
    const to = new Date(2022, 10, 14, 9, 0)
    const mockedDoc = {
      _id: 'mockId',
      userId: 1,
      weekNumber: 1,
      availability: [{ from, to }],
    }

    // mock AvailabilityModel.findOneAndUpdate to indicate successful update / or insert
    jest
      .spyOn(AvailabilityModel, 'findOneAndUpdate')
      .mockResolvedValue(mockedDoc)

    const payload: string | object = {
      userId: 1,
      weekNumber: 1,
      availability: [{ from, to }],
    }
    const res = await request(app)
      .post('/availability/update')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    // the response return 200 status and correct data
    expect(res.status).toEqual(200)
    expect(res.text).toEqual(JSON.stringify({ data: mockedDoc }))
  })
})
