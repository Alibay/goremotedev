import { Request, NextFunction } from 'express';
import { Response } from 'express-serve-static-core';
import { getLogger } from '../factories/logger';

const log = getLogger('errorHandler');

export default function errorHandler(
  err: any,
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  log.error('Error', err);
  next(err);
}
