import { Environment } from "../abstract/Environment";
//import { AST } from "../Entorno/AST";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Nodo } from "../abstract/Nodo";

export class While extends Instruction{
    
    private exp: Expression;
    sentencias : Instruction[];

    constructor(exp: Expression, sentencias : Instruction[], linea: number, columna: number){
        super(linea, columna);
        this.exp = exp;
        this.sentencias = sentencias;
    }

    public execute(env: Environment): void {
       while (this.exp.execute(env).value) {
      
        for(let sentencia of this.sentencias){
            sentencia.execute(env);
        }
    }  
    }

    //hace falta meter valores de AST en el execute ya cuando se tenga el AST

}


