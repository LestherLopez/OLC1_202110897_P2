
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";

// return 5;
export class ReturnExp extends Instruction {
    constructor(public value:Expression, line:number, column:number){
        super(line, column);
    }

    public execute(env: Environment) {
        if(this.value != null && this.value != undefined){
            let valuer = this.value.execute(env);
            
            return {value:valuer.value, type: Type.RETURN, tipo: valuer.type};
        }
        return this

    }

    public AST(): {rama: string, nodo:string} {
        //numero de id del nodo Return
    if(this.value== null || this.value==undefined){

    
   const id = Math.floor(Math.random() * 500) + 1;
   //agregar el id a nodoReturn
   const nombreNodo = 'nodoReturn'+id.toString();
   //agregar label a nodoReturn
   let ramaReturn = nombreNodo+`[label="Return"];\n`
   //obtener nodo y rama de expresion

   return {rama: ramaReturn, nodo:nombreNodo}
    }else{
        const id = Math.floor(Math.random() * 500) + 1;
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

}