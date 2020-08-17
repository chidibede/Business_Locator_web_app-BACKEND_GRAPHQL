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
        success: Boolean!
        message: String!
        newUser: User
    }
`

export const LoginUserResponse =  gql`
    type LoginUserResponse {
        success: Boolean!
        message: String!
        user: User
    }
`