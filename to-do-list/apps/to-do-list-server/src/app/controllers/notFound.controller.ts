import { NextFunction, Request, Response } from 'express';

import { customMessages, customStatuses } from '../errors';

class NotFoundController {
  public notFoundRouteCatcher(_: Request, __: Response, next: NextFunction): void {
    next({
      message: customMessages.ROUTE_NOT_FOUND,
      status: customStatuses.NOT_FOUND
    });
  }
}

export const notFoundController = new NotFoundController();
