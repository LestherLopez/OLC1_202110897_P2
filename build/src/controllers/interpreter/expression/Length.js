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
        return { rama: "", nodo: "" };
    }
}
exports.Length = Length;
//# sourceMappingURL=Length.js.map