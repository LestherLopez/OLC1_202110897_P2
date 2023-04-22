"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relational = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
const TipoRelacional_1 = require("../utils/TipoRelacional");
class Relational extends Expression_1.Expression {
    constructor(izquierdo, derecho, tipoOperacion, line, column) {
        super(line, column);
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.tipoOperacion = tipoOperacion;
    }
    execute(env) {
        //verificar si algun valor es caracter y convertirlo a number
        //igualacion
        if (this.tipoOperacion == TipoRelacional_1.TipoRelacional.IGUALACION) {
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            if (op1.type == Return_1.Type.CHAR) {
                op1.value = op1.value.charCodeAt(0);
            }
            if (op2.type == Return_1.Type.CHAR) {
                op2.value = op2.value.charCodeAt(0);
            }
            if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    return { value: op1.value == op2.value, type: Return_1.Type.BOOLEAN };
                }
                else {
                }
            }
            if (op1.type == Return_1.Type.STRING && op2.type == Return_1.Type.STRING) {
                op1.value = op1.value.toString();
                op2.value = op2.value.toString();
                return { value: op1.value == op2.value, type: Return_1.Type.BOOLEAN };
            }
            if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value == op2.value, type: Return_1.Type.BOOLEAN };
            }
            //diferenciacion 
        }
        else if (this.tipoOperacion = TipoRelacional_1.TipoRelacional.DIFERENCIACION) {
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            if (op1.type == Return_1.Type.CHAR) {
                op1.value = op1.value.charCodeAt(0);
            }
            if (op2.type == Return_1.Type.CHAR) {
                op2.value = op2.value.charCodeAt(0);
            }
            if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    return { value: op1.value != op2.value, type: Return_1.Type.BOOLEAN };
                }
                else {
                }
            }
            else if (op1.type == Return_1.Type.STRING && op2.type == Return_1.Type.STRING) {
                op1.value = op1.value.toString();
                op2.value = op2.value.toString();
                return { value: op1.value != op2.value, type: Return_1.Type.BOOLEAN };
            }
            else if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value != op2.value, type: Return_1.Type.BOOLEAN };
            }
        }
        else if (this.tipoOperacion = TipoRelacional_1.TipoRelacional.MENORQUE) {
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            //convertir caracter a number
            if (op1.type == Return_1.Type.CHAR) {
                op1.value = op1.value.charCodeAt(0);
            }
            if (op2.type == Return_1.Type.CHAR) {
                op2.value = op2.value.charCodeAt(0);
            }
            if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    return { value: op1.value < op2.value, type: Return_1.Type.BOOLEAN };
                }
                else {
                }
            }
            else if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value < op2.value, type: Return_1.Type.BOOLEAN };
            }
        }
        else if (this.tipoOperacion = TipoRelacional_1.TipoRelacional.MAYORQUE) {
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            //convertir caracter a number
            if (op1.type == Return_1.Type.CHAR) {
                op1.value = op1.value.charCodeAt(0);
            }
            if (op2.type == Return_1.Type.CHAR) {
                op2.value = op2.value.charCodeAt(0);
            }
            if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    return { value: op1.value > op2.value, type: Return_1.Type.BOOLEAN };
                }
                else {
                }
            }
            else if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value > op2.value, type: Return_1.Type.BOOLEAN };
            }
        }
        else if (this.tipoOperacion = TipoRelacional_1.TipoRelacional.MENOROIGUALQUE) {
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            //convertir caracter a number
            if (op1.type == Return_1.Type.CHAR) {
                op1.value = op1.value.charCodeAt(0);
            }
            if (op2.type == Return_1.Type.CHAR) {
                op2.value = op2.value.charCodeAt(0);
            }
            if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    return { value: op1.value <= op2.value, type: Return_1.Type.BOOLEAN };
                }
                else {
                }
            }
            else if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value <= op2.value, type: Return_1.Type.BOOLEAN };
            }
        }
        else if (this.tipoOperacion = TipoRelacional_1.TipoRelacional.MAYOROIGUALQUE) {
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            //convertir caracter a number
            if (op1.type == Return_1.Type.CHAR) {
                op1.value = op1.value.charCodeAt(0);
            }
            if (op2.type == Return_1.Type.CHAR) {
                op2.value = op2.value.charCodeAt(0);
            }
            if (op1.type == Return_1.Type.INT || op1.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                if (op2.type == Return_1.Type.INT || op2.type == Return_1.Type.DOUBLE || op1.type == Return_1.Type.CHAR) {
                    return { value: op1.value >= op2.value, type: Return_1.Type.BOOLEAN };
                }
                else {
                }
            }
            else if (op1.type == Return_1.Type.BOOLEAN && op2.type == Return_1.Type.BOOLEAN) {
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value >= op2.value, type: Return_1.Type.BOOLEAN };
            }
        }
        return { value: null, type: Return_1.Type.NULL };
    }
}
exports.Relational = Relational;
//# sourceMappingURL=Relational.js.map