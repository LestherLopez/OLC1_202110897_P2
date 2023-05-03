import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import {Expression} from '../abstract/Expression';
import { Type } from "../abstract/Return";
import { TablaErrores, ListaTablaErroresLexicos } from "../Reports/TablaErrores";
export class ErrorLexico extends Instruction{
    constructor(public error:string ,line:number, column:number)
    {
        super(line, column);
    }

    public execute() {
        // guardar la funcion en entorno


        ListaTablaErroresLexicos.push(new TablaErrores("Léxico", "El caracter "+this.error+" no pertenece al lenguaje",  this.line, this.column ));
        
        
    }
    public AST(): {rama: string, nodo:string} {
      
        return {rama: "", nodo:""}
    }

}