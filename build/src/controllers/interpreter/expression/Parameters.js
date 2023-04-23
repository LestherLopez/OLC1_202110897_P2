"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parametros = void 0;
const Expression_1 = require("../abstract/Expression");
class Parametros extends Expression_1.Expression {
    constructor(tipo, id, line, column) {
        super(line, column);
        this.tipo = tipo;
        this.id = id;
    }
    execute(env) {
        // verificar el parametro
        return { value: this.id, type: this.tipo };
    }
}
exports.Parametros = Parametros;
//# sourceMappingURL=Parameters.js.map