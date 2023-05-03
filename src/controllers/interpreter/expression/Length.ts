/*recibe como parámetro un vector, una lista o una cadena y devuelve el
tamaño de este*/
import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return, Type } from "../abstract/Return";
export class Length extends Expression {
  constructor(
    private expression: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env:Environment): Return {
    const valor = this.expression.execute(env); // value and type

    if(valor.type == Type.STRING){
        
        return { value: valor.value.length, type: Type.STRING };
    }
   
   return { value: null, type: Type.NULL };
  }
  public AST(): {rama: string, nodo:string} {
   //numero de id del nodo Length
   const id = Math.floor(Math.random() * 300) + 1;
   //agregar el id a nodoLength
   const nombreNodo = 'nodoLength'+id.toString();
   //agregar label a nodoLength
   let ramaLength = nombreNodo+`[label="Length"];\n`
   //obtener nodo y rama de expresion
   const codeRama : {rama: string, nodo:string} = this.expression.AST();
   //agregar a la rama de Length las ramas de expresion
   ramaLength += codeRama.rama;
   //agregar a la rama de Length la conexion de Length a expresion
   ramaLength += nombreNodo+"->"+codeRama.nodo+`;\n`
   
   return {rama: ramaLength, nodo:nombreNodo}
}

}