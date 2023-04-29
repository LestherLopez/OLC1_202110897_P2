import { Environment } from "../abstract/Environment";
//import { AST } from "../Entorno/AST";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";


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
            this.sentencias.execute(environment_while, "while");
            condicional = this.exp.execute(environment_while);
        
        }    

        
        }  
        public AST(): {rama: string, nodo:string} {
            return {rama: "", nodo:""}
        } 
}


    //hace falta meter valores de AST en el execute ya cuando se tenga el AST




