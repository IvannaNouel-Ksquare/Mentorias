import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {

    try {
        res.status(200).json({
            message: "Good, blog"
        })
    } catch (error) {
        res.status(500).json({
            message: "Bad, blog"
        })
    }
    
});

export default router;