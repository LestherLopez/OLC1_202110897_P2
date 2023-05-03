
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

// return 5;
export class ReturnExp extends Expression {
    constructor(public value:Expression, line:number, column:number){
        super(line, column);
    }

    public execute(env: Environment):Return {
        if(this.value != null && this.value != undefined){
            const value = this.value.execute(env);
            console.log("a")
            console.log(value)
            return {value:value.value, type: Type.CONTINUE};
        }
        return {value:null, type: Type.CONTINUE};

    }

    public AST(): {rama: string, nodo:string} {
        //numero de id del nodo Return
   const id = Math.floor(Math.random() * 300) + 1;
   //agregar el id a nodoReturn
   const nombreNodo = 'nodoReturn'+id.toString();
   //agregar label a nodoReturn
   let ramaReturn = nombreNodo+`[label="Return"];\n`
   //obtener nodo y rama de expresion
   const codeRama : {rama: string, nodo:string} = this.value.AST();
   //agregar a la rama de Return las ramas de expresion
   ramaReturn += codeRama.rama;
   //agregar a la rama de Return la conexion de Return a expresion
   ramaReturn += nombreNodo+"->"+codeRama.nodo+`;\n`
   
   return {rama: ramaReturn, nodo:nombreNodo}
    }

}