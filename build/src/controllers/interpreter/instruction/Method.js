"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = void 0;
const Instruction_1 = require("../abstract/Instruction");
class Method extends Instruction_1.Instruction {
    constructor(id, parametros, statement, line, column) {
        super(line, column);
        this.id = id;
        this.parametros = parametros;
        this.statement = statement;
    }
    execute(env) {
        // guardar la funcion en entorno
        env.guardarMetodo(this.id, this);
    }
    AST() {
        return { rama: "", nodo: "" };
    }
}
exports.Method = Method;
//# sourceMappingURL=Method.js.map