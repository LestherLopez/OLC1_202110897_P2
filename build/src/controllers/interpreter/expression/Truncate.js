"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truncate = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
class Truncate extends Instruction_1.Instruction {
    constructor(expression, line, column) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const valor = this.expression.execute(env); // value and type
        if (valor.type == Return_1.Type.INT || valor.type == Return_1.Type.DOUBLE) {
            return { value: Math.trunc(valor.value), type: Return_1.Type.INT };
        }
        return { value: null, type: Return_1.Type.NULL };
    }
}
exports.Truncate = Truncate;
//# sourceMappingURL=Truncate.js.map