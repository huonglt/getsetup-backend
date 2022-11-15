import { Request, Response } from 'express'
import { validationResult } from "express-validator"
import { GuideModel } from "../models/guideModel"

/**
   * Get list of guides currently supported
   */
 export const getGuideList = async (req: Request, res: Response) => {
    try {
      const result = await GuideModel.getGuideList()
      return res.status(200).json(result)
    } catch (err) {
      return res
        .status(500)
        .json({ error: 'Some error while trying to fetch data' })
    }
}