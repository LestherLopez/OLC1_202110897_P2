import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

export class Parameters extends Expression {
    constructor(
      private tipo: Type,
      private id: string,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public execute(env: Environment): Return {
      // verificar el parametro
      return { value: this.id, type: this.tipo };
    }
    public AST(): {rama: string, nodo:string} {
      const idRama = Math.floor(Math.random() * 100) + 1;
      const nombreNodo = 'nodoTipoPar'+idRama.toString();
      let ramaparametro = nombreNodo+`[label="${Type[this.tipo]}"];\n`

      const idRamaa = Math.floor(Math.random() * 100) + 1;
     const codeRamas = 'nodoIDparametro'+idRamaa.toString();
       let nodoVar = codeRamas+`[label="${this.id}"];\n`
            //agregar a la rama de Aritmetica las ramas de expresion
      ramaparametro += nodoVar;

      ramaparametro += nombreNodo+"->"+codeRamas+`;\n`

      return {rama: ramaparametro, nodo:nombreNodo}
      return {rama: "", nodo:""}
  }
  }