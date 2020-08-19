import {user, users, loginUser, refreshToken, registerUser} from './resolverFunctions/resolverFunctions'
const resolvers = {
  Query: {
    user,
    users,
    loginUser,
    refreshToken
  },

  Mutation: {
    registerUser,
  },

};

export default resolvers