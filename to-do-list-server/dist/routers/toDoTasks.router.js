"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoTasksRouter = void 0;
const express_1 = require("express");
const toDoTasks_controller_1 = require("../controllers/toDoTasks.controller");
const common_middlewares_1 = require("../middlewares/common.middlewares");
const validators_1 = require("../validators");
const constants_1 = require("../constants");
const router = (0, express_1.Router)();
router.get('/', toDoTasks_controller_1.toDoTasksController.getAll);
router.post('/', common_middlewares_1.commonMiddlewares.checkIsEntityValid(validators_1.taskValidator), common_middlewares_1.commonMiddlewares.checkEntityById(constants_1.constants.LIST_ID, constants_1.constants.LIST_ENTITY, constants_1.constants.BODY), toDoTasks_controller_1.toDoTasksController.create);
router.put('/:taskId', common_middlewares_1.commonMiddlewares.checkIsEntityValid(validators_1.commonValidator), common_middlewares_1.commonMiddlewares.checkEntityById(constants_1.constants.TASK_ID, constants_1.constants.TASK_ENTITY), toDoTasks_controller_1.toDoTasksController.updateName);
router.patch('/:taskId', common_middlewares_1.commonMiddlewares.checkEntityById(constants_1.constants.TASK_ID, constants_1.constants.TASK_ENTITY), toDoTasks_controller_1.toDoTasksController.updateIsDone);
router.delete('/:taskId', common_middlewares_1.commonMiddlewares.checkEntityById(constants_1.constants.TASK_ID, constants_1.constants.TASK_ENTITY), toDoTasks_controller_1.toDoTasksController.deleteById);
exports.toDoTasksRouter = router;
//# sourceMappingURL=toDoTasks.router.js.map