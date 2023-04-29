import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import {Expression} from '../abstract/Expression';
import { ObtenerFunction } from "../expression/ObtenerFunction";

export class Main extends Instruction{
    constructor(
        public funcion: ObtenerFunction,
        line:number,
        column:number
    ){
        super(line, column);
    }

    public execute(env: Environment) {
        this.funcion.execute(env.getGlobal());
    }

    public AST(): {rama: string, nodo:string} {
        return {rama: "", nodo:""}
    }

}



