"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Length = void 0;
/*recibe como parámetro un vector, una lista o una cadena y devuelve el
tamaño de este*/
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
class Length extends Instruction_1.Instruction {
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
}
exports.Length = Length;
//# sourceMappingURL=Length.js.map