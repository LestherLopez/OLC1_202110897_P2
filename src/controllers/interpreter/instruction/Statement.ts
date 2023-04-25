import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Type } from "../abstract/Return";

export class Statement extends Instruction {
    constructor(private body:Array<Instruction>, line:number, column:number){
        super(line, column);
    }

    public execute(env: Environment, id: string) {
        const newEnv = new Environment(env, "Funcion");

        for(const instrucciones of this.body){
            try{
                
                const ret = instrucciones.execute(newEnv, id);
                // si la instruccion es un return, retornar el valor
                if (ret != null && ret != undefined) {
                    //const funcion = env.getFuncion(id);
                   // if(funcion?.tipo!=Type.VOID){
                        return ret;
                   // }else{
                        return;
                   // }
                    
                }
            }catch(e){
                //console.log("Errro al ejecutar instrucciones")
            }
        }
    }
}