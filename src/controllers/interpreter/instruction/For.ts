import { Environment } from "../abstract/Environment";

import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";


export class For extends Instruction{
    
    exp_inicial: Instruction;
    exp_condicional: Expression;
    exp_actualizacion: Expression;
    sentencias : Instruction;

    constructor(exp_inicial:Instruction , exp_condicional: Expression,exp_actualizacion:Expression, sentencias : Instruction, linea: number, columna: number){
        super(linea, columna);
        this.exp_inicial = exp_inicial;
        this.exp_condicional = exp_condicional;
        this.exp_actualizacion = exp_actualizacion;
        this.sentencias = sentencias;
    }

    public execute(env: Environment) {
        //inicializar
        this.exp_inicial.execute(env, "Condicion inicial bucle for");
        
        let exp_condicional = this.exp_condicional.execute(env);
        //creacion de entorno
        
        let environment_for =  new Environment(env, "for");
        while(exp_condicional.value){
            this.sentencias.execute(environment_for, "for");    
            this.exp_actualizacion.execute(environment_for);
            exp_condicional = this.exp_condicional.execute(environment_for);
        }    

        
        }  
        public AST(): {rama: string, nodo:string} {
            return {rama: "", nodo:""}
        }
}