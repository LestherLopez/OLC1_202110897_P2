"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoWhile = void 0;
const Environment_1 = require("../abstract/Environment");
const Instruction_1 = require("../abstract/Instruction");
class DoWhile extends Instruction_1.Instruction {
    constructor(exp, sentencias, linea, columna) {
        super(linea, columna);
        this.exp = exp;
        this.sentencias = sentencias;
    }
    execute(env) {
        let condicional = this.exp.execute(env);
        //creacion de entorno
        let environment_dowhile = new Environment_1.Environment(env, "dowhile");
        do {
            this.sentencias.execute(environment_dowhile, "while");
            condicional = this.exp.execute(environment_dowhile);
        } while (condicional.value);
    }
    AST() {
        return { rama: "", nodo: "" };
    }
}
exports.DoWhile = DoWhile;
//# sourceMappingURL=DoWhile.js.map