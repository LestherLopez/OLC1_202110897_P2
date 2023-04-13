import express from 'express'; 
import { interpreteController } from '../controllers/interpretecontroller';
const router = express.Router();

//  controlador
router.get('/ping', interpreteController.pong);

// interpretar codigo fuente
//router.post('/interpretar', interpreteController.interpretar);





export default router;