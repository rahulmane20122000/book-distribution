import { Router } from "express";

export class Route{
    constructor(public path:string,public router:Router){}
}
type method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export type IExcludedPaths = {
    path:string;
    method:method
}


export type Routes = Route[];