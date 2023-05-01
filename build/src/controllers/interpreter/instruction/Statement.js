"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statement = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Environment_1 = require("../abstract/Environment");
const Return_1 = require("../abstract/Return");
class Statement extends Instruction_1.Instruction {
    constructor(body, line, column) {
        super(line, column);
        this.body = body;
    }
    execute(env, id) {
        const newEnv = new Environment_1.Environment(env, `Funcion ${id.toString()}`);
        for (const instrucciones of this.body) {
            try {
                const element = instrucciones.execute(newEnv, id);
                if (element != null && element != undefined) {
                    if (element.type == Return_1.Type.RETURN) {
                        console.log(element.value);
                        return element.value;
                    }
                    /*  if(ret.type == Type.RETURN){
                          console.log(ret);
                          ret.execute(env);
                          return ret.value
                      }*/
                    // console.log(ret.value)
                    //return ret.value;
                }
                /*if(element.type == Type.RETURN){
                return element;
            }else if(element.type == Type.BREAK){
                break;
            }else if(element.type == Type.CONTINUE){
                this.incremento.execute(env);
                continue;
            }*/
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