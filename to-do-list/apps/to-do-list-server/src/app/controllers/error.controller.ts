import { NextFunction, Request, Response } from 'express';

import { customStatuses, ErrorHandler } from '../errors';

class ErrorController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public errorCatcher(err: ErrorHandler, _: Request, res: Response, __: NextFunction): void {
    res
      .status(err.status || customStatuses.INTERNAL_SERVER_ERROR)
      .json({
        message: err.message
      });
  }
}

export const errorController = new ErrorController();
