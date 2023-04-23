"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statement = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Environment_1 = require("../abstract/Environment");
class Statement extends Instruction_1.Instruction {
    constructor(body, line, column) {
        super(line, column);
        this.body = body;
    }
    execute(env) {
        const newEnv = new Environment_1.Environment(env, "Funcion");
        for (const instrucciones of this.body) {
            try {
                const ret = instrucciones.execute(newEnv);
                // si la instruccion es un return, retornar el valor
                if (ret != null && ret != undefined) {
                    return ret;
                }
            }
            catch (e) {
                console.log("Errro al ejecutar instrucciones");
            }
        }
    }
}
exports.Statement = Statement;
//# sourceMappingURL=Statement.js.map