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
exports.CreateBusinessCategory = exports.businessCategory = exports.businessCategories = void 0;
const index_model_1 = require("../../../../../models/index.model");
exports.businessCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_model_1.model.businessCategory.findAll();
});
exports.businessCategory = (root, args) => __awaiter(void 0, void 0, void 0, function* () {
    const businessCategory = yield index_model_1.model.businessCategory.findById(args.id);
    return businessCategory;
});
exports.CreateBusinessCategory = (root, args) => __awaiter(void 0, void 0, void 0, function* () {
    const findBusinessCategory = yield index_model_1.model.businessCategory.findOne({
        name: args.name,
    });
    if (findBusinessCategory) {
        return { success: false, message: "Business Category already exists" };
    }
    else {
        yield index_model_1.model.businessCategory.insertBusinessCategory(args);
        const newBusinessCategory = Object.assign({}, args);
        return {
            success: true,
            message: "Business Category added successfully",
            newBusinessCategory: newBusinessCategory,
        };
    }
});
