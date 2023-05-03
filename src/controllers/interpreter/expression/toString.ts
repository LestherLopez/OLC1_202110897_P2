import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return, Type } from "../abstract/Return";
export class toString extends Expression {
  constructor(
    private expression: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env:Environment): Return {
    const valor = this.expression.execute(env); // value and type

    if(valor.type == Type.BOOLEAN || valor.type == Type.DOUBLE || valor.type == Type.INT){
      
        return { value: valor.value.toString(), type: Type.STRING };
    }
   // printlist.push("\n");
   return { value: null, type: Type.NULL };
  }
  public AST(): {rama: string, nodo:string} {
    //numero de id del nodo ToString
   const id = Math.floor(Math.random() * 300) + 1;
   //agregar el id a nodoToString
   const nombreNodo = 'nodoToString'+id.toString();
   //agregar label a nodoToString
   let ramaToString = nombreNodo+`[label="To String"];\n`
   //obtener nodo y rama de expresion
   const codeRama : {rama: string, nodo:string} = this.expression.AST();
   //agregar a la rama de ToString las ramas de expresion
   ramaToString += codeRama.rama;
   //agregar a la rama de ToString la conexion de ToString a expresion
   ramaToString += nombreNodo+"->"+codeRama.nodo+`;\n`
   
   return {rama: ramaToString, nodo:nombreNodo}
}
}