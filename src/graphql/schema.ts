import {gql} from 'apollo-server-express'
import { User, RegisterUserResponse, /* LoginUserResponse */ } from './typeDefs/user/userType'
import { Queries } from './typeDefs/queries'
import { Mutations } from './typeDefs/mutations'

export const typeDefs = [
    User,
    Queries,
    RegisterUserResponse,
    // LoginUserResponse,
    Mutations
]