"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.While = void 0;
const Environment_1 = require("../abstract/Environment");
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
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
            let elemento = this.sentencias.execute(environment_while, "while");
            condicional = this.exp.execute(environment_while);
            if (elemento != null || elemento != undefined) {
                if (elemento.type == Return_1.Type.RETURN) {
                    return { value: elemento.value, type: Return_1.Type.RETURN, tipo: elemento.tipo };
                }
            }
        }
    }
    AST() {
        const id = Math.floor(Math.random() * 300) + 1;
        const nombreNodo = 'nodowhile' + id.toString();
        let ramawhile = nombreNodo + `[label="while"];\n`;
        const codeRama = this.exp.AST();
        ramawhile += codeRama.rama;
        ramawhile += nombreNodo + "->" + codeRama.nodo + `;\n`;
        const codeRamaIN = this.sentencias.AST();
        ramawhile += codeRamaIN.rama;
        const subramas = codeRamaIN.nodo.split("nodo");
        for (let i = 1; i < subramas.length; i++) {
            ramawhile += nombreNodo + "->" + "nodo" + subramas[i] + `;\n`;
        }
        return { rama: ramawhile, nodo: nombreNodo };
    }
}
exports.While = While;
//hace falta meter valores de AST en el execute ya cuando se tenga el AST
//# sourceMappingURL=While.js.map