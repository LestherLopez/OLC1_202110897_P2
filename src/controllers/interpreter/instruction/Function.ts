/*import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
//import { AST } from "../Entorno/AST";
import { Instruction } from "../abstract/Instruction";
//import { Nodo } from "../Entorno/Nodo";
import { Type } from "../abstract/Return";
import { Todeclare } from "./Todeclare";

export class Function extends Instruction {
    
    private nombre      : string;
    private tipo    : Type;
    private parametros  : Expression[];
    sentencias  : Instruction[];  

    constructor(tipo :Type ,nombre : string, parametros :DeclararVariable[], sentencias: Nodo[], linea :number, columna :number) {
        super(linea, columna);

        this.nombre = nombre;
        this.parametros = parametros;
        this.sentencias = sentencias;
    }

    public execute(actual: Ambito, global: Ambito, ast: AST) {
        throw new Error("Method not implemented.");
    }
}*/