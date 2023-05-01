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
        //crear nodo de funcion
    /*    const id = Math.floor(Math.random() * 100) + 1;
        const nodoPrincipal = `nodoFuncion${id.toString()}`;
        //nodo del id del de la funcion
        const nodoIdPrincipal = `nodoFuncionId${id.toString()}`;
        for (let i = 0; i < this.parametros.length; i++) {
            let codigoAST: {rama: string, nodo:string}=this.parametros[i].AST();
            let ramaFuncion = `${nodoPrincipal}[label="Declarar"];\n`;
            ramaFuncion += `${nodoIdPrincipal}[label="${this.id.toString()}"];\n`;
            // Haz algo con la expresión
          }*/
        return {rama: "", nodo:""}
    }

}