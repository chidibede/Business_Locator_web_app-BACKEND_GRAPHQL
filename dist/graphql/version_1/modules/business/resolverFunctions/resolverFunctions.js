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
exports.CreateBusiness = exports.business = exports.businesses = void 0;
const index_model_1 = require("../../../../../models/index.model");
exports.businesses = () => __awaiter(void 0, void 0, void 0, function* () {
    const business = yield index_model_1.model.business.findAll();
    return business;
    // const businessCategory = await model.businessCategory.findById(business[0].id)
    // return {business, businessCategory}
});
exports.business = (root, args) => __awaiter(void 0, void 0, void 0, function* () {
    const business = yield index_model_1.model.business.findById(args.id);
    return business;
});
exports.CreateBusiness = (root, args) => __awaiter(void 0, void 0, void 0, function* () {
    const findBusiness = yield index_model_1.model.business.findOne({ name: args.name });
    if (findBusiness) {
        return { success: false, message: "Business already exists" };
    }
    else {
        yield index_model_1.model.business.insertBusiness(args);
        const newBusiness = Object.assign({}, args);
        return { success: true, message: "Business Created successfully", newBusiness: newBusiness };
    }
});
