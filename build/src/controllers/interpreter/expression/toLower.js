"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLower = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class toLower extends Expression_1.Expression {
    constructor(expression, line, column) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const valor = this.expression.execute(env); // value and type
        if (valor.type == Return_1.Type.STRING) {
            valor.value = valor.value.toLowerCase();
            return { value: valor.value, type: Return_1.Type.STRING };
        }
        // printlist.push("\n");
        return { value: null, type: Return_1.Type.NULL };
    }
    AST() {
        //numero de id del nodo ToLower
        const id = Math.floor(Math.random() * 300) + 1;
        //agregar el id a nodoToLower
        const nombreNodo = 'nodoToLower' + id.toString();
        //agregar label a nodoToLower
        let ramaToLower = nombreNodo + `[label="To Lower"];\n`;
        //obtener nodo y rama de expresion
        const codeRama = this.expression.AST();
        //agregar a la rama de ToLower las ramas de expresion
        ramaToLower += codeRama.rama;
        //agregar a la rama de ToLower la conexion de ToLower a expresion
        ramaToLower += nombreNodo + "->" + codeRama.nodo + `;\n`;
        return { rama: ramaToLower, nodo: nombreNodo };
    }
}
exports.toLower = toLower;
//# sourceMappingURL=toLower.js.map