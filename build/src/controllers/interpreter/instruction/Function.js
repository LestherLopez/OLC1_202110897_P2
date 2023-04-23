"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
const Instruction_1 = require("../abstract/Instruction");
class Function extends Instruction_1.Instruction {
    constructor(tipo, id, parametros, statement, line, column) {
        super(line, column);
        this.tipo = tipo;
        this.id = id;
        this.parametros = parametros;
        this.statement = statement;
    }
    execute(env) {
        // guardar la funcion en entorno
        env.guardarFuncion(this.id, this);
    }
}
exports.Function = Function;
//# sourceMappingURL=Function.js.map