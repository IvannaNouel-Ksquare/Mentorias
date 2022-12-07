import {Router} from "express";
import controllers from "../controllers/index";

const router = Router();
const controller = controllers.usercontrollers;

router.get("/",controller.getAllUSers);
router.post("/",controller.createUser);
router.get("/:id",controller.getUserById);
router.delete("/:id",controller.deleteUserById);
router.put("/:id",controller.updateUserById);
router.get("/age/:age",controller.filterByAge);
router.post("/login",controller.login);


export default router;

