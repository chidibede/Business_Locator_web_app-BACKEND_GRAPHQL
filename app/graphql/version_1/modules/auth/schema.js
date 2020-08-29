"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
    extend type Query {
        users: [User!]
        user(id: ID!): User
        refreshToken: Auth!
        loginUser(email: String, password: String): LoginUserResponse!
    }

    type User {
        username: String!
        email: String!
        password: String
    }

    type Auth  {
        token: String!
        refreshToken: String!
        user: User!
    }

    type RegisterUserResponse {
    success: Boolean!
    message: String!
    newUser: User
  }

  type LoginUserResponse {
    success: Boolean!
    message: String!
    auth: Auth!
  }

    extend type Mutation {
        registerUser(username: String, email: String, password: String ): RegisterUserResponse!
    }
`;
exports.default = typeDefs;
