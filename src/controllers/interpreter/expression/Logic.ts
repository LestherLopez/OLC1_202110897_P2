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
        return {rama: "", nodo:""}
    }
}