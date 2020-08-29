"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidation = exports.RegisterValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.RegisterValidation = (data) => {
    const schema = joi_1.default.object({
        username: joi_1.default.string().min(6).required(),
        email: joi_1.default.string().required().email(),
        password: joi_1.default.string().min(8).required(),
    });
    return schema.validate(data);
};
exports.LoginValidation = (data) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().required().email(),
        password: joi_1.default.string().min(8).required(),
    });
    return schema.validate(data);
};
