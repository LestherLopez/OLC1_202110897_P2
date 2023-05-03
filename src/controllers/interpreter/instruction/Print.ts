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
  public AST(): {rama: string, nodo:string} {
    //numero de id del nodo print
    const id = Math.floor(Math.random() * 300) + 1;
    //agregar el id a nodoprint
    const nombreNodo = 'nodoPrint'+id.toString();
    //agregar label a nodoPrint
    let ramaPrint = nombreNodo+`[label="Print"];\n`
    //obtener nodo y rama de expresion
    const codeRama : {rama: string, nodo:string} = this.expression.AST();
    //agregar a la rama de print las ramas de expresion
    ramaPrint += codeRama.rama;
    //agregar a la rama de print la conexion de print a expresion
    ramaPrint += nombreNodo+"->"+codeRama.nodo+`;\n`
    
    return {rama: ramaPrint, nodo:nombreNodo}
}
}