"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Round = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Round extends Expression_1.Expression {
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
    AST() {
        //numero de id del nodo Round
        const id = Math.floor(Math.random() * 300) + 1;
        //agregar el id a nodoRound
        const nombreNodo = 'nodoRound' + id.toString();
        //agregar label a nodoRound
        let ramaRound = nombreNodo + `[label="Round"];\n`;
        //obtener nodo y rama de expresion
        const codeRama = this.expression.AST();
        //agregar a la rama de Round las ramas de expresion
        ramaRound += codeRama.rama;
        //agregar a la rama de Round la conexion de Round a expresion
        ramaRound += nombreNodo + "->" + codeRama.nodo + `;\n`;
        return { rama: ramaRound, nodo: nombreNodo };
    }
}
exports.Round = Round;
//# sourceMappingURL=Round.js.map