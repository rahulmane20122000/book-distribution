import cors from "cors";
import { Application, json,Request,Response,NextFunction } from "express";
import { authorize } from "../../utilities/authorize";
import { ResponseHandler } from "../../utilities/response-handler";
import { excludedPaths, routes } from "./routes.data";



export const resgisterRoutes=(app:Application)=>{
  app.use(json());
  app.use(cors());
  app.use(authorize(excludedPaths));

for(let route of routes){
   app.use(route.path,route.router);
}

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
})
  
}