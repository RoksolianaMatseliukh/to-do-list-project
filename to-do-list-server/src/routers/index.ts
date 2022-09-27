import { NextFunction, Request, Response, Router } from 'express';

import { toDoListsRouter, toDoTasksRouter } from './subRouters';
import { notFoundController } from '../controllers';
import { ErrorHandler, customStatuses } from '../errors';

const router = Router();

router.use('/toDoLists', toDoListsRouter);
router.use('/toDoTasks', toDoTasksRouter);

router.use(notFoundController.notFoundRouteCatcher);

router.use((err: ErrorHandler, _: Request, res: Response, __: NextFunction) => {
    res
        .status(err.status || customStatuses.INTERNAL_SERVER_ERROR)
        .json({
            message: err.message
        });
});

export const apiRouter = router;