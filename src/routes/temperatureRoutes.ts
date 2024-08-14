import { Router } from 'express';
import { getTemperatures } from '../controllers/temperatureController';

const router = Router();

router.get('/', getTemperatures);

export default router;
