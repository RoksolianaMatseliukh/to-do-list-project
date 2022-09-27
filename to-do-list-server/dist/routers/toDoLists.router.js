"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoListsRouter = void 0;
const express_1 = require("express");
const toDoLists_controller_1 = require("../controllers/toDoLists.controller");
const common_middlewares_1 = require("../middlewares/common.middlewares");
const validators_1 = require("../validators");
const constants_1 = require("../constants");
const router = (0, express_1.Router)();
router.get('/', toDoLists_controller_1.toDoListsController.getAll);
router.post('/', common_middlewares_1.commonMiddlewares.checkIsEntityValid(validators_1.commonValidator), toDoLists_controller_1.toDoListsController.create);
router.delete('/:listId', common_middlewares_1.commonMiddlewares.checkEntityById(constants_1.constants.LIST_ID, constants_1.constants.LIST_ENTITY), toDoLists_controller_1.toDoListsController.deleteById);
exports.toDoListsRouter = router;
//# sourceMappingURL=toDoLists.router.js.map