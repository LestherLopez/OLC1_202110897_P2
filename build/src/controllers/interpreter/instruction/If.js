"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
const Environment_1 = require("../abstract/Environment");
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
class If extends Instruction_1.Instruction {
    constructor(exp_condicion, sentencias, sentencias_else, line, column) {
        super(line, column);
        this.exp_condicion = exp_condicion;
        this.sentencias = sentencias;
        this.sentencias_else = sentencias_else;
    }
    execute(env) {
        let condicion = this.exp_condicion.execute(env);
        if (condicion.type != Return_1.Type.BOOLEAN) {
            return null;
        }
        if (condicion.value) {
            let new_environment = new Environment_1.Environment(env, "null");
            let elemento = this.sentencias.execute(new_environment, "if");
            if (elemento != undefined) {
                if (elemento.type == Return_1.Type.RETURN) {
                    return { value: elemento.value, type: Return_1.Type.RETURN, tipo: elemento.tipo };
                }
            }
        }
        else {
            let else_environment = new Environment_1.Environment(env, "null");
            this.sentencias_else.execute(else_environment, "else");
        }
    }
    AST() {
        const id = Math.floor(Math.random() * 300) + 1;
        const nombreNodo = 'nodoIf' + id.toString();
        let ramaIf = nombreNodo + `[label="If"];\n`;
        const codeRama = this.exp_condicion.AST();
        ramaIf += codeRama.rama;
        ramaIf += nombreNodo + "->" + codeRama.nodo + `;\n`;
        const codeRamaIN = this.sentencias.AST();
        ramaIf += codeRamaIN.rama;
        const subramas = codeRamaIN.nodo.split("nodo");
        for (let i = 1; i < subramas.length; i++) {
            ramaIf += nombreNodo + "->" + "nodo" + subramas[i] + `;\n`;
        }
        //bloque else if
        if (this.sentencias_else != null || this.sentencias_else != undefined) {
            if (this.exp_condicion != null || this.exp_condicion != undefined) {
                let idelseif = Math.floor(Math.random() * 300) + 1;
                let nombreNodoelse = 'nodoelseIf' + idelseif.toString();
                let ramaifelse = nombreNodoelse + `[label="Else"];\n`;
                ramaIf += ramaifelse;
                ramaIf += nombreNodo + "->" + nombreNodoelse + `;\n`;
                //instrucciones else if
                const codeRamaIN = this.sentencias_else.AST();
                ramaIf += codeRamaIN.rama;
                const subramas = codeRamaIN.nodo.split("nodo");
                for (let i = 1; i < subramas.length; i++) {
                    ramaIf += nombreNodoelse + "->" + "nodo" + subramas[i] + `;\n`;
                }
            }
            else {
                let idelseif = Math.floor(Math.random() * 300) + 1;
                let nombreNodoelse = 'nodoelseIf' + idelseif.toString();
                let ramaifelse = nombreNodoelse + `[label="Else"];\n`;
                ramaIf += ramaifelse;
                ramaIf += nombreNodo + "->" + nombreNodoelse + `;\n`;
            }
        }
        return { rama: ramaIf, nodo: nombreNodo };
    }
}
exports.If = If;
//# sourceMappingURL=If.js.map