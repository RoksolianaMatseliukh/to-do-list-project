import { customStatuses } from './customStatuses';

export class ErrorHandler extends Error {
  status: number;

  constructor(message: string, status: number = customStatuses.BAD_REQUEST) {
    super(message);
    this.status = status;

    Error.captureStackTrace(this, this.constructor);
  }
}
