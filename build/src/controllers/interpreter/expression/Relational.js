"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relational = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
const TipoRelacional_1 = require("../utils/TipoRelacional");
class Relational extends Expression_1.Expression {
    constructor(izquierdo, derecho, tipoOperacion, line, column) {
        super(line, column);
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.tipoOperacion = tipoOperacion;
    }
    execute(env) {
        //verificar si algun valor es caracter y convertirlo a number
        //igualacion
        const op1 = this.izquierdo.execute(env);
        const op2 = this.derecho.execute(env);
        switch (this.tipoOperacion) {
            //igualdad
            case 0:
                if (op1.type == Return_1.Type.CHAR) {
                    op1.value = op1.value.charCodeAt(0);
                }
                if (op2.type == Return_1.Type.CHAR) {
                    op2.value = op2.value.charCodeAt(0);
                }
                if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                        return { value: op1.value == op2.value, type: Return_1.Type.BOOLEAN };
                    }
                    else {
                        return { value: null, type: Return_1.Type.NULL };
                    }
                }
                else if (op1.type == Return_1.Type.STRING && op2.type == Return_1.Type.STRING) {
                    op1.value = op1.value.toString();
                    op2.value = op2.value.toString();
                    return { value: op1.value == op2.value, type: Return_1.Type.BOOLEAN };
                }
                else if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                    op1.value = op1.value ? 1 : 0;
                    op2.value = op2.value ? 1 : 0;
                    return { value: op1.value == op2.value, type: Return_1.Type.BOOLEAN };
                }
            //diferente
            case 1:
                if (op1.type == Return_1.Type.CHAR) {
                    op1.value = op1.value.charCodeAt(0);
                }
                if (op2.type == Return_1.Type.CHAR) {
                    op2.value = op2.value.charCodeAt(0);
                }
                if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                        return { value: op1.value != op2.value, type: Return_1.Type.BOOLEAN };
                    }
                }
                else if (op1.type == Return_1.Type.STRING && op2.type == Return_1.Type.STRING) {
                    op1.value = op1.value.toString();
                    op2.value = op2.value.toString();
                    return { value: op1.value != op2.value, type: Return_1.Type.BOOLEAN };
                }
                else if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                    op1.value = op1.value ? 1 : 0;
                    op2.value = op2.value ? 1 : 0;
                    return { value: op1.value != op2.value, type: Return_1.Type.BOOLEAN };
                }
            //menor
            case 2:
                if (op1.type == Return_1.Type.CHAR) {
                    op1.value = op1.value.charCodeAt(0);
                }
                if (op2.type == Return_1.Type.CHAR) {
                    op2.value = op2.value.charCodeAt(0);
                }
                if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                        return { value: op1.value < op2.value, type: Return_1.Type.BOOLEAN };
                    }
                }
                else if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                    op1.value = op1.value ? 1 : 0;
                    op2.value = op2.value ? 1 : 0;
                    return { value: op1.value < op2.value, type: Return_1.Type.BOOLEAN };
                }
            //menor o igual
            case 3:
                if (op1.type == Return_1.Type.CHAR) {
                    op1.value = op1.value.charCodeAt(0);
                }
                if (op2.type == Return_1.Type.CHAR) {
                    op2.value = op2.value.charCodeAt(0);
                }
                if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                        return { value: op1.value <= op2.value, type: Return_1.Type.BOOLEAN };
                    }
                }
                else if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                    op1.value = op1.value ? 1 : 0;
                    op2.value = op2.value ? 1 : 0;
                    return { value: op1.value <= op2.value, type: Return_1.Type.BOOLEAN };
                }
            //mayor
            case 4:
                if (op1.type == Return_1.Type.CHAR) {
                    op1.value = op1.value.charCodeAt(0);
                }
                if (op2.type == Return_1.Type.CHAR) {
                    op2.value = op2.value.charCodeAt(0);
                }
                if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                        return { value: op1.value > op2.value, type: Return_1.Type.BOOLEAN };
                    }
                }
                else if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                    op1.value = op1.value ? 1 : 0;
                    op2.value = op2.value ? 1 : 0;
                    return { value: op1.value > op2.value, type: Return_1.Type.BOOLEAN };
                }
            //mayor o igual que
            case 5:
                if (op1.type == Return_1.Type.CHAR) {
                    op1.value = op1.value.charCodeAt(0);
                }
                if (op2.type == Return_1.Type.CHAR) {
                    op2.value = op2.value.charCodeAt(0);
                }
                if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                        return { value: op1.value >= op2.value, type: Return_1.Type.BOOLEAN };
                    }
                }
                else if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                    op1.value = op1.value ? 1 : 0;
                    op2.value = op2.value ? 1 : 0;
                    return { value: op1.value >= op2.value, type: Return_1.Type.BOOLEAN };
                }
        }
        return { value: null, type: Return_1.Type.NULL };
    }
    AST() {
        const id = Math.floor(Math.random() * 100) + 1;
        const nombreNodo = 'nodoRelacional' + id.toString();
        let ramaRelacional = nombreNodo + `[label="Relacional"];\n`;
        const codeRama = this.izquierdo.AST();
        ramaRelacional += codeRama.rama;
        ramaRelacional += nombreNodo + "->" + codeRama.nodo + `;\n`;
        const idRama = Math.floor(Math.random() * 100) + 1;
        const codeRamas = 'nodoRelacional' + idRama.toString();
        let nodoVar = codeRamas + `[label="${TipoRelacional_1.TipoRelacional[this.tipoOperacion]}"];\n`;
        ramaRelacional += nodoVar;
        ramaRelacional += nombreNodo + "->" + codeRamas + `;\n`;
        const codeRamaact = this.derecho.AST();
        ramaRelacional += codeRamaact.rama;
        ramaRelacional += nombreNodo + "->" + codeRamaact.nodo + `;\n`;
        return { rama: ramaRelacional, nodo: nombreNodo };
    }
}
exports.Relational = Relational;
//# sourceMappingURL=Relational.js.map