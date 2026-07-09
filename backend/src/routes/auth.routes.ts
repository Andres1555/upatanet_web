import { Router, Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { authMiddleware } from '../middlewares/auth.middleware';
import { validateLogin, validateRegister } from '../validators/auth.validator';

const router = Router();
const authService = new AuthService();

router.post('/register', validateRegister, (req: Request, res: Response) => authService.register(req.body));
router.post('/login', validateLogin, (req: Request, res: Response) => authService.login(req.body));
router.get('/profile', authMiddleware, (req: Request, res: Response) => authService.getProfile((req as any).user?.id));

export { router as authRouter };
