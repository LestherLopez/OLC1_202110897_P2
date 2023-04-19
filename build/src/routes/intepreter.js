"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const interpretecontroller_1 = require("../controllers/interpretecontroller");
const router = express_1.default.Router();
//  controlador
router.get('/ping', interpretecontroller_1.interpreteController.pong);
// interpretar codigo fuente
router.post('/interpretar', interpretecontroller_1.interpreteController.interpretar);
exports.default = router;
//# sourceMappingURL=intepreter.js.map