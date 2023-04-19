"use strict";
/*import exp from "constants";
import { Environment } from "../abstract/Environment";
//import { AST } from "../Entorno/AST";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
//import { Nodo } from "../Entorno/Nodo";
import { Type } from "../abstract/Return";

export class If extends Instruction {
    
    private exp_condicion   : Expression;
    private sentencias      : string[];
    private sentencias_else : string[];

    constructor(exp_condicion :Expression, sentencias :Nodo[], sentencias_else :Nodo[], linea :number, columna :number) {
        super(linea, columna);
        this.exp_condicion = exp_condicion;
        this.sentencias = sentencias;
        this.sentencias_else = sentencias_else;
    }
    
    public execute(actual: Environment, global: Environment, ast: AST) {
        // Condicion
        let condicion = this.exp_condicion.getValor(actual, global, ast);

        // Verificar tipo booleano
        if(this.exp_condicion.tipo.getPrimitivo() != Type.Boolean) {
            // * ERROR *
            return
        }

        if ( condicion ){
            // Crear Environment nuevo
            let Environment_if = new Environment(actual);

            for(let sentencia of this.sentencias){
                if(sentencia instanceof Instruction) sentencia.ejecutar(Environment_if, global, ast);
                if(sentencia instanceof Expression) sentencia.getValor(Environment_if, global, ast);
            }
        }else {
            let Environment_else = new Environment(actual);
            for(let sentencia of this.sentencias_else){
                if(sentencia instanceof Instruction) sentencia.ejecutar(Environment_else, global, ast);
                if(sentencia instanceof Expression) sentencia.getValor(Environment_else, global, ast);
            }
        }
    }

}*/ 
//# sourceMappingURL=If.js.map