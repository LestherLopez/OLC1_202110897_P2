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
        const newEnv = new Environment_1.Environment(env, `Funcion ${id.toString()}`);
        for (const instrucciones of this.body) {
            try {
                const element = instrucciones.execute(newEnv, id);
                if (element != null && element != undefined) {
                    // console.log("Statement1")
                    //  console.log(element.value);
                    console.log("esta en statement");
                    console.log(element);
                    return element;
                }
                /*if(element.type == Type.RETURN){
                return element;
            }else if(element.type == Type.BREAK){
                break;
            }else if(element.type == Type.CONTINUE){
                this.incremento.execute(env);
                continue;
            }*/
            }
            catch (e) {
                //console.log("Errro al ejecutar instrucciones")
            }
        }
    }
    AST() {
        let rama = "";
        let nodo = "";
        for (let i = 0; i < this.body.length; i++) {
            let codeRamaact = this.body[i].AST();
            rama += codeRamaact.rama;
            nodo += codeRamaact.nodo;
        }
        return { rama: rama, nodo: nodo };
    }
}
exports.Statement = Statement;
//# sourceMappingURL=Statement.js.map