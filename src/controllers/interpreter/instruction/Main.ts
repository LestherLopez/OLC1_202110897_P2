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
         //numero de id del nodo main
    const id = Math.floor(Math.random() * 300) + 1;
    //agregar el id a nodoMain
    const nombreNodo = 'nodoMain'+id.toString();
    //agregar label a nodoMain
    let ramamain = nombreNodo+`[label="main"];\n`
    //obtener nodo y rama de expresion
    const codeRama : {rama: string, nodo:string} = this.funcion.AST();
    //agregar a la rama de main las ramas de expresion
    ramamain += codeRama.rama;
    //agregar a la rama de main la conexion de main a expresion
    ramamain += nombreNodo+"->"+codeRama.nodo+`;\n`
    
    return {rama: ramamain, nodo:nombreNodo}
    return {rama: "", nodo:""}
    }

}



