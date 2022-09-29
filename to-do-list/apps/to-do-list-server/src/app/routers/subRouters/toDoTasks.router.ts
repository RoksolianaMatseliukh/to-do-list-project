import { Router } from 'express';

import { toDoTasksController } from '../../controllers';
import { commonMiddlewares } from '../../middlewares';
import { commonValidator, taskValidator } from '../../validators';
import { constants } from '../../constants';

const router = Router();

router.get(
  '/',
  toDoTasksController.getAll
);

router.post(
  '/',
  commonMiddlewares.checkIsEntityValid(taskValidator),
  commonMiddlewares.checkEntityById(constants.LIST_ID, constants.LIST_ENTITY, constants.BODY),
  toDoTasksController.create
);

router.put(
  '/:taskId',
  commonMiddlewares.checkIsEntityValid(commonValidator),
  commonMiddlewares.checkEntityById(constants.TASK_ID, constants.TASK_ENTITY),
  toDoTasksController.updateName
);

router.patch(
  '/:taskId',
  commonMiddlewares.checkEntityById(constants.TASK_ID, constants.TASK_ENTITY),
  toDoTasksController.updateIsDone
);

router.delete(
  '/:taskId',
  commonMiddlewares.checkEntityById(constants.TASK_ID, constants.TASK_ENTITY),
  toDoTasksController.deleteById
);

export const toDoTasksRouter = router;
