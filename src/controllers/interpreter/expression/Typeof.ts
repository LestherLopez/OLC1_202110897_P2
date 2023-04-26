import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return, Type } from "../abstract/Return";
export class Typeof extends Instruction {
  constructor(
    private expression: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env:Environment): Return {
    const valor = this.expression.execute(env); // value and type

    if(valor.type != Type.NULL && valor.type != Type.VOID){
        
            return { value: valor.type, type: Type.STRING };
      
    }
   
   return { value: null, type: Type.NULL };
  }
}