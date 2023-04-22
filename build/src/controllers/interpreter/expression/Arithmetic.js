"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arithmetic = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
const MatrizAritmetica_1 = require("../utils/MatrizAritmetica");
const TipoAritmetica_1 = require("../utils/TipoAritmetica");
class Arithmetic extends Expression_1.Expression {
    constructor(izquierdo, derecho, tipoOperacion, line, column) {
        super(line, column);
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.tipoOperacion = tipoOperacion;
    }
    execute(env) {
        // verificar el tipo de operacion
        if (this.tipoOperacion == TipoAritmetica_1.TipoAritmetica.SUMA) {
            // obtener los valores de  los operandos
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            // obtener el tipo de dato de los operandos
            const tipoDominante = MatrizAritmetica_1.TablaSuma[op1.type][op2.type];
            // verificar el tipo de dato
            switch (tipoDominante) {
                case Return_1.Type.INT:
                    // verificar si algun operando es de tipo boleano
                    if (op1.type == Return_1.Type.BOOLEAN) {
                        // convertir el valor a entero
                        op1.value = op1.value ? 1 : 0;
                    }
                    if (op2.type == Return_1.Type.BOOLEAN) {
                        // convertir el valor a entero
                        op2.value = op2.value ? 1 : 0;
                    }
                    // verificar si algun operando es de tipo caracter
                    if (op1.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op1.value = op1.value.charCodeAt(0);
                    }
                    if (op2.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op2.value = op2.value.charCodeAt(0);
                    }
                    return { value: op1.value + op2.value, type: Return_1.Type.INT };
                // verifcar demas tipos de datos
                case Return_1.Type.DOUBLE: //double, entero, booleano, caracter
                    //verificar si algun operando es de tipo entero
                    if (op1.type == Return_1.Type.INT) {
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.INT) {
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    //verificar si algun operando es de tipo booleano 
                    if (op1.type == Return_1.Type.BOOLEAN) {
                        op1.value = op1.value ? 1 : 0;
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.BOOLEAN) {
                        op2.value = op2.value ? 1 : 0;
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    // verificar si algun operando es de tipo caracter
                    if (op1.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op1.value = op1.value.charCodeAt(0);
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op2.value = op2.value.charCodeAt(0);
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    return { value: op1.value + op2.value, type: Return_1.Type.DOUBLE };
                //verificar si algun operando es de tipo 
                case Return_1.Type.STRING: //ENTERO, DOBLE, BOOLEANO, CARACTER
                    // verificar si algun operando es de tipo boleano
                    if (op1.type == Return_1.Type.BOOLEAN) {
                        // convertir el valor a entero
                        op1.value = op1.value ? "verdadero" : "falso";
                    }
                    if (op2.type == Return_1.Type.BOOLEAN) {
                        // convertir el valor a entero
                        op2.value = op2.value ? "verdadero" : "falso";
                    }
                    // verificar si algun operando es de tipo caracter
                    if (op1.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op1.value = op1.value;
                    }
                    if (op2.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op2.value = op2.value;
                    }
                    //verificar si un valor es entero
                    if (op1.type == Return_1.Type.INT) {
                        op1.value = String(op1.value);
                    }
                    if (op2.value == Return_1.Type.INT) {
                        op2.value = String(op2.value);
                    }
                    //verificar si un valor es double
                    if (op1.value == Return_1.Type.DOUBLE) {
                        op1.value = op1.value.toString();
                    }
                    if (op2.value == Return_1.Type.DOUBLE) {
                        op2.value = op2.value.toString();
                    }
                    return { value: op1.value + op2.value, type: Return_1.Type.STRING };
            }
        } //  RESTA
        else if (this.tipoOperacion == TipoAritmetica_1.TipoAritmetica.RESTA) {
            // obtener los valores de  los operandos
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            // obtener el tipo de dato de los operandos
            const tipoDominante = MatrizAritmetica_1.TablaResta[op1.type][op2.type];
            // verificar el tipo de dato
            switch (tipoDominante) {
                case Return_1.Type.INT:
                    // verificar si algun operando es de tipo boleano
                    if (op1.type == Return_1.Type.BOOLEAN) {
                        // convertir el valor a entero
                        op1.value = op1.value ? 1 : 0;
                    }
                    if (op2.type == Return_1.Type.BOOLEAN) {
                        // convertir el valor a entero
                        op2.value = op2.value ? 1 : 0;
                    }
                    // verificar si algun operando es de tipo caracter
                    if (op1.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op1.value = op1.value.charCodeAt(0);
                    }
                    if (op2.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op2.value = op2.value.charCodeAt(0);
                    }
                    return { value: op1.value - op2.value, type: Return_1.Type.INT };
                // verifcar demas tipos de datos
                case Return_1.Type.DOUBLE: //double, entero, booleano, caracter
                    //verificar si algun operando es de tipo entero
                    if (op1.type == Return_1.Type.INT) {
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.INT) {
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    //verificar si algun operando es de tipo booleano 
                    if (op1.type == Return_1.Type.BOOLEAN) {
                        op1.value = op1.value ? 1 : 0;
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.BOOLEAN) {
                        op2.value = op2.value ? 1 : 0;
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    // verificar si algun operando es de tipo caracter
                    if (op1.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op1.value = op1.value.charCodeAt(0);
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op2.value = op2.value.charCodeAt(0);
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    return { value: op1.value - op2.value, type: Return_1.Type.DOUBLE };
            }
        }
        else if (this.tipoOperacion == TipoAritmetica_1.TipoAritmetica.MULTIPLICACION) {
            // obtener los valores de  los operandos
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            // obtener el tipo de dato de los operandos
            const tipoDominante = MatrizAritmetica_1.TablaMultiplicacion[op1.type][op2.type];
            // verificar el tipo de dato
            switch (tipoDominante) {
                case Return_1.Type.INT: //caracter
                    // verificar si algun operando es de tipo caracter
                    if (op1.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op1.value = op1.value.charCodeAt(0);
                    }
                    if (op2.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op2.value = op2.value.charCodeAt(0);
                    }
                    return { value: op1.value * op2.value, type: Return_1.Type.INT };
                case Return_1.Type.DOUBLE:
                    if (op1.type == Return_1.Type.INT) {
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.INT) {
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    // veriFicar si algun operando es de tipo caracter
                    if (op1.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op1.value = op1.value.charCodeAt(0);
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op2.value = op2.value.charCodeAt(0);
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    return { value: op1.value * op2.value, type: Return_1.Type.DOUBLE };
            }
        }
        //Division
        else if (this.tipoOperacion == TipoAritmetica_1.TipoAritmetica.DIVISION) {
            // obtener los valores de  los operandos
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            // obtener el tipo de dato de los operandos
            const tipoDominante = MatrizAritmetica_1.TablaDivision[op1.type][op2.type];
            // verificar el tipo de dato
            switch (tipoDominante) {
                case Return_1.Type.DOUBLE:
                    if (op1.type == Return_1.Type.INT) {
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.INT) {
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    // veriFicar si algun operando es de tipo caracter
                    if (op1.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op1.value = op1.value.charCodeAt(0);
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.CHAR) {
                        // convertir el valor a entero
                        op2.value = op2.value.charCodeAt(0);
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    return { value: op1.value / op2.value, type: Return_1.Type.DOUBLE };
            }
        }
        else if (this.tipoOperacion == TipoAritmetica_1.TipoAritmetica.POTENCIA) {
            // obtener los valores de  los operandos
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            // obtener el tipo de dato de los operandos
            const tipoDominante = MatrizAritmetica_1.TablaPotencia[op1.type][op2.type];
            // verificar el tipo de dato
            switch (tipoDominante) {
                case Return_1.Type.INT:
                    return { value: op1.value ** op2.value, type: Return_1.Type.INT };
                case Return_1.Type.DOUBLE:
                    if (op1.type == Return_1.Type.INT) {
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.INT) {
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    return { value: op1.value ** op2.value, type: Return_1.Type.DOUBLE };
            }
        }
        else if (this.tipoOperacion == TipoAritmetica_1.TipoAritmetica.MODULO) {
            // obtener los valores de  los operandos
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            // obtener el tipo de dato de los operandos
            const tipoDominante = MatrizAritmetica_1.TablaMultiplicacion[op1.type][op2.type];
            // verificar el tipo de dato
            switch (tipoDominante) {
                case Return_1.Type.DOUBLE:
                    if (op1.type == Return_1.Type.INT) {
                        op1.value = parseFloat(op1.value.toFixed(2));
                    }
                    if (op2.type == Return_1.Type.INT) {
                        op2.value = parseFloat(op2.value.toFixed(2));
                    }
                    return { value: op1.value % op2.value, type: Return_1.Type.DOUBLE };
            }
        }
        //  UNARIO
        else if (this.tipoOperacion == TipoAritmetica_1.TipoAritmetica.MENOSUNARIO) {
            // obtener los valores de  los operandos
            const op2 = this.izquierdo.execute(env);
            // entero
            if (op2.type == Return_1.Type.INT) {
                return { value: -op2.value, type: Return_1.Type.INT };
            }
            // doble
            else if (op2.type == Return_1.Type.DOUBLE) {
                return { value: -op2.value, type: Return_1.Type.DOUBLE };
            }
        }
        return { value: null, type: Return_1.Type.NULL };
    }
}
exports.Arithmetic = Arithmetic;
//# sourceMappingURL=Arithmetic.js.map