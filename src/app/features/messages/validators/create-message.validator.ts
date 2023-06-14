import { Request, Response, NextFunction } from "express";
import { IDefaultResponse } from "../../../shared/utils/interfaces";


export const createMessageValidator = (req: Request, res: Response, next: NextFunction) => {
  const { title, description, userId } = req.body

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "O título é obrigatório!",
    } as IDefaultResponse)
  }

  if (!description) {
    return res.status(400).json({
      success: false,
      message: "A descrição é obrigatória!",
    } as IDefaultResponse)
  }

  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "O Id do usuário é obrigatório.",
    } as IDefaultResponse)
  }
  
  next()
}