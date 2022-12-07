import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {

    try {
        res.status(200).json({
            message: "Good, tweet"
        })
    } catch (error) {
        res.status(500).json({
            message: "Bad, tweet"
        })
    }
    
});

export default router;