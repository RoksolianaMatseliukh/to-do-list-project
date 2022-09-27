"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const toDoLists_router_1 = require("./subRouters/toDoLists.router");
const toDoTasks_router_1 = require("./subRouters/toDoTasks.router");
const notFound_controller_1 = require("../controllers/notFound.controller");
const router = (0, express_1.Router)();
router.use('/toDoLists', toDoLists_router_1.toDoListsRouter);
router.use('/toDoTasks', toDoTasks_router_1.toDoTasksRouter);
router.use(notFound_controller_1.notFoundController.notFoundRouteCatcher);
exports.apiRouter = router;
//# sourceMappingURL=api.router.js.map