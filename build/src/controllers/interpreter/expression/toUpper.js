"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpper = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class toUpper extends Expression_1.Expression {
    constructor(expression, line, column) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const valor = this.expression.execute(env); // value and type
        if (valor.type == Return_1.Type.STRING) {
            valor.value = valor.value.toUpperCase();
            return { value: valor.value, type: Return_1.Type.STRING };
        }
        // printlist.push("\n");
        return { value: null, type: Return_1.Type.NULL };
    }
    AST() {
        //numero de id del nodo ToUpper
        const id = Math.floor(Math.random() * 300) + 1;
        //agregar el id a nodoToUpper
        const nombreNodo = 'nodoToUpper' + id.toString();
        //agregar label a nodoToUpper
        let ramaToUpper = nombreNodo + `[label="To Upper"];\n`;
        //obtener nodo y rama de expresion
        const codeRama = this.expression.AST();
        //agregar a la rama de ToUpper las ramas de expresion
        ramaToUpper += codeRama.rama;
        //agregar a la rama de ToUpper la conexion de ToUpper a expresion
        ramaToUpper += nombreNodo + "->" + codeRama.nodo + `;\n`;
        return { rama: ramaToUpper, nodo: nombreNodo };
    }
}
exports.toUpper = toUpper;
//# sourceMappingURL=toUpper.js.map