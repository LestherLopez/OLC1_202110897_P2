import { Environment } from "../abstract/Environment";
//import { AST } from "../Entorno/AST";
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { TipoLogica } from "../utils/TipoLogica";

export class Logic extends Expression {
    
    constructor(
        private izquierdo: Expression,
        private derecho: Expression,
        private tipoOperacion: TipoLogica,
        line: number,
        column: number
      ) {
        super(line, column);
      }
      public execute(env: Environment): Return {
        //VERIFICAR SI ES AND
        if (this.tipoOperacion == TipoLogica.AND){
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            
            if(Type.BOOLEAN === op1.type && Type.BOOLEAN === op2.type){
                return { value: op1.value && op2.value, type: Type.BOOLEAN };
            }
    
        }
        else if(this.tipoOperacion == TipoLogica.OR){
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            if(Type.BOOLEAN === op1.type && Type.BOOLEAN === op2.type){
                return { value: op1.value|| op2.value, type: Type.BOOLEAN };
            }
        }
        else if(this.tipoOperacion == TipoLogica.NOT){
            const op2 = this.izquierdo.execute(env);
           
            if(op2.type == Type.BOOLEAN){
                return { value: !op2.value, type: Type.BOOLEAN };
            }
        }
        return { value: null, type: Type.NULL };
    }
    public AST(): {rama: string, nodo:string} {
        const id = Math.floor(Math.random() * 100) + 1;
        const nombreNodo = 'nodoLogica'+id.toString();
        let ramaLogica = nombreNodo+`[label="Operacion Lógica"];\n`
        const codeRama : {rama: string, nodo:string} = this.izquierdo.AST();
        ramaLogica += codeRama.rama;
        ramaLogica += nombreNodo+"->"+codeRama.nodo+`;\n`

        
        const idRama = Math.floor(Math.random() * 100) + 1;
        const codeRamas = 'nodoLogica'+idRama.toString();
        let nodoVar = codeRamas+`[label="${TipoLogica[this.tipoOperacion]}"];\n`
        //agregar a la rama de Logica las ramas de expresion
        ramaLogica += nodoVar;
        //agregar a la rama de Logica la conexion de Logica a expresion
        ramaLogica += nombreNodo+"->"+codeRamas+`;\n`



        const codeRamaact : {rama: string, nodo:string} = this.derecho.AST();
        ramaLogica += codeRamaact.rama;
        ramaLogica += nombreNodo+"->"+codeRamaact.nodo+`;\n`
        
        
        
        return {rama: ramaLogica, nodo:nombreNodo}
    }
}