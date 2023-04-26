"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
class toString extends Instruction_1.Instruction {
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
}
exports.toString = toString;
//# sourceMappingURL=toString.js.map