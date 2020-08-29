"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolverFunctions_1 = require("./resolverFunctions/resolverFunctions");
const resolvers = {
    Query: {
        business: resolverFunctions_1.business,
        businesses: resolverFunctions_1.businesses,
    },
    Mutation: {
        CreateBusiness: resolverFunctions_1.CreateBusiness,
    },
};
exports.default = resolvers;
