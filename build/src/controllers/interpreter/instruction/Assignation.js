"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignation = void 0;
const Instruction_1 = require("../abstract/Instruction");
class Assignation extends Instruction_1.Instruction {
    constructor(id_var, valor, line, column) {
        super(line, column);
        this.id_var = id_var;
        this.valor = valor;
    }
    execute(env) {
        let variable = env.getVar(this.id_var);
        if (variable === undefined) {
            throw new Error("ERROR: No se ha definido la variable previamente " + this.id_var);
        }
        let valor_asignar = this.valor.execute(env);
        if ((variable === null || variable === void 0 ? void 0 : variable.type) != valor_asignar.type) {
            throw new Error("ERROR => El tipo del valor asignado no corresponde a la variable " + this.id_var);
        }
        variable.valor = valor_asignar.value;
    }
    AST() {
        const id = Math.floor(Math.random() * 300) + 1;
        //generar nodo
        const nodoPrincipal = `nodoAsignacion${id.toString()}`;
        const nodoIdPrincipal = `nodoIdAsignacion${id.toString()}`;
        //generar ast de la expresion
        const codigoAST = this.valor.AST();
        let ramaAsignacion = `${nodoPrincipal}[label="Asignacion"];\n`;
        //agregar el nodo del id
        ramaAsignacion += `${nodoIdPrincipal}[label="${this.id_var.toString()}"];\n`;
        ramaAsignacion += codigoAST.rama + "\n";
        //conectar nodo del id con el nodo principal
        ramaAsignacion += `${nodoPrincipal}->${nodoIdPrincipal};\n`;
        //Asignacion->var->valor
        ramaAsignacion += `${nodoIdPrincipal}->${codigoAST.nodo};\n`;
        return { rama: ramaAsignacion, nodo: nodoPrincipal };
    }
}
exports.Assignation = Assignation;
//# sourceMappingURL=Assignation.js.map