import {
  businessCategory,
  businessCategories,
  CreateBusinessCategory,
  getBusinessFromBusinessCategory,
} from "./resolverFunctions/resolverFunctions";

const resolvers = {
  Query: {
    businessCategory,
    businessCategories,
  },

  Mutation: {
    CreateBusinessCategory,
  },

  Business: {
    getBusinessFromBusinessCategory,
  },
};


export default resolvers;
