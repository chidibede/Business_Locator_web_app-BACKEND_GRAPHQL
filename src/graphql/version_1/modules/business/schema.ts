import { gql } from "apollo-server-express";

const typeDefs = gql`
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

export default typeDefs;
