import { Request, Response } from 'express'
import { validationResult } from "express-validator"
import { WeekModel } from "../models/weekModel"


/**
 * Retrieve list of days from Monday - Sunday for a given week number
 */
 export const getWeekdays = async (req: Request, res: Response) => {
    // make sure request data is correct
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      })
    }
  
    // retrieve data from mongodb
    const { weekNumber } = req.params
    try {
      const result = await WeekModel.getWeekdays()
      return res.status(200).json(result)
    } catch (err) {
      return res
        .status(500)
        .json({ error: 'Some error while trying to fetch data' })
    }
  }

  /**
   * Get list of week numbers currently supported
   */
  export const getWeekNumbers = async (req: Request, res: Response) => {
    try {
      const result = await WeekModel.getWeekNumbers()
      return res.status(200).json(result)
    } catch (err) {
      return res
        .status(500)
        .json({ error: 'Some error while trying to fetch data' })
    }
  }