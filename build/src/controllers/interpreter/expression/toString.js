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
        return { rama: "", nodo: "" };
    }
}
exports.toString = toString;
//# sourceMappingURL=toString.js.map