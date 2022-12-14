import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

import { prisma } from '../prisma';
import { customMessages, ErrorHandler } from '../errors';
import { constants } from '../constants';
import { List, Task } from '../../../../../libs/types';

class CommonMiddlewares {
  public checkIsEntityValid(validator: Joi.ObjectSchema) {
    return (req: Request, _: Response, next: NextFunction): void => {
      try {
        const { error, value } = validator.validate(req.body);

        if (error) {
          const [{ message }] = error.details;

          next(new ErrorHandler(message));
          return;
        }

        req.body = value;
        next();
      } catch (e: any) {
        next(e);
      }
    };
  }

  public checkEntityById(param: string, entity: string, reqKey: string = constants.PARAMS) {
    return async (req: Request, _: Response, next: NextFunction): Promise<void> => {
      try {
        const id = req[reqKey as keyof Request][param];

        if (!id) {
          const message = customMessages.paramIsNotProvided(param);

          next(new ErrorHandler(message));
          return;
        }

        const entityById: List | Task = await (prisma as any)[entity].findUnique({
          where: { id: +id }
        });

        if (!entityById) {
          const message = customMessages.entityNotFound(entity, id);

          next(new ErrorHandler(message));
          return;
        }

        req.isDone = (entityById as Task).isDone;
        next();
      } catch (e: any) {
        next(e);
      }
    };
  }
}

export const commonMiddlewares = new CommonMiddlewares();
