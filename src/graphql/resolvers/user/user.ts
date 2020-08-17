import * as bcrypt from "bcryptjs";
import { model } from "../../../models/index.model";
import { RegisterUserInterface } from "../../../interfaces/userInterfaces/userInterface";
import { RegisterValidation } from "../../../validations/userValidation";


export const users = async () => {
  return await model.user.findAll();
};

export const user = async (root: any, args: { id: number }) => {
  const user = await model.user.findById(args.id);
  return user;
};

export const RegisterUser = async (root: any, args: RegisterUserInterface) => {
  

  const { error } = RegisterValidation(args)
  const salt = await bcrypt.genSalt(10);
  args.password = await bcrypt.hash(args.password, salt);
  // since email will be unique, check if email exists
  const findEmail = await model.user.findByEmail(args.email);

  // username will be uinique too, check if it exists
  const findUsername = await model.user.findOne({ username: args.username });

  if (findEmail) {
    const success = false;
    const message = "Email already exists, choose another one";
    return { success, message };
  } else if (findUsername) {
    const success = false;
    const message = "username already exists, choose another one";
    return { success, message };
  } else if (error) {
    const success = false;
    const message = error.details[0].message
    return {success, message}
  } else {
    await model.user.insertUser(args);
    const success = true;
    const message = "Account created successfully";

    const newUser = {
      ...args,
    };
    return { success, message, newUser };
  }
};
