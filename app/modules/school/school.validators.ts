import { body } from "express-validator";
import { validate } from "../../utilities/validate";

export const schoolValidator = [
  body("schoolName").isString().notEmpty().withMessage("schoolName is required"),
  body("endClass").notEmpty().withMessage("totalClasses is required"),
  body("startClass").notEmpty().withMessage("start class is required"),
  body("subjects").isArray().withMessage("Atleast one subject require"),
  validate,
];
