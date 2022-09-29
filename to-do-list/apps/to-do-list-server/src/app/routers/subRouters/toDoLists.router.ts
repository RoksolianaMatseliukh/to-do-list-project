import { Router } from 'express';

import { toDoListsController } from '../../controllers';
import { commonMiddlewares } from '../../middlewares';
import { commonValidator } from '../../validators';
import { constants } from '../../constants';

const router = Router();

router.get(
  '/',
  toDoListsController.getAll
);

router.post(
  '/',
  commonMiddlewares.checkIsEntityValid(commonValidator),
  toDoListsController.create
);

router.delete(
  '/:listId',
  commonMiddlewares.checkEntityById(constants.LIST_ID, constants.LIST_ENTITY),
  toDoListsController.deleteById
);

export const toDoListsRouter = router;
