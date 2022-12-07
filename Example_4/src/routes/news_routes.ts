import { Router } from "express";
import controllers from "../controllers/index";

const router = Router();
const controller = controllers.newscontrollers;

router.get("/", controller.getNews);

router.post("/", controller.createNew);

export default router;
