import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Type } from "../abstract/Return";

export class Statement extends Instruction {
    constructor(public body:Array<Instruction>, line:number, column:number){
        super(line, column);
    }

    public execute(env: Environment, id: string) {
        const newEnv = new Environment(env, `Funcion ${id.toString()}`);

        for(const instrucciones of this.body){
            try{
                
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


           
                
            }catch(e){
                //console.log("Errro al ejecutar instrucciones")
            }
        }
    }
    public AST(): {rama: string, nodo:string} {
         let rama = ""
         let nodo = ""
         for (let i = 0; i < this.body.length; i++) {
            let codeRamaact : {rama: string, nodo:string} = this.body[i].AST();
            rama+= codeRamaact.rama
            nodo+= codeRamaact.nodo
          
          }
        return {rama: rama, nodo:nodo}
    }
}