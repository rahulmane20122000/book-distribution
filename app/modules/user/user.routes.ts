import { Router } from "express";
import { permit } from "../../utilities/authorize";
import { ResponseHandler } from "../../utilities/response-handler";
import { ROLES } from "../roles/roles.constants";
import userService from "./user.service";
const router = Router();

const { getAssignedSchools, getAllDistributors,getPendingAccounts,assignSchools } = userService;

router.get("/", (req, res, next) => {
  try {
    const { id } = res.locals;
    const data = getAssignedSchools(id);
    res.status(200).send(new ResponseHandler(data));
  } catch (error) {
    next(error);
  }
});

router.get("/allDistributors", permit([ROLES.ADMIN]), (req, res,next) => {
  try {
    const data = getAllDistributors();
  res.status(200).send(new ResponseHandler(data));
  } catch (error) {
    next(error)
  }
});

router.get("/pendingAccounts",permit([ROLES.ADMIN]),(req,res,next)=>{
   try {
      const response = getPendingAccounts();
      res.status(200).send(new ResponseHandler(response));
   } catch (error) {
    next(error)
   }
});

router.put("/:id", (req, res, next) => {
  try {
    const response = assignSchools(req.body.schoolIds, req.params.id);
    res.status(200).send(new ResponseHandler({message:response,statusCode:200}));
  } catch (error) {
    next(error);
  }
});



export default router;
