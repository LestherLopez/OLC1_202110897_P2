"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLower = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
class toLower extends Instruction_1.Instruction {
    constructor(expression, line, column) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const valor = this.expression.execute(env); // value and type
        if (valor.type == Return_1.Type.STRING) {
            valor.value = valor.value.toLowerCase();
            return { value: valor.value, type: Return_1.Type.STRING };
        }
        // printlist.push("\n");
        return { value: null, type: Return_1.Type.NULL };
    }
}
exports.toLower = toLower;
//# sourceMappingURL=toLower.js.map