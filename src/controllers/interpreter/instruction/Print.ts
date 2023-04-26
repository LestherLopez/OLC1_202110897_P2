import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { printlist } from "../Reports/PrintList";
import { Environment } from "../abstract/Environment";

export class Print extends Instruction {
  constructor(
    line: number,
    column: number,
    private expression: Expression
  ) {
    super(line, column);
  }

  public execute(env:Environment): void {
    const value = this.expression.execute(env); // value and type
    printlist.push(value.value);
   // printlist.push("\n");
    console.log("desde consola:" ,value.value);
  }

}