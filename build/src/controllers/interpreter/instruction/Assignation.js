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
}
exports.Assignation = Assignation;
/*
        let variable = actual.getVariable(this.id);
        if(variable === undefined) {
            // * ERROR *
            throw new Error("ERROR => No se ha definido la variable " + this.id);
        }

        let valor_asig = this.exp.getValor(actual, global, ast);
        if(variable.getTipo().getPrimitivo() != this.exp.tipo.getPrimitivo()) {
            throw new Error("ERROR => El tipo del valor asignado no corresponde a la variable " + this.id);
        }

        variable.asignarValor(valor_asig);

    }

}*/ 
//# sourceMappingURL=Assignation.js.map