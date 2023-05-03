import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return, Type } from "../abstract/Return";
export class toLower extends Expression {
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
        valor.value = valor.value.toLowerCase();
        return { value: valor.value, type: Type.STRING };
    }
   // printlist.push("\n");
   return { value: null, type: Type.NULL };
  }
  public AST(): {rama: string, nodo:string} {
    //numero de id del nodo ToLower
   const id = Math.floor(Math.random() * 300) + 1;
   //agregar el id a nodoToLower
   const nombreNodo = 'nodoToLower'+id.toString();
   //agregar label a nodoToLower
   let ramaToLower = nombreNodo+`[label="To Lower"];\n`
   //obtener nodo y rama de expresion
   const codeRama : {rama: string, nodo:string} = this.expression.AST();
   //agregar a la rama de ToLower las ramas de expresion
   ramaToLower += codeRama.rama;
   //agregar a la rama de ToLower la conexion de ToLower a expresion
   ramaToLower += nombreNodo+"->"+codeRama.nodo+`;\n`
   
   return {rama: ramaToLower, nodo:nombreNodo}
}
}