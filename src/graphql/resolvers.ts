import {users, user, RegisterUser, LoginUser} from './resolvers/user/user'

export const resolvers = {
    Query: {
        users,
        user
    },

    Mutation : {
        RegisterUser,
        LoginUser
    }
    
}