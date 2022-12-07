import { Router } from "express";
import controllers from "../controllers/index";

const router = Router();
const controller = controllers.newscontrollers;


router.get("/",controller.getAllNews);
router.post("/",controller.createNews);
router.get("/:id",controller.getNewsById);
router.delete("/:id",controller.deleteNewsbyId);
router.put("/:id",controller.updateNewsById);
router.get("/views/:views",controller.filterByViews);

export default router;
