import Joi from "joi";
import { RegisterUserInterface } from "../interfaces/userInterfaces/userInterface";

export const RegisterValidation = (data: RegisterUserInterface) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data)
};
