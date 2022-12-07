import { Router } from 'express';
import newsRoutes from './news_routes.js';

const router = Router();

router.use('/noticias',newsRoutes);

export default router;
                    