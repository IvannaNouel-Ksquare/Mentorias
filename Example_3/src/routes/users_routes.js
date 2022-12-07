import {Router} from "express";
import controllers from "../controllers/index.js";

const router = Router();
const controller = controllers.usercontrollers;

router.get("/",controller.getAllUSers);
router.post("/",controller.createUser);
router.get("/:id",controller.getUserById);


export default router;

