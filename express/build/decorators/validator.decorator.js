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
exports.Validator = void 0;
const express_1 = require("@decorators/express");
function Validator(schema) {
    return function (target, propertyKey, _descriptor) {
        (0, express_1.attachMiddleware)(target, propertyKey, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const data = yield schema.safeParseAsync(req.body);
            if (!data.success) {
                return res.status(400).json({
                    success: false,
                    message: data.error.issues[0].message,
                    body: data.error.issues[0].path[0],
                });
            }
            req.body = data.data;
            next();
        }));
    };
}
exports.Validator = Validator;
