"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.While = void 0;
const Instruction_1 = require("../abstract/Instruction");
class While extends Instruction_1.Instruction {
    constructor(exp, sentencias, linea, columna) {
        super(linea, columna);
        this.exp = exp;
        this.sentencias = sentencias;
    }
    execute(env) {
        while (this.exp.execute(env).value) {
            for (let sentencia of this.sentencias) {
                sentencia.execute(env);
            }
        }
    }
}
exports.While = While;
//# sourceMappingURL=While.js.map