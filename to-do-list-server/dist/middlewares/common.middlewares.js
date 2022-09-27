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
exports.commonMiddlewares = void 0;
const prisma_1 = require("../prisma");
const errors_1 = require("../errors");
const constants_1 = require("../constants");
class CommonMiddlewares {
    checkIsEntityValid(validator) {
        return (req, _, next) => {
            try {
                const { error, value } = validator.validate(req.body);
                if (error) {
                    const [{ message }] = error.details;
                    next(new errors_1.ErrorHandler(message));
                    return;
                }
                req.body = value;
                next();
            }
            catch (e) {
                next(e);
            }
        };
    }
    checkEntityById(param, entity, reqKey = constants_1.constants.PARAMS) {
        return (req, _, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req[reqKey][param];
                if (!id) {
                    const message = errors_1.customMessages.paramIsNotProvided(param);
                    next(new errors_1.ErrorHandler(message));
                    return;
                }
                const entityById = yield prisma_1.prisma[entity].findUnique({
                    where: { id: +id }
                });
                if (!entityById) {
                    const message = errors_1.customMessages.entityNotFound(entity, id);
                    next(new errors_1.ErrorHandler(message));
                    return;
                }
                req.isDone = entityById.isDone;
                next();
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.commonMiddlewares = new CommonMiddlewares();
//# sourceMappingURL=common.middlewares.js.map