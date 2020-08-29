"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const model_1 = require("../model");
class User extends model_1.Model {
    constructor(connection, table) {
        super(connection, table);
    }
}
exports.User = User;
