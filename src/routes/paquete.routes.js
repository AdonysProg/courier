import { Router } from 'express';
const router = Router();
import * as paqueteCtrl from '../controllers/paquete.controller';

router.post('/', paqueteCtrl.createPaquete);
router.get('/', paqueteCtrl.getPaquetes);
router.get('/:id', paqueteCtrl.getPaqueteById);
router.put('/:id', paqueteCtrl.updatePaqueteById);
router.delete('/:id', paqueteCtrl.deletePaqueteById);

export default router;
