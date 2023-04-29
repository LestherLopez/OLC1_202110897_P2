import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import {Expression} from '../abstract/Expression';
import { Type } from "../abstract/Return";

export class Method extends Instruction{
    constructor(private id:string, public parametros:Array<Expression>, public statement:Instruction, line:number, column:number)
    {
        super(line, column);
    }

    public execute(env: Environment) {
        // guardar la funcion en entorno
        env.guardarMetodo(this.id,this);
    }
    public AST(): {rama: string, nodo:string} {
        return {rama: "", nodo:""}
    }
    
}