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
exports.helpersService = void 0;
const prisma_1 = require("../prisma");
const errors_1 = require("../errors");
class Helpers {
    createFirstListIfItDoesntExist() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield prisma_1.prisma.list.findFirst();
                if (list) {
                    console.log(errors_1.customMessages.ENTITY_ALREADY_EXISTS);
                    return;
                }
                yield prisma_1.prisma.list.create({ data: { name: 'default' } });
                console.log(errors_1.customMessages.ENTITY_HAS_CREATED);
            }
            catch (e) {
                console.error(e.message);
            }
        });
    }
}
exports.helpersService = new Helpers();
//# sourceMappingURL=index.js.map