"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truncate = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Truncate extends Expression_1.Expression {
    constructor(expression, line, column) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const valor = this.expression.execute(env); // value and type
        if (valor.type == Return_1.Type.INT || valor.type == Return_1.Type.DOUBLE) {
            return { value: Math.trunc(valor.value), type: Return_1.Type.INT };
        }
        return { value: null, type: Return_1.Type.NULL };
    }
    AST() {
        //numero de id del nodo Truncate
        const id = Math.floor(Math.random() * 300) + 1;
        //agregar el id a nodoTruncate
        const nombreNodo = 'nodoTruncate' + id.toString();
        //agregar label a nodoTruncate
        let ramaTruncate = nombreNodo + `[label="Truncate"];\n`;
        //obtener nodo y rama de expresion
        const codeRama = this.expression.AST();
        //agregar a la rama de Truncate las ramas de expresion
        ramaTruncate += codeRama.rama;
        //agregar a la rama de Truncate la conexion de Truncate a expresion
        ramaTruncate += nombreNodo + "->" + codeRama.nodo + `;\n`;
        return { rama: ramaTruncate, nodo: nombreNodo };
    }
}
exports.Truncate = Truncate;
//# sourceMappingURL=Truncate.js.map