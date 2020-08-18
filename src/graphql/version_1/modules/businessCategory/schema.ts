import { gql } from "apollo-server-express";

const typeDefs = gql`
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
export default typeDefs