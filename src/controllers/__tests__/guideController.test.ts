import { getGuideList } from '../guideController'
import express from 'express'
import request from 'supertest'
import { guides } from '../../data/seedData'

const app = express()
app.get('/list', getGuideList)

describe('guideController', () => {
  it('getGuideList', async () => {
    const res = await request(app).get('/list')
    console.log(`res = ${JSON.stringify(res)}`)
    expect(res.text).toEqual(JSON.stringify(guides))
  })
})
