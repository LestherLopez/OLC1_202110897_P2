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
    return {rama: "", nodo:""}
}
}