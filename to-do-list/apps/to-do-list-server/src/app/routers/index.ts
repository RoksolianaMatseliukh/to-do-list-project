import { Router } from 'express';

import { toDoListsRouter, toDoTasksRouter } from './subRouters';
import { errorController, notFoundController } from '../controllers';

const router = Router();

router.use('/toDoLists', toDoListsRouter);
router.use('/toDoTasks', toDoTasksRouter);

router.use(notFoundController.notFoundRouteCatcher);
router.use(errorController.errorCatcher);

export const apiRouter = router;
