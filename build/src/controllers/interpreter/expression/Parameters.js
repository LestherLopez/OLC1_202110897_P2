"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameters = void 0;
const Expression_1 = require("../abstract/Expression");
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
        return { rama: "", nodo: "" };
    }
}
exports.Parameters = Parameters;
//# sourceMappingURL=Parameters.js.map