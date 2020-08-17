import { gql } from "apollo-server-express";

export const Mutations = gql`
  type Mutation {
    RegisterUser(username: String, email: String, password: String): RegisterUserResponse
    LoginUser(email: String, password: String): LoginUserResponse
  }
`;
