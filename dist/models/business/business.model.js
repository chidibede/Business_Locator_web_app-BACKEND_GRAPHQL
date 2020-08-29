"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Business = void 0;
const model_1 = require("../model");
class Business extends model_1.Model {
    constructor(connection, table) {
        super(connection, table);
    }
}
exports.Business = Business;
