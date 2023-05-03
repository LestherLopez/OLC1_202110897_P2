"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoWhile = void 0;
const Environment_1 = require("../abstract/Environment");
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
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
            let elemento = this.sentencias.execute(environment_dowhile, "while");
            if (elemento != null || elemento != undefined) {
                if (elemento.type == Return_1.Type.RETURN) {
                    return { value: elemento.value, type: Return_1.Type.RETURN, tipo: elemento.tipo };
                }
            }
            condicional = this.exp.execute(environment_dowhile);
        } while (condicional.value);
    }
    AST() {
        const id = Math.floor(Math.random() * 300) + 1;
        const nombreNodo = 'nodoDoWhile' + id.toString();
        let ramaDoWhile = nombreNodo + `[label="DoWhile"];\n`;
        const codeRama = this.exp.AST();
        ramaDoWhile += codeRama.rama;
        ramaDoWhile += nombreNodo + "->" + codeRama.nodo + `;\n`;
        const codeRamaIN = this.sentencias.AST();
        ramaDoWhile += codeRamaIN.rama;
        const subramas = codeRamaIN.nodo.split("nodo");
        for (let i = 1; i < subramas.length; i++) {
            ramaDoWhile += nombreNodo + "->" + "nodo" + subramas[i] + `;\n`;
        }
        return { rama: ramaDoWhile, nodo: nombreNodo };
    }
}
exports.DoWhile = DoWhile;
//# sourceMappingURL=DoWhile.js.map