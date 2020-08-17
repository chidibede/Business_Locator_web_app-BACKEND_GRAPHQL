import {users, user, RegisterUser} from './resolvers/user/user'

export const resolvers = {
    Query: {
        users,
        user
    },

    Mutation : {
        RegisterUser
    }
    
}