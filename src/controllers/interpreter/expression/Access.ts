import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

export class Access extends Expression{
    constructor(private id: string, line:number, column:number){
        super(line, column);

    }
    public execute(env: Environment): Return {
        const value = env.getVar(this.id);
        if(value){
            return {value: value.valor, type: value.type};
        }else{
            return {value: null, type: Type.NULL}
        }
    }
    public AST(): {rama: string, nodo:string} {
        const id = Math.floor(Math.random() * 100) + 1;
    //agregar el id a nodoacceder
    const nombreNodo = 'nodoacceder'+id.toString();
    //agregar label a nodoacceder
    let ramaacceder = nombreNodo+`[label="Acceso variable"];\n`
    //obtener nodo y rama de expresion
    const idRama = Math.floor(Math.random() * 100) + 1;
    const codeRama = 'nodoacceder'+idRama.toString();
    let nodoVar = codeRama+`[label="${this.id}"];\n`
    //agregar a la rama de acceder las ramas de expresion
    ramaacceder += nodoVar;
    //agregar a la rama de acceder la conexion de acceder a expresion
    ramaacceder += nombreNodo+"->"+codeRama+`;\n`
    
    return {rama: ramaacceder, nodo:nombreNodo}
    }
}