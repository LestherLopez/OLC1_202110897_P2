"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import interpreterRoute from './routes/intepreter';
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware parse request body to json
const PORT = 5000;
//app.use('/interpreter', interpreterRoute);
app.get('/ping', (req, res) => {
    console.log("agarro señal");
    res.send('El servicio express esta funcionando OK !!');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
