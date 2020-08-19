require("dotenv").config({ path: "src/.env" });
import * as bcrypt from "bcryptjs";
import { model } from "../../../../../models/index.model";
import {
  RegisterUserInterface,
  LoginUserInterface,
} from "../../../../../interfaces/userInterfaces/userInterface";
import {
  RegisterValidation,
  LoginValidation,
} from "../validations/userValidation";
import { issueTokens } from "../token/token";

export const users = async () => {
  return await model.user.findAll();
};

export const user = async (root: any, args: { id: number }) => {
  const user = await model.user.findById(args.id);
  return user;
};

export const registerUser = async (root: any, args: RegisterUserInterface) => {
  // validate the data coming in from the graphql request using Joi package
  const { error } = RegisterValidation(args);

  // hash the user password using bcrypt
  const salt = await bcrypt.genSalt(10);
  args.password = await bcrypt.hash(args.password, salt);
  // since email will be unique, check if email exists
  const findEmail = await model.user.findByEmail(args.email);

  // username will be uinique too, check if it exists
  const findUsername = await model.user.findOne({ username: args.username });

  // complete validation check
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
    const message = error.details[0].message;
    return { success, message };
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

// Login user resolver
export const loginUser = async (_: any, args: LoginUserInterface) => {
  const user = await model.user.findByEmail(args.email);

  const { error } = LoginValidation(args);
  if (!user) {
    return { success: false, message: "email does not exists" };
  } else if (error) {
    const success = false;
    const message = "Email or password is invalid";
    return { success, message };
  } else {
    const validUser = await bcrypt.compare(args.password, user.password);

    if (validUser) {
      // create and assign token
      const token = await issueTokens({
        id: user.id,
        username: user.username,
        email: user.email,
      });

      const auth = {user: user, ...token}
      console.log(auth);
      
      return { success: true, message: "logged in",  auth: auth };
    } else {
      return { success: false, message: "Invalid password" };
    }
  }
};

export const refreshToken = async () => {};
