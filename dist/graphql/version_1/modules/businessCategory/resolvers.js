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
const resolverFunctions_1 = require("./resolverFunctions/resolverFunctions");
const index_model_1 = require("../../../../models/index.model");
const resolvers = {
    Query: {
        businessCategory: resolverFunctions_1.businessCategory,
        businessCategories: resolverFunctions_1.businessCategories,
    },
    Mutation: {
        CreateBusinessCategory: resolverFunctions_1.CreateBusinessCategory,
    },
    // resolve the parent which then gets the children
    BusinessCategory: {
        businesses: (businessCategory) => __awaiter(void 0, void 0, void 0, function* () {
            return yield index_model_1.model.business.find({ businessCategoryId: businessCategory.id });
        })
    },
};
exports.default = resolvers;
