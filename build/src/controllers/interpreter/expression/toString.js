"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class toString extends Expression_1.Expression {
    constructor(expression, line, column) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const valor = this.expression.execute(env); // value and type
        if (valor.type == Return_1.Type.BOOLEAN || valor.type == Return_1.Type.DOUBLE || valor.type == Return_1.Type.INT) {
            return { value: valor.value.toString(), type: Return_1.Type.STRING };
        }
        // printlist.push("\n");
        return { value: null, type: Return_1.Type.NULL };
    }
    AST() {
        //numero de id del nodo ToString
        const id = Math.floor(Math.random() * 300) + 1;
        //agregar el id a nodoToString
        const nombreNodo = 'nodoToString' + id.toString();
        //agregar label a nodoToString
        let ramaToString = nombreNodo + `[label="To String"];\n`;
        //obtener nodo y rama de expresion
        const codeRama = this.expression.AST();
        //agregar a la rama de ToString las ramas de expresion
        ramaToString += codeRama.rama;
        //agregar a la rama de ToString la conexion de ToString a expresion
        ramaToString += nombreNodo + "->" + codeRama.nodo + `;\n`;
        return { rama: ramaToString, nodo: nombreNodo };
    }
}
exports.toString = toString;
//# sourceMappingURL=toString.js.map