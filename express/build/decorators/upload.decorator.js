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
exports.Upload = void 0;
const express_1 = require("@decorators/express");
const formidable_1 = require("formidable");
const upload_helper_1 = require("../helpers/upload.helper");
function Upload(validation) {
    return function (target, propertyKey, _descriptor) {
        (0, express_1.attachMiddleware)(target, propertyKey, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const form = new formidable_1.IncomingForm();
            form.parse(req, (err, _fields, files) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error en el sistema, dirigase al desarrollador",
                    });
                }
                const archivos = files.file;
                try {
                    req.files = yield (0, upload_helper_1.validateUpload)(archivos, validation);
                    next();
                }
                catch (err) {
                    return res
                        .status(400)
                        .json({ success: false, message: err });
                }
            }));
        }));
    };
}
exports.Upload = Upload;
