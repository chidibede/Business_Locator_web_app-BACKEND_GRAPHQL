import {
  businessCategory,
  businessCategories,
  CreateBusinessCategory,
} from "./resolverFunctions/resolverFunctions";
import { model } from "../../../../models/index.model";

const resolvers = {
  Query: {
    businessCategory,
    businessCategories,
  },

  Mutation: {
    CreateBusinessCategory,
  },

  // resolve the parent which then gets the children
  BusinessCategory : {
    businesses: async (businessCategory: {id: number}) => {
      return await model.business.find({businessCategoryId: businessCategory.id})
    }
  },
};

export default resolvers;
