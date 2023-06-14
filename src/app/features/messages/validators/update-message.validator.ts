import { Request, Response, NextFunction } from "express";
import { IDefaultResponse } from "../../../shared/utils/interfaces";


export const updateMessageValidator = (req: Request, res: Response, next: NextFunction) => {
  const { title, description } = req.body

  if (!title && !description) {
    return res.status(400).json({
      success: false,
      message: "O título e/ou descrição são obrigatório!",
    } as IDefaultResponse)
  }
  
  next()
}