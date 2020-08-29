"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolverFunctions_1 = require("./resolverFunctions/resolverFunctions");
const resolvers = {
    Query: {
        user: resolverFunctions_1.user,
        users: resolverFunctions_1.users,
        loginUser: resolverFunctions_1.loginUser,
        refreshToken: resolverFunctions_1.refreshToken
    },
    Mutation: {
        registerUser: resolverFunctions_1.registerUser,
    },
};
exports.default = resolvers;
