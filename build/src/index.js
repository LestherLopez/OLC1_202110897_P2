"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const intepreter_1 = __importDefault(require("./routes/intepreter"));
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json()); // middleware parse request body to json
const PORT = 5000;
//app.use('/interpreter', interpreterRoute);
/*
app.get('/ping', (req, res) => {
    console.log("agarro señal")
    res.send('El aa ');
});*/
app.use('/interpreter', intepreter_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//npm run tsc para pasar este archuivo a JS
//# sourceMappingURL=index.js.map