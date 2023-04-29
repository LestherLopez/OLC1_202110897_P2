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
    execute(env, id) {
        const newEnv = new Environment_1.Environment(env, "Funcion");
        for (const instrucciones of this.body) {
            try {
                const ret = instrucciones.execute(newEnv, id);
                if (ret != null && ret != undefined) {
                    // console.log(ret.value)
                    return ret.value;
                }
                // si la instruccion es un return, retornar el valor
                /*
                if (ret != null && ret != undefined) {
                    const funcion = env.getFuncion(id);
                    if(funcion?.tipo!=Type.VOID){
                        return ret;
                    }else{
                        return ret;
                    }*/
            }
            catch (e) {
                //console.log("Errro al ejecutar instrucciones")
            }
        }
    }
    AST() {
        return { rama: "", nodo: "" };
    }
}
exports.Statement = Statement;
//# sourceMappingURL=Statement.js.map