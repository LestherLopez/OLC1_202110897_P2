"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.While = void 0;
const Environment_1 = require("../abstract/Environment");
const Instruction_1 = require("../abstract/Instruction");
class While extends Instruction_1.Instruction {
    constructor(exp, sentencias, linea, columna) {
        super(linea, columna);
        this.exp = exp;
        this.sentencias = sentencias;
    }
    execute(env) {
        let condicional = this.exp.execute(env);
        //creacion de entorno
        let environment_while = new Environment_1.Environment(env, "while");
        while (condicional.value) {
            this.sentencias.execute(environment_while, "while");
            condicional = this.exp.execute(environment_while);
        }
    }
}
exports.While = While;
//hace falta meter valores de AST en el execute ya cuando se tenga el AST
//# sourceMappingURL=While.js.map