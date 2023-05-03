import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return, Type } from "../abstract/Return";
export class Round extends Expression {
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
        const entero = Math.floor(valor.value);
        const decimal = valor.value - entero;
        if (decimal >= 0.5) {
            // si el decimal es mayor o igual que 0.5, redondeamos al número superior
            return { value: Math.ceil(valor.value), type: Type.INT };
          } else {
            // si el decimal es menor que 0.5, redondeamos al número inferior
            return { value: Math.floor(valor.value), type: Type.INT };
          }
    }
   
   return { value: null, type: Type.NULL };
  }
  public AST(): {rama: string, nodo:string} {
    //numero de id del nodo Round
   const id = Math.floor(Math.random() * 300) + 1;
   //agregar el id a nodoRound
   const nombreNodo = 'nodoRound'+id.toString();
   //agregar label a nodoRound
   let ramaRound = nombreNodo+`[label="Round"];\n`
   //obtener nodo y rama de expresion
   const codeRama : {rama: string, nodo:string} = this.expression.AST();
   //agregar a la rama de Round las ramas de expresion
   ramaRound += codeRama.rama;
   //agregar a la rama de Round la conexion de Round a expresion
   ramaRound += nombreNodo+"->"+codeRama.nodo+`;\n`
   
   return {rama: ramaRound, nodo:nombreNodo}
}
}