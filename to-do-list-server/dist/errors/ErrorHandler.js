"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const customStatuses_1 = require("./customStatuses");
class ErrorHandler extends Error {
    constructor(message, status = customStatuses_1.customStatuses.BAD_REQUEST) {
        super(message);
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map