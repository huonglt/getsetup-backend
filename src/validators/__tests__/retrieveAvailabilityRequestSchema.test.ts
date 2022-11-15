import { retrieveAvailabilityRequestSchema as schema } from '../retrieveAvailabilityRequestSchema'
describe('retrieveAvailabilityRequestSchema', () => {
  it('errors are correct for invalid query', async () => {
    // userId invalid, weekNumber is missing
    const results = await Promise.all(
      schema.map((chain) =>
        chain.run({
          query: { userId: null },
        })
      )
    )
    const userIdError = results[0].context.errors[0]
    const weekNumberError = results[1].context.errors[0]

    // error UserId is required
    expect(userIdError.msg).toEqual('UserId is required')
    expect(userIdError.param).toEqual('userId')

    // error weekNumber is required
    expect(weekNumberError.msg).toEqual('weekNumber is required')
    expect(weekNumberError.param).toEqual('weekNumber')
  })

  it('userId valid, weekNumber out of range', async () => {
    // userId valid, weekNumber is out of range
    const results = await Promise.all(
      schema.map((chain) =>
        chain.run({
          query: { userId: 1, weekNumber: 53 },
        })
      )
    )
    const userIdError = results[0].context.errors[0]
    const weekNumberError = results[1].context.errors[0]

    // no error for field userId
    expect(results[0].context.errors).toEqual([])

    // error weekNumber must be a value from 1 to 52
    expect(weekNumberError.msg).toEqual('weekNumber must be a value from 1 to 52')
    expect(weekNumberError.param).toEqual('weekNumber')
  })

  it('valid query, no error', async () => {
    const results = await Promise.all(
      schema.map((chain) =>
        chain.run({
          query: { userId: 1, weekNumber: 1 },
        })
      )
    )

    // no error for field userId
    expect(results[0].context.errors).toEqual([])

    // no error for field weekNumber
    expect(results[1].context.errors).toEqual([])
  })
})
