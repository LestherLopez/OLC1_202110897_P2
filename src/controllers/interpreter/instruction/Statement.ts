import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Type } from "../abstract/Return";

export class Statement extends Instruction {
    constructor(private body:Array<Instruction>, line:number, column:number){
        super(line, column);
    }

    public execute(env: Environment, id: string) {
        const newEnv = new Environment(env, `Funcion ${id.toString()}`);

        for(const instrucciones of this.body){
            try{
                
                const element = instrucciones.execute(newEnv, id);
                if (element != null && element != undefined) {
                    if(element.type == Type.RETURN){
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
                  
                
            }catch(e){
                //console.log("Errro al ejecutar instrucciones")
            }
        }
    }
    public AST(): {rama: string, nodo:string} {
        return {rama: "", nodo:""}
    }
}