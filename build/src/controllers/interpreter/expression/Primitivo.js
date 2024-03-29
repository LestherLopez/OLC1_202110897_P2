"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primitivo = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Primitivo extends Expression_1.Expression {
    constructor(line, column, value, tipo) {
        super(line, column);
        this.value = value;
        this.tipo = tipo;
    }
    // ejecuar el objeto
    // retorna un valor primivito
    execute() {
        switch (this.tipo) {
            case Return_1.Type.INT:
                return { value: parseInt(this.value), type: Return_1.Type.INT };
            case Return_1.Type.DOUBLE:
                return { value: parseFloat(this.value), type: Return_1.Type.DOUBLE };
            case Return_1.Type.BOOLEAN:
                if (this.value.toString().toLowerCase() === "true") {
                    return { value: true, type: Return_1.Type.BOOLEAN };
                }
                return { value: false, type: Return_1.Type.BOOLEAN };
            case Return_1.Type.CHAR:
                return { value: this.value, type: Return_1.Type.CHAR };
            case Return_1.Type.STRING:
                return { value: this.value, type: Return_1.Type.STRING };
            default:
                return { value: null, type: Return_1.Type.NULL };
        }
    }
    AST() {
        //crear nodoPrimitivo y ramaPrimitivo
        const id = Math.floor(Math.random() * 100) + 1;
        const nombreNodo = 'nodoPrimitivo' + id.toString();
        let ramaPrimitivo = nombreNodo + `[label="Primitivo"];\n`;
        //agregar nodo del valor
        ramaPrimitivo += "nodoPrimitivo" + nombreNodo + "[label=\"" + this.value.toString() + "\"];" + `\n`;
        //conexion de nodo Primitivo - > nodo de valor
        ramaPrimitivo += nombreNodo + "->" + "nodoPrimitivo" + nombreNodo + `;\n`;
        return { rama: ramaPrimitivo, nodo: nombreNodo };
    }
}
exports.Primitivo = Primitivo;
//# sourceMappingURL=Primitivo.js.map