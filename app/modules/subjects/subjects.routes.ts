import { Router } from "express";
import { ResponseHandler } from "../../utilities/response-handler";
import subjectsService from "./subjects.service";

const router = Router();


const { getAllSubjects } = subjectsService;

router.get("/", (req, res, next) => {
    try {
        const result = getAllSubjects();
        res.status(200).send(new ResponseHandler(result));
    } catch (error) {
        next(error);
    }
});


export default router;
