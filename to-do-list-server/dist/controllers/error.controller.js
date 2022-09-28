"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorController = void 0;
const errors_1 = require("../errors");
class ErrorController {
    errorCatcher(err, _, res, __) {
        res
            .status(err.status || errors_1.customStatuses.INTERNAL_SERVER_ERROR)
            .json({
            message: err.message
        });
    }
}
exports.errorController = new ErrorController();
//# sourceMappingURL=error.controller.js.map