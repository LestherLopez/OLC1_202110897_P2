import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import {Expression} from '../abstract/Expression';
import { Type } from "../abstract/Return";
import { TablaErrores, ListaTablaErrores } from "../Reports/TablaErrores";
export class ErrorSintactico extends Instruction{
    constructor(public error:string ,line:number, column:number)
    {
        super(line, column);
    }

    public execute(env: Environment) {
        // guardar la funcion en entorno

    ListaTablaErrores.push(new TablaErrores("Sintáctico", "No se esperaba el identificador "+this.error, this.line, this.column ));
    
        
    }
    public AST(): {rama: string, nodo:string} {
     
        return {rama: "", nodo:""}
    }

}