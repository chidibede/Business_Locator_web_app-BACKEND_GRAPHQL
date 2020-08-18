import {
  businessCategory,
  businessCategories,
  CreateBusinessCategory,
} from "./resolverFunctions/resolverFunctions";
import { model } from "../../../../models/index.model";
import Knex from "knex";

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
    businesses: (businessCategory: any) => {
      return model.business.find({business_category_id: businessCategory.id})
    }
  }
};

export default resolvers;
