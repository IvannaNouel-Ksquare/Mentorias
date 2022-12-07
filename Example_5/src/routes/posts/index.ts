import {Router} from "express";
import tweetsroutes from "./tweets_routes";
import blogroutes from "./blog_routes";

const router = Router();

router.use("/tweets",tweetsroutes);
router.use("/blog",blogroutes);

export default router;