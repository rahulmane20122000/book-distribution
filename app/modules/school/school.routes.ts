import { NextFunction, Request, Response, Router } from "express";
import { permit } from "../../utilities/authorize";
import { ResponseHandler } from "../../utilities/response-handler";
import { ROLES } from "../roles/roles.constants";
import schoolService from "./school.service";
import { schoolValidator } from "./school.validators";

const router = Router();
const { getSchoolDataById, updateSchoolData, addSchool, getAllSchools, editSchool, deleteSchool } = schoolService;

router.put("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = res.locals;
    const response = updateSchoolData(req.body, id);
    res.status(200).send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});



router.post("/add", schoolValidator, permit([ROLES.ADMIN]), (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = addSchool(req.body);
    res.status(200).send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }

}
);

router.get("/all", permit([ROLES.ADMIN]), (req, res, next) => {
  try {
    const result = getAllSchools();
    res.status(200).send(new ResponseHandler(result));
  } catch (error) {
    next(error);
  }
});

router.put("/editSchool", permit([ROLES.ADMIN]), (req: Request, res: Response, next: NextFunction) => {
  const response = editSchool(req.body, res.locals.id);
  res.status(200).send(new ResponseHandler(response));
});

router.get("/:schoolId", (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = getSchoolDataById(req.params.schoolId);
    res.status(200).send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});

router.put("/:id",permit([ROLES.ADMIN]),(req: Request, res: Response, next: NextFunction) => {
    try {
      const response = deleteSchool(req.params.id);
      res.status(200).send(new ResponseHandler(response));
    } catch (error) {
      next(error);
    }
  }
);

export default router;


