import {gql} from 'apollo-server-express';

export const User =  gql`
    type User {
        username: String!
        email: String!
        password: String!
        token: String
    }
`

export const RegisterUserResponse =  gql`
    type RegisterUserResponse {
        success: String!
        message: String!
        newUser: User
    }
`

export const LoginUserResponse =  gql`
    type LoginUserResponse {
        success: String!
        message: String!
        newUser: User
    }
`