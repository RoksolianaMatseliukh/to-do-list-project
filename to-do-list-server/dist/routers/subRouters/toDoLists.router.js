"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoListsRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const middlewares_1 = require("../../middlewares");
const validators_1 = require("../../validators");
const constants_1 = require("../../constants");
const router = (0, express_1.Router)();
router.get('/', controllers_1.toDoListsController.getAll);
router.post('/', middlewares_1.commonMiddlewares.checkIsEntityValid(validators_1.commonValidator), controllers_1.toDoListsController.create);
router.delete('/:listId', middlewares_1.commonMiddlewares.checkEntityById(constants_1.constants.LIST_ID, constants_1.constants.LIST_ENTITY), controllers_1.toDoListsController.deleteById);
exports.toDoListsRouter = router;
//# sourceMappingURL=toDoLists.router.js.map