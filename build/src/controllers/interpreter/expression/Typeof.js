"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typeof = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Typeof extends Expression_1.Expression {
    constructor(expression, line, column) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const valor = this.expression.execute(env); // value and type
        if (valor.type != Return_1.Type.NULL && valor.type != Return_1.Type.VOID) {
            return { value: Return_1.Type[valor.type], type: Return_1.Type.STRING };
        }
        return { value: null, type: Return_1.Type.NULL };
    }
    AST() {
        //numero de id del nodo Typeof
        const id = Math.floor(Math.random() * 300) + 1;
        //agregar el id a nodoTypeof
        const nombreNodo = 'nodoTypeof' + id.toString();
        //agregar label a nodoTypeof
        let ramaTypeof = nombreNodo + `[label="Typeof"];\n`;
        //obtener nodo y rama de expresion
        const codeRama = this.expression.AST();
        //agregar a la rama de Typeof las ramas de expresion
        ramaTypeof += codeRama.rama;
        //agregar a la rama de Typeof la conexion de Typeof a expresion
        ramaTypeof += nombreNodo + "->" + codeRama.nodo + `;\n`;
        return { rama: ramaTypeof, nodo: nombreNodo };
    }
}
exports.Typeof = Typeof;
//# sourceMappingURL=Typeof.js.map