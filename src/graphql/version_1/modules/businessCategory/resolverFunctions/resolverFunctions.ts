import { model } from "../../../../../models/index.model";
import { CreateBusinessCategoryInterface } from "../../../../../interfaces/businessCategoryInterfaces/businessCategoryInterface";


export const businessCategories = async () => {
  return await model.businessCategory.findAll();
};

export const businessCategory = async (root: any, args: { id: number }) => {
  const businessCategory = await model.businessCategory.findById(args.id);
  return businessCategory;
};

export const CreateBusinessCategory = async (
  root: any,
  args: CreateBusinessCategoryInterface
) => {
  const findBusinessCategory = await model.businessCategory.findOne({
    name: args.name,
  });
  if (findBusinessCategory) {
    return { success: false, message: "Business Category already exists" };
  } else {
    await model.businessCategory.insertBusinessCategory(args);
    const newBusinessCategory = {
      ...args,
    };
    return {
      success: true,
      message: "Business Category added successfully",
      newBusiness: newBusinessCategory,
    };
  }
};

