"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const subRouters_1 = require("./subRouters");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.use('/toDoLists', subRouters_1.toDoListsRouter);
router.use('/toDoTasks', subRouters_1.toDoTasksRouter);
router.use(controllers_1.notFoundController.notFoundRouteCatcher);
router.use(controllers_1.errorController.errorCatcher);
exports.apiRouter = router;
//# sourceMappingURL=index.js.map