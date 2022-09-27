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
exports.toDoTasksController = void 0;
const prisma_1 = require("../prisma");
class ToDoTasksController {
    getAll(_, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const toDoTasks = yield prisma_1.prisma.task.findMany();
                res.json(toDoTasks);
            }
            catch (e) {
                next(e);
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTask = yield prisma_1.prisma.task.create({ data: req.body });
                res.json(newTask);
            }
            catch (e) {
                next(e);
            }
        });
    }
    updateName(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body: { name }, params: { taskId } } = req;
                const updatedTask = yield prisma_1.prisma.task.update({
                    where: { id: +taskId },
                    data: { name }
                });
                res.json(updatedTask);
            }
            catch (e) {
                next(e);
            }
        });
    }
    updateIsDone(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { isDone, params: { taskId } } = req;
                const updatedTask = yield prisma_1.prisma.task.update({
                    where: { id: +taskId },
                    data: { isDone: !isDone }
                });
                res.json(updatedTask);
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { taskId } = req.params;
                const { id } = yield prisma_1.prisma.task.delete({
                    where: { id: +taskId }
                });
                res.json({ id });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.toDoTasksController = new ToDoTasksController();
//# sourceMappingURL=toDoTasks.controller.js.map