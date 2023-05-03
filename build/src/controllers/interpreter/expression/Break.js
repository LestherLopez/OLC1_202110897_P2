"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnExp = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
// return 5;
class ReturnExp extends Expression_1.Expression {
    constructor(value, line, column) {
        super(line, column);
        this.value = value;
    }
    execute(env) {
        if (this.value != null && this.value != undefined) {
            const value = this.value.execute(env);
            console.log("a");
            console.log(value);
            return { value: value.value, type: Return_1.Type.CONTINUE };
        }
        return { value: null, type: Return_1.Type.CONTINUE };
    }
    AST() {
        //numero de id del nodo Return
        const id = Math.floor(Math.random() * 300) + 1;
        //agregar el id a nodoReturn
        const nombreNodo = 'nodoReturn' + id.toString();
        //agregar label a nodoReturn
        let ramaReturn = nombreNodo + `[label="Return"];\n`;
        //obtener nodo y rama de expresion
        const codeRama = this.value.AST();
        //agregar a la rama de Return las ramas de expresion
        ramaReturn += codeRama.rama;
        //agregar a la rama de Return la conexion de Return a expresion
        ramaReturn += nombreNodo + "->" + codeRama.nodo + `;\n`;
        return { rama: ramaReturn, nodo: nombreNodo };
    }
}
exports.ReturnExp = ReturnExp;
//# sourceMappingURL=Break.js.map