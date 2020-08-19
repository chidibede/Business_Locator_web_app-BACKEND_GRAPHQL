import { gql } from "apollo-server-express";

const typeDefs = gql`
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
`

export default typeDefs