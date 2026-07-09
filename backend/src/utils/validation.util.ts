import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validationResultHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({
      success: false,
      message: 'Error de validación',
      errors: errors.array().map((err) => err.msg),
    });
    return;
  }

  next();
};
