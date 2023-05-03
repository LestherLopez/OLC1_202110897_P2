import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return, Type } from "../abstract/Return";
export class Truncate extends Expression {
  constructor(
    private expression: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env:Environment): Return {
    const valor = this.expression.execute(env); // value and type

    if(valor.type == Type.INT || valor.type == Type.DOUBLE){
        
        return { value: Math.trunc(valor.value), type: Type.INT };
    }
   
   return { value: null, type: Type.NULL };
  }
  public AST(): {rama: string, nodo:string} {
    //numero de id del nodo Truncate
   const id = Math.floor(Math.random() * 300) + 1;
   //agregar el id a nodoTruncate
   const nombreNodo = 'nodoTruncate'+id.toString();
   //agregar label a nodoTruncate
   let ramaTruncate = nombreNodo+`[label="Truncate"];\n`
   //obtener nodo y rama de expresion
   const codeRama : {rama: string, nodo:string} = this.expression.AST();
   //agregar a la rama de Truncate las ramas de expresion
   ramaTruncate += codeRama.rama;
   //agregar a la rama de Truncate la conexion de Truncate a expresion
   ramaTruncate += nombreNodo+"->"+codeRama.nodo+`;\n`
   
   return {rama: ramaTruncate, nodo:nombreNodo}
}
}