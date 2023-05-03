"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.For = void 0;
const Environment_1 = require("../abstract/Environment");
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
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
            const elemento = this.sentencias.execute(environment_for, "for");
            console.log(elemento);
            if (elemento != null || elemento != undefined) {
                if (elemento.type == Return_1.Type.RETURN) {
                    return { value: elemento.value, type: Return_1.Type.RETURN, tipo: elemento.tipo };
                }
            }
            /*
            if(element.type == Type.RETURN){
                return element;
            }else if(element.type == Type.BREAK){
                break;
            }else if(element.type == Type.CONTINUE){
                this.exp_actualizacion.execute(environment_for);
                exp_condicional = this.exp_condicional.execute(environment_for);
                continue;
            }*/
            this.exp_actualizacion.execute(environment_for);
            exp_condicional = this.exp_condicional.execute(environment_for);
        }
    }
    AST() {
        //nodoFor15[label="For"];
        const id = Math.floor(Math.random() * 300) + 1;
        const nombreNodo = 'nodoFor' + id.toString();
        let ramaFor = nombreNodo + `[label="For"];\n`;
        //rama de declaracion
        const codeRama = this.exp_inicial.AST();
        ramaFor += codeRama.rama;
        ramaFor += nombreNodo + "->" + codeRama.nodo + `;\n`;
        //rama de condicional
        const codeRamaCon = this.exp_condicional.AST();
        ramaFor += codeRamaCon.rama;
        ramaFor += nombreNodo + "->" + codeRamaCon.nodo + `;\n`;
        //rama de expresion de actualizacion
        const codeRamaact = this.exp_actualizacion.AST();
        ramaFor += codeRamaact.rama;
        ramaFor += nombreNodo + "->" + codeRamaact.nodo + `;\n`;
        //rama sentencias de for
        const codeRamaIN = this.sentencias.AST();
        ramaFor += codeRamaIN.rama;
        const subramas = codeRamaIN.nodo.split("nodo");
        for (let i = 1; i < subramas.length; i++) {
            ramaFor += nombreNodo + "->" + "nodo" + subramas[i] + `;\n`;
        }
        return { rama: ramaFor, nodo: nombreNodo };
        return { rama: "", nodo: "" };
    }
}
exports.For = For;
//# sourceMappingURL=For.js.map