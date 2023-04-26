import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return, Type } from "../abstract/Return";
export class toLower extends Instruction {
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

}