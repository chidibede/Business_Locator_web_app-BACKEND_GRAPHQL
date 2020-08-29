"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
const user_model_1 = require("./User/user.model");
const knex_1 = require("../config/knex");
const business_model_1 = require("./business/business.model");
const businessCategory_model_1 = require("./businessCategory/businessCategory.model");
const user = new user_model_1.User(knex_1.connection, 'user_table');
const business = new business_model_1.Business(knex_1.connection, 'business');
const businessCategory = new businessCategory_model_1.BusinessCategory(knex_1.connection, 'businessCategory');
exports.model = {
    user,
    business,
    businessCategory
};
