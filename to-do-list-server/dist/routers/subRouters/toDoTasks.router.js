"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoTasksRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const middlewares_1 = require("../../middlewares");
const validators_1 = require("../../validators");
const constants_1 = require("../../constants");
const router = (0, express_1.Router)();
router.get('/', controllers_1.toDoTasksController.getAll);
router.post('/', middlewares_1.commonMiddlewares.checkIsEntityValid(validators_1.taskValidator), middlewares_1.commonMiddlewares.checkEntityById(constants_1.constants.LIST_ID, constants_1.constants.LIST_ENTITY, constants_1.constants.BODY), controllers_1.toDoTasksController.create);
router.put('/:taskId', middlewares_1.commonMiddlewares.checkIsEntityValid(validators_1.commonValidator), middlewares_1.commonMiddlewares.checkEntityById(constants_1.constants.TASK_ID, constants_1.constants.TASK_ENTITY), controllers_1.toDoTasksController.updateName);
router.patch('/:taskId', middlewares_1.commonMiddlewares.checkEntityById(constants_1.constants.TASK_ID, constants_1.constants.TASK_ENTITY), controllers_1.toDoTasksController.updateIsDone);
router.delete('/:taskId', middlewares_1.commonMiddlewares.checkEntityById(constants_1.constants.TASK_ID, constants_1.constants.TASK_ENTITY), controllers_1.toDoTasksController.deleteById);
exports.toDoTasksRouter = router;
//# sourceMappingURL=toDoTasks.router.js.map