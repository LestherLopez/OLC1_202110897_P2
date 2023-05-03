"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncreaseDecrease = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
const TipoAritmetica_1 = require("../utils/TipoAritmetica");
class IncreaseDecrease extends Expression_1.Expression {
    constructor(izquierdo, tipoOperacion, line, column) {
        super(line, column);
        this.izquierdo = izquierdo;
        this.tipoOperacion = tipoOperacion;
    }
    execute(env) {
        //INCREMENTO DE NUMERO
        if (this.tipoOperacion == TipoAritmetica_1.TipoAritmetica.INCREMENTO) {
            let op1 = env.getVar(this.izquierdo);
            // entero
            if (op1) {
                if (op1.type == Return_1.Type.INT) {
                    op1.valor = op1.valor + 1;
                    return { value: op1.valor, type: Return_1.Type.INT };
                }
                // doble
                else if (op1.type == Return_1.Type.DOUBLE) {
                    op1.valor = op1.valor + 1.0;
                    return { value: op1.valor, type: Return_1.Type.DOUBLE };
                }
            }
            else {
                return { value: null, type: Return_1.Type.NULL };
            }
        }
        //DECREMENTO DE NUMERO
        else if (this.tipoOperacion == TipoAritmetica_1.TipoAritmetica.DECREMENTO) {
            let op1 = env.getVar(this.izquierdo);
            if (op1) {
                if (op1.type == Return_1.Type.INT) {
                    op1.valor = op1.valor - 1;
                    return { value: op1.valor, type: Return_1.Type.INT };
                }
                // doble
                else if (op1.type == Return_1.Type.DOUBLE) {
                    op1.valor = op1.valor - 1.0;
                    return { value: op1.valor, type: Return_1.Type.DOUBLE };
                }
            }
            else {
                return { value: null, type: Return_1.Type.NULL };
            }
        }
        return { value: null, type: Return_1.Type.NULL };
    }
    AST() {
        const id = Math.floor(Math.random() * 100) + 1;
        //agregar el id a nodoincremento
        const nombreNodo = 'nodoincremento' + id.toString();
        //agregar label a nodoincremento
        let ramaincremento = nombreNodo + `[label="Aumento o decremento"];\n`;
        //obtener nodo y rama de expresion
        const idRama = Math.floor(Math.random() * 100) + 1;
        const codeRama = 'nodoincremento' + idRama.toString();
        let nodoVar = codeRama + `[label="${this.izquierdo}"];\n`;
        //agregar a la rama de incremento las ramas de expresion
        ramaincremento += nodoVar;
        //agregar a la rama de incremento la conexion de incremento a expresion
        ramaincremento += nombreNodo + "->" + codeRama + `;\n`;
        return { rama: ramaincremento, nodo: nombreNodo };
    }
}
exports.IncreaseDecrease = IncreaseDecrease;
//# sourceMappingURL=IncreaseDecrease.js.map