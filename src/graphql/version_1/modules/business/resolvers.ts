import {business, businesses, CreateBusiness} from './resolverFunctions/resolverFunctions'

const resolvers = {
  Query: {
    business,
    businesses,
  },

  Mutation: {
    CreateBusiness,
  },
};

export default resolvers