import { model } from "../../../../../models/index.model";
import { CreateBusinessInterface } from "../../../../../interfaces/businessInterfaces/businessInterface";

export const businesses = async () => {
  return await model.business.findAll();
};

export const business = async (root: any, args: { id: number }) => {
  const business = await model.business.findById(args.id);
  return business;
};

export const CreateBusiness = async (root: any, args: CreateBusinessInterface) => {
    const findBusiness = await model.business.findOne({name: args.name})
    if(findBusiness){
        return {success: false, message: "Business already exists"}
    }else{
         await model.business.insertBusiness(args)
         const newBusiness = {
             ...args
         }
         return {success: true, message: "Business Created successfully", newBusiness: newBusiness}
    }
  };
