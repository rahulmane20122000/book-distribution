import { NextFunction, Request, Response, Router } from "express";
import { permit } from "../../utilities/authorize";
import { ResponseHandler } from "../../utilities/response-handler";
import { ROLES } from "../roles/roles.constants";
import { authConstants } from "./auth.constants";
import authService from "./auth.service";
import { SignupValidator } from "./auth.validator";
const router = Router();

const {createDistributor,login,approveAccount,rejectAccount,deactivateAccount} = authService


router.post("/sign-up",SignupValidator,(req:Request,res:Response,next:NextFunction)=>{
    try {
        createDistributor(req.body);
        res.send(new ResponseHandler(authConstants.DISTRIBUTOR_CREATED)); 
    } catch (error) {
        next(error)
    }
    
});

router.post("/login",(req,res,next)=>{
    try {
        const response = login(req.body);
        res.status(200).send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

router.put("/rejectAccount/:id",permit([ROLES.ADMIN]),(req,res,next)=>{
    try {
       const response = rejectAccount(req.params.id);
       res.send(new ResponseHandler(response)); 
    } catch (error) {
        next(error);  
    }
  })

  router.put("/deactivateAccount/:id",permit([ROLES.ADMIN]),(req,res,next)=>{
    try {
       const response = deactivateAccount(req.params.id);
       res.send(new ResponseHandler(response)); 
    } catch (error) {
        next(error);  
    }
  })
  
  router.put('/:id',permit([ROLES.ADMIN]),(req,res,next)=>{
      try {
      const {id} = req.params;
      const response = approveAccount(id);
      res.status(200).send(new ResponseHandler(response));
      } catch (error) {
        next(error);
      }
  });

  

export default router;

