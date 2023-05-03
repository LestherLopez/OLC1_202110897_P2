import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return, Type } from "../abstract/Return";
export class toUpper extends  Expression {
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
        valor.value = valor.value.toUpperCase();
        return { value: valor.value, type: Type.STRING };
    }
   // printlist.push("\n");
   return { value: null, type: Type.NULL };
  }
  public AST(): {rama: string, nodo:string} {
    //numero de id del nodo ToUpper
   const id = Math.floor(Math.random() * 300) + 1;
   //agregar el id a nodoToUpper
   const nombreNodo = 'nodoToUpper'+id.toString();
   //agregar label a nodoToUpper
   let ramaToUpper = nombreNodo+`[label="To Upper"];\n`
   //obtener nodo y rama de expresion
   const codeRama : {rama: string, nodo:string} = this.expression.AST();
   //agregar a la rama de ToUpper las ramas de expresion
   ramaToUpper += codeRama.rama;
   //agregar a la rama de ToUpper la conexion de ToUpper a expresion
   ramaToUpper += nombreNodo+"->"+codeRama.nodo+`;\n`
   
   return {rama: ramaToUpper, nodo:nombreNodo}
}
}