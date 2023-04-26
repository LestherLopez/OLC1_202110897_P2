"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typeof = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
class Typeof extends Instruction_1.Instruction {
    constructor(expression, line, column) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const valor = this.expression.execute(env); // value and type
        if (valor.type != Return_1.Type.NULL && valor.type != Return_1.Type.VOID) {
            return { value: valor.type, type: Return_1.Type.STRING };
        }
        return { value: null, type: Return_1.Type.NULL };
    }
}
exports.Typeof = Typeof;
//# sourceMappingURL=Typeof.js.map