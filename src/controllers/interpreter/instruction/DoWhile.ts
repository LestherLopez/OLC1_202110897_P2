import { Environment } from "../abstract/Environment";
//import { AST } from "../Entorno/AST";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";


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
            this.sentencias.execute(environment_dowhile, "while");
            condicional = this.exp.execute(environment_dowhile);
        } while (condicional.value);   

        
        }  
        public AST(): {rama: string, nodo:string} {
            return {rama: "", nodo:""}
        }
}
