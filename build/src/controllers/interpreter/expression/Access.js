"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Access = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Access extends Expression_1.Expression {
    constructor(id, line, column) {
        super(line, column);
        this.id = id;
    }
    execute(env) {
        const value = env.getVar(this.id);
        if (value) {
            return { value: value.valor, type: value.type };
        }
        else {
            return { value: null, type: Return_1.Type.NULL };
        }
    }
    AST() {
        const id = Math.floor(Math.random() * 100) + 1;
        //agregar el id a nodoacceder
        const nombreNodo = 'nodoacceder' + id.toString();
        //agregar label a nodoacceder
        let ramaacceder = nombreNodo + `[label="Acceso variable"];\n`;
        //obtener nodo y rama de expresion
        const idRama = Math.floor(Math.random() * 100) + 1;
        const codeRama = 'nodoacceder' + idRama.toString();
        let nodoVar = codeRama + `[label="${this.id}"];\n`;
        //agregar a la rama de acceder las ramas de expresion
        ramaacceder += nodoVar;
        //agregar a la rama de acceder la conexion de acceder a expresion
        ramaacceder += nombreNodo + "->" + codeRama + `;\n`;
        return { rama: ramaacceder, nodo: nombreNodo };
    }
}
exports.Access = Access;
//# sourceMappingURL=Access.js.map