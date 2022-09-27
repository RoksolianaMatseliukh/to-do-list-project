"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundController = void 0;
const errors_1 = require("../errors");
class NotFoundController {
    notFoundRouteCatcher(_, __, next) {
        next({
            message: errors_1.customMessages.ROUTE_NOT_FOUND,
            status: errors_1.customStatuses.NOT_FOUND
        });
    }
}
exports.notFoundController = new NotFoundController();
//# sourceMappingURL=notFound.controller.js.map