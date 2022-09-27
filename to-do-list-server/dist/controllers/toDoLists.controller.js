"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoListsController = void 0;
const prisma_1 = require("../prisma");
class ToDoListsController {
    getAll(_, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const toDoLists = yield prisma_1.prisma.list.findMany();
                res.json(toDoLists);
            }
            catch (e) {
                next(e);
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newList = yield prisma_1.prisma.list.create({ data: req.body });
                res.json(newList);
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { listId } = req.params;
                const { id } = yield prisma_1.prisma.list.delete({
                    where: { id: +listId },
                });
                res.json({ id });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.toDoListsController = new ToDoListsController();
//# sourceMappingURL=toDoLists.controller.js.map