import { Router } from 'express';
import newsRoutes from './news_routes.js';
import userRoutes from './users_routes.js';


const router = Router();

router.use('/noticias',newsRoutes);
router.use('/users',userRoutes);

export default router;
                    