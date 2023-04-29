"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.For = void 0;
const Environment_1 = require("../abstract/Environment");
const Instruction_1 = require("../abstract/Instruction");
class For extends Instruction_1.Instruction {
    constructor(exp_inicial, exp_condicional, exp_actualizacion, sentencias, linea, columna) {
        super(linea, columna);
        this.exp_inicial = exp_inicial;
        this.exp_condicional = exp_condicional;
        this.exp_actualizacion = exp_actualizacion;
        this.sentencias = sentencias;
    }
    execute(env) {
        //inicializar
        this.exp_inicial.execute(env, "Condicion inicial bucle for");
        let exp_condicional = this.exp_condicional.execute(env);
        //creacion de entorno
        let environment_for = new Environment_1.Environment(env, "for");
        while (exp_condicional.value) {
            this.sentencias.execute(environment_for, "for");
            this.exp_actualizacion.execute(environment_for);
            exp_condicional = this.exp_condicional.execute(environment_for);
        }
    }
    AST() {
        return { rama: "", nodo: "" };
    }
}
exports.For = For;
//# sourceMappingURL=For.js.map