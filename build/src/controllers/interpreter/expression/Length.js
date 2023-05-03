"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Length = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Length extends Expression_1.Expression {
    constructor(expression, line, column) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const valor = this.expression.execute(env); // value and type
        if (valor.type == Return_1.Type.STRING) {
            return { value: valor.value.length, type: Return_1.Type.STRING };
        }
        return { value: null, type: Return_1.Type.NULL };
    }
    AST() {
        //numero de id del nodo Length
        const id = Math.floor(Math.random() * 300) + 1;
        //agregar el id a nodoLength
        const nombreNodo = 'nodoLength' + id.toString();
        //agregar label a nodoLength
        let ramaLength = nombreNodo + `[label="Length"];\n`;
        //obtener nodo y rama de expresion
        const codeRama = this.expression.AST();
        //agregar a la rama de Length las ramas de expresion
        ramaLength += codeRama.rama;
        //agregar a la rama de Length la conexion de Length a expresion
        ramaLength += nombreNodo + "->" + codeRama.nodo + `;\n`;
        return { rama: ramaLength, nodo: nombreNodo };
    }
}
exports.Length = Length;
//# sourceMappingURL=Length.js.map