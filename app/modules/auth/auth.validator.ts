import { body } from "express-validator";
import { validate } from "../../utilities/validate";

export const SignupValidator = [
  body("username").isString().notEmpty().withMessage("username is required"),
  body("password").isString().notEmpty().withMessage("password is invalid"),
  body("email").isEmail().withMessage("required email"),
  validate,
];
