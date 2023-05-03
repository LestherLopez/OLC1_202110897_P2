import { Environment } from "../abstract/Environment";

import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";

import { Return, Type } from "../abstract/Return";
export class While extends Instruction{
    
    exp: Expression;
    sentencias : Instruction;

    constructor(exp: Expression, sentencias : Instruction, linea: number, columna: number){
        super(linea, columna);
        this.exp = exp;
        this.sentencias = sentencias;
    }

    public execute(env: Environment) {
        let condicional = this.exp.execute(env);
        //creacion de entorno
        
        let environment_while =  new Environment(env, "while");
        while(condicional.value){
            let elemento = this.sentencias.execute(environment_while, "while");
            condicional = this.exp.execute(environment_while);
            if(elemento!= null || elemento!= undefined){
                if(elemento.type==Type.RETURN){
             
                    return {value:elemento.value, type: Type.RETURN, tipo:elemento.tipo}
                }
           }  
        }    

        
        }  
        public AST(): {rama: string, nodo:string} {
            const id = Math.floor(Math.random() * 300) + 1;
            const nombreNodo = 'nodowhile'+id.toString();
            let ramawhile = nombreNodo+`[label="while"];\n`
            const codeRama : {rama: string, nodo:string} = this.exp.AST();
            ramawhile += codeRama.rama;
            ramawhile += nombreNodo+"->"+codeRama.nodo+`;\n`

            const codeRamaIN : {rama: string, nodo:string} = this.sentencias.AST();
            ramawhile += codeRamaIN.rama;
            const subramas = codeRamaIN.nodo.split("nodo");
            for (let i = 1; i < subramas.length; i++) {
                
                ramawhile += nombreNodo+"->"+"nodo"+subramas[i]+`;\n`
            }
            return {rama: ramawhile, nodo:nombreNodo}
        }

        
}


    //hace falta meter valores de AST en el execute ya cuando se tenga el AST




