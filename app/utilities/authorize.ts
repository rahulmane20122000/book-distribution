import { NextFunction, Request, Response } from "express";
import { IExcludedPaths } from "../modules/routes/routes.types";
import {verify} from "jsonwebtoken";
import { authConstants } from "../modules/auth/auth.constants";

export const authorize = (excludedPaths:IExcludedPaths[])=>{
    return (req:Request,res:Response,next:NextFunction)=>{
       try {
        if(excludedPaths.find((excludedPathsData)=>excludedPathsData.path=== req.url && excludedPathsData.method===req.method)) return next();
        const token = req.headers.authorization || '';
        const payload = verify(token,process.env.JWT_TOKEN || '');
        res.locals = payload as any;
        console.log(payload);
        next();
       } catch (error) {
        next(authConstants.INVALID_CREDENTIALS);
       }
    }
}

export const permit = (permittedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
    console.log(res.locals);
        if(permittedRoles.includes(res.locals.role)) {
            return next();
        }

        next(authConstants.INVALID_CREDENTIALS);
    }
}