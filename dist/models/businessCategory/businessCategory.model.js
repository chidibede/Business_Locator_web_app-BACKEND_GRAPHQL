"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessCategory = void 0;
const model_1 = require("../model");
class BusinessCategory extends model_1.Model {
    constructor(connection, table) {
        super(connection, table);
    }
}
exports.BusinessCategory = BusinessCategory;
