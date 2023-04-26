"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Round = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
class Round extends Instruction_1.Instruction {
    constructor(expression, line, column) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const valor = this.expression.execute(env); // value and type
        if (valor.type == Return_1.Type.INT || valor.type == Return_1.Type.DOUBLE) {
            const entero = Math.floor(valor.value);
            const decimal = valor.value - entero;
            if (decimal >= 0.5) {
                // si el decimal es mayor o igual que 0.5, redondeamos al número superior
                return { value: Math.ceil(valor.value), type: Return_1.Type.INT };
            }
            else {
                // si el decimal es menor que 0.5, redondeamos al número inferior
                return { value: Math.floor(valor.value), type: Return_1.Type.INT };
            }
        }
        return { value: null, type: Return_1.Type.NULL };
    }
}
exports.Round = Round;
//# sourceMappingURL=Round.js.map