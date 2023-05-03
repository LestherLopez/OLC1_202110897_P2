"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameters = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Parameters extends Expression_1.Expression {
    constructor(tipo, id, line, column) {
        super(line, column);
        this.tipo = tipo;
        this.id = id;
    }
    execute(env) {
        // verificar el parametro
        return { value: this.id, type: this.tipo };
    }
    AST() {
        const idRama = Math.floor(Math.random() * 100) + 1;
        const nombreNodo = 'nodoTipoPar' + idRama.toString();
        let ramaparametro = nombreNodo + `[label="${Return_1.Type[this.tipo]}"];\n`;
        const idRamaa = Math.floor(Math.random() * 100) + 1;
        const codeRamas = 'nodoIDparametro' + idRamaa.toString();
        let nodoVar = codeRamas + `[label="${this.id}"];\n`;
        //agregar a la rama de Aritmetica las ramas de expresion
        ramaparametro += nodoVar;
        ramaparametro += nombreNodo + "->" + codeRamas + `;\n`;
        return { rama: ramaparametro, nodo: nombreNodo };
        return { rama: "", nodo: "" };
    }
}
exports.Parameters = Parameters;
//# sourceMappingURL=Parameters.js.map