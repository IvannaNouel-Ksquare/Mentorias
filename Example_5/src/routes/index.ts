import { Router } from 'express';
import newsRoutes from './news_routes';
import userRoutes from './users_routes';
import postsRoutes from './posts/index';

const router = Router();

router.use('/news',newsRoutes);
router.use('/users',userRoutes);
router.use('/post',postsRoutes);


export default router;
                    