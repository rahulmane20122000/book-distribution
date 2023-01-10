import express from 'express';
import { resgisterRoutes } from './modules/routes/routes.register';

export const startApp = ()=>{
    const app = express();
    const {PORT} = process.env;
    resgisterRoutes(app);
    app.listen(PORT,()=>console.log(`server started on PORT : ${PORT}`));
}