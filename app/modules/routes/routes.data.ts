import { Routes,Route, IExcludedPaths } from "./routes.types";
import authRouter from '../auth/auth.routes';
import schoolRoute from '../school/school.routes';
import distributeRoute from '../user/user.routes';
import subjectRouter from '../subjects/subjects.routes';

export const routes:Routes=[
    new Route("/auth",authRouter),
    new Route("/school",schoolRoute),
    new Route("/user",distributeRoute),
    new Route('/subjects',subjectRouter)
];

export const excludedPaths:IExcludedPaths[] =[
    {path:"/auth/login",method:"POST"},
    {path:"/auth/sign-up",method:"POST"},
   
]; 