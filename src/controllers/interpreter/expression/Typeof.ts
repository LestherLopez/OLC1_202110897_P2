import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return, Type } from "../abstract/Return";
export class Typeof extends Expression {
  constructor(
    public expression: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env:Environment): Return {
    const valor = this.expression.execute(env); // value and type

    if(valor.type != Type.NULL && valor.type != Type.VOID){
        
            return { value: Type[valor.type], type: Type.STRING };
      
    }
   
   return { value: null, type: Type.NULL };
  }
  public AST(): {rama: string, nodo:string} {
    //numero de id del nodo Typeof
   const id = Math.floor(Math.random() * 300) + 1;
   //agregar el id a nodoTypeof
   const nombreNodo = 'nodoTypeof'+id.toString();
   //agregar label a nodoTypeof
   let ramaTypeof = nombreNodo+`[label="Typeof"];\n`
   //obtener nodo y rama de expresion
   const codeRama : {rama: string, nodo:string} = this.expression.AST();
   //agregar a la rama de Typeof las ramas de expresion
   ramaTypeof += codeRama.rama;
   //agregar a la rama de Typeof la conexion de Typeof a expresion
   ramaTypeof += nombreNodo+"->"+codeRama.nodo+`;\n`
   
   return {rama: ramaTypeof, nodo:nombreNodo}
}
}