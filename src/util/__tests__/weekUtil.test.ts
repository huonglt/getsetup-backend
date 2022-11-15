import { findNextXWeekDays, findWeekDays } from '../weekUtil'

describe('weekUtil module', () => {
  it('findWeekDays return correct week days data for a given date', () => {
    // find week days for 16 Nov 2022
    const date = new Date(2022, 10, 16)
    const weekDays = findWeekDays(date)

    const expectedResult = [
      '2022-11-13T11:00:00.000Z',
      '2022-11-14T11:00:00.000Z',
      '2022-11-15T11:00:00.000Z',
      '2022-11-16T11:00:00.000Z',
      '2022-11-17T11:00:00.000Z',
      '2022-11-18T11:00:00.000Z',
      '2022-11-19T11:00:00.000Z',
    ]
    expect(JSON.stringify(weekDays)).toEqual(JSON.stringify(expectedResult))
  })

  it('findNextXWeekDays method return correct data for next week', () => {
    // find next week days for 16 Nov 2022
    const date = new Date(2022, 10, 16)
    const nextWeekDays = findNextXWeekDays(date, 1)
    const expectedResult = [
      '2022-11-20T11:00:00.000Z',
      '2022-11-21T11:00:00.000Z',
      '2022-11-22T11:00:00.000Z',
      '2022-11-23T11:00:00.000Z',
      '2022-11-24T11:00:00.000Z',
      '2022-11-25T11:00:00.000Z',
      '2022-11-26T11:00:00.000Z',
    ]
    expect(JSON.stringify(nextWeekDays)).toEqual(JSON.stringify(expectedResult))

    // next two weeks from 16 Nov 2022
    const nextTwoWeeks = findNextXWeekDays(date, 2)
    const expectedNextTwoWeeks = [
      '2022-12-04T11:00:00.000Z',
      '2022-12-05T11:00:00.000Z',
      '2022-12-06T11:00:00.000Z',
      '2022-12-07T11:00:00.000Z',
      '2022-12-08T11:00:00.000Z',
      '2022-12-09T11:00:00.000Z',
      '2022-12-10T11:00:00.000Z',
    ]
    expect(JSON.stringify(nextTwoWeeks)).toEqual(
      JSON.stringify(expectedNextTwoWeeks)
    )
  })
})
