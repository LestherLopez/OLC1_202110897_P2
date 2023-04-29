import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { TipoAritmetica } from "../utils/TipoAritmetica";

export class IncreaseDecrease extends Expression {
  constructor(
    private izquierdo: string,
    private tipoOperacion: TipoAritmetica,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute(env: Environment): Return {
        //INCREMENTO DE NUMERO
    if(this.tipoOperacion == TipoAritmetica.INCREMENTO){
      let op1 = env.getVar(this.izquierdo);
      // entero
      if(op1){
      if(op1.type == Type.INT){
        op1.valor = op1.valor+1;
        return { value: op1.valor, type: Type.INT };
      }
      // doble
      else if(op1.type == Type.DOUBLE){
        op1.valor = op1.valor+1.0;
        return { value: op1.valor, type: Type.DOUBLE };
      }
    }else{
      return {value: null, type: Type.NULL}
    }
    }
    //DECREMENTO DE NUMERO
    else if(this.tipoOperacion == TipoAritmetica.DECREMENTO){
      let op1 = env.getVar(this.izquierdo);


      if(op1){
        if(op1.type == Type.INT){

          op1.valor = op1.valor-1;
          return { value: op1.valor, type: Type.INT };
        }
        // doble
        else if(op1.type == Type.DOUBLE){
          op1.valor = op1.valor-1.0;
          return { value: op1.valor, type: Type.DOUBLE };
        }
    }else{
        return {value: null, type: Type.NULL}
    } 
    }
    return { value: null, type: Type.NULL };
  }
  public AST(): {rama: string, nodo:string} {
    return {rama: "", nodo:""}
} 
}
