"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
  extend type Query {
    business(id: ID!): Business!
    businesses: [Business!]
  }


  type Business {
    id: ID!
    name: String!
    location: String!
    price_range: Int
    businessCategoryId: Int
  }

  type CreateBusinessResponse {
    success: Boolean!
    message: String!
    newBusiness: Business
  }

  extend type Mutation {
    CreateBusiness(
      name: String!
      location: String!
      businessCategoryId: Int!
      price_range: Int
    ): CreateBusinessResponse!
  }
`;
exports.default = typeDefs;
