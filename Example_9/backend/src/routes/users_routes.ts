import {Router} from "express";
import controllers from "../controllers/index";
import verifyToken from "../middlewares/auth";

const router = Router();
const controller = controllers.usercontrollers;

router.get("/",verifyToken,controller.getAllUSers);
router.post("/",controller.createUser);
router.get("/id",verifyToken,controller.getUserById);
router.delete("/:id",verifyToken,controller.deleteUserById);
router.put("/id",verifyToken,controller.updateUserById);
router.get("/age/:age",controller.filterByAge);
router.post("/login",controller.login);


export default router;

