"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const subRouters_1 = require("./subRouters");
const controllers_1 = require("../controllers");
const errors_1 = require("../errors");
const router = (0, express_1.Router)();
router.use('/toDoLists', subRouters_1.toDoListsRouter);
router.use('/toDoTasks', subRouters_1.toDoTasksRouter);
router.use(controllers_1.notFoundController.notFoundRouteCatcher);
router.use((err, _, res, __) => {
    res
        .status(err.status || errors_1.customStatuses.INTERNAL_SERVER_ERROR)
        .json({
        message: err.message
    });
});
exports.apiRouter = router;
//# sourceMappingURL=index.js.map