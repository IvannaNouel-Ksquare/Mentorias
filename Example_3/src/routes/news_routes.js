import { Router } from "express";
import controllers from "../controllers/index.js";

const router = Router();
const controller = controllers.newscontrollers;

router.get("/", controller.getNews);

router.post("/", controller.createNew);

export default router;
