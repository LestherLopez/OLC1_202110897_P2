import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import {Expression} from '../abstract/Expression';
import { Type } from "../abstract/Return";
import { TablaSimbolos, ListaTabla } from "../Reports/TablaSimbolos";
export class Function extends Instruction{
    constructor(public tipo:Type ,private id:string, public parametros:Array<Expression>, public statement:Instruction, line:number, column:number)
    {
        super(line, column);
    }

    public execute(env: Environment) {
        // guardar la funcion en entorno

        env.guardarFuncion(this.id,this);
        if(this.tipo==Type.VOID){
            ListaTabla.push(new TablaSimbolos(this.id.toString(), "Método",Type[this.tipo], env.getName(), this.line.toString(), this.column.toString()));
        }else{
            ListaTabla.push(new TablaSimbolos(this.id.toString(), "Función",Type[this.tipo], env.getName(), this.line.toString(), this.column.toString()));
        }
        
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