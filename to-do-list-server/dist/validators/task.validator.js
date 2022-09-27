"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.taskValidator = joi_1.default.object({
    name: joi_1.default.string().trim().required(),
    listId: joi_1.default.number().min(1).required()
});
//# sourceMappingURL=task.validator.js.map