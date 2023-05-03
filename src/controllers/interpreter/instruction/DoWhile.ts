import { Environment } from "../abstract/Environment";
//import { AST } from "../Entorno/AST";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Return, Type } from "../abstract/Return";

export class DoWhile extends Instruction{
    
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
        
        let environment_dowhile =  new Environment(env, "dowhile");
        do {
            let elemento = this.sentencias.execute(environment_dowhile, "while");
            if(elemento!= null || elemento!= undefined){
                if(elemento.type==Type.RETURN){
             
                    return {value:elemento.value, type: Type.RETURN, tipo:elemento.tipo}
                }
           }  
            condicional = this.exp.execute(environment_dowhile);
        } while (condicional.value);   

        
        }  
        public AST(): {rama: string, nodo:string} {
            const id = Math.floor(Math.random() * 300) + 1;
            const nombreNodo = 'nodoDoWhile'+id.toString();
            let ramaDoWhile = nombreNodo+`[label="DoWhile"];\n`
            const codeRama : {rama: string, nodo:string} = this.exp.AST();
            ramaDoWhile += codeRama.rama;
            ramaDoWhile += nombreNodo+"->"+codeRama.nodo+`;\n`

            const codeRamaIN : {rama: string, nodo:string} = this.sentencias.AST();
            ramaDoWhile += codeRamaIN.rama;
            const subramas = codeRamaIN.nodo.split("nodo");
            for (let i = 1; i < subramas.length; i++) {
                
                ramaDoWhile += nombreNodo+"->"+"nodo"+subramas[i]+`;\n`
            }
            return {rama: ramaDoWhile, nodo:nombreNodo}
        }

}
