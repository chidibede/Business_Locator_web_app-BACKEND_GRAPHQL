"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
  extend type Query {
    businessCategory(id: ID!): BusinessCategory!
    businessCategories: [BusinessCategory!]
  }

  type BusinessCategory {
    id: ID!
    name: String!
    type: String!
    businesses: [Business]
  }

  type CreateBusinessCategoryResponse {
    success: Boolean!
    message: String!
    newBusinessCategory: BusinessCategory
  }

  extend type Mutation {
    CreateBusinessCategory(
      name: String!
      type: String!
    ): CreateBusinessCategoryResponse!
  }
`;
exports.default = typeDefs;
