"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logic = void 0;
//import { AST } from "../Entorno/AST";
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
const TipoLogica_1 = require("../utils/TipoLogica");
class Logic extends Expression_1.Expression {
    constructor(izquierdo, derecho, tipoOperacion, line, column) {
        super(line, column);
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.tipoOperacion = tipoOperacion;
    }
    execute(env) {
        //VERIFICAR SI ES AND
        if (this.tipoOperacion == TipoLogica_1.TipoLogica.AND) {
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            if (Return_1.Type.BOOLEAN === op1.type && Return_1.Type.BOOLEAN === op2.type) {
                return { value: op1.value && op2.value, type: Return_1.Type.BOOLEAN };
            }
        }
        else if (this.tipoOperacion == TipoLogica_1.TipoLogica.OR) {
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            if (Return_1.Type.BOOLEAN === op1.type && Return_1.Type.BOOLEAN === op2.type) {
                return { value: op1.value || op2.value, type: Return_1.Type.BOOLEAN };
            }
        }
        else if (this.tipoOperacion == TipoLogica_1.TipoLogica.NOT) {
            const op2 = this.izquierdo.execute(env);
            if (op2.type == Return_1.Type.BOOLEAN) {
                return { value: !op2.value, type: Return_1.Type.BOOLEAN };
            }
        }
        return { value: null, type: Return_1.Type.NULL };
    }
    AST() {
        return { rama: "", nodo: "" };
    }
}
exports.Logic = Logic;
//# sourceMappingURL=Logic.js.map