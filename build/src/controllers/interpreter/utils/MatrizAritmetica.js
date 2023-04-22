"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablaModulo = exports.TablaPotencia = exports.TablaDivision = exports.TablaMultiplicacion = exports.TablaResta = exports.TablaSuma = void 0;
const Return_1 = require("../abstract/Return");
exports.TablaSuma = [
    [Return_1.Type.INT, Return_1.Type.DOUBLE, Return_1.Type.INT, Return_1.Type.INT, Return_1.Type.STRING],
    [Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.STRING],
    [Return_1.Type.INT, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.STRING],
    [Return_1.Type.INT, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.STRING, Return_1.Type.STRING],
    [Return_1.Type.STRING, Return_1.Type.STRING, Return_1.Type.STRING, Return_1.Type.STRING, Return_1.Type.STRING]
];
// tablaSuma[0][0] 
exports.TablaResta = [
    [Return_1.Type.INT, Return_1.Type.DOUBLE, Return_1.Type.INT, Return_1.Type.INT, Return_1.Type.NULL],
    [Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.NULL],
    [Return_1.Type.INT, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.INT, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL]
];
exports.TablaMultiplicacion = [
    [Return_1.Type.INT, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.INT, Return_1.Type.NULL],
    [Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.DOUBLE, Return_1.Type.NULL],
    [Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.INT, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL]
];
exports.TablaDivision = [
    [Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.DOUBLE, Return_1.Type.NULL],
    [Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.DOUBLE, Return_1.Type.NULL],
    [Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL]
];
exports.TablaPotencia = [
    [Return_1.Type.INT, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL]
];
exports.TablaModulo = [
    [Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.DOUBLE, Return_1.Type.DOUBLE, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL],
    [Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL, Return_1.Type.NULL]
];
//# sourceMappingURL=MatrizAritmetica.js.map