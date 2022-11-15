import express from 'express'
import { guideRouter } from '../index'
import request from 'supertest'
import { guides } from '../../data/seedData'

const app = express()
app.use('/guide', guideRouter)

describe('guid routes', () => {
    test('return status and data correctly for request /guide/list', async () => {
        const res = await request(app).get('/guide/list')
        expect(res.header['content-type']).toBe('application/json; charset=utf-8')
        expect(res.statusCode).toBe(200)
        expect(res.text).toEqual(JSON.stringify(guides))
      })
})