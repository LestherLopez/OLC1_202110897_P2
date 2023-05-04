import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return, Type } from "../abstract/Return";
import { Instruction } from "../abstract/Instruction";
export class Casteo extends Instruction {
  constructor(
    private tipov: Type,
    private expression: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env:Environment) {
    const valor = this.expression.execute(env); // value and type

    if(this.tipov == Type.DOUBLE){
        if(valor.type == Type.CHAR || valor.type == Type.INT){
            if(valor.type == Type.CHAR){
                return  { value: parseFloat(valor.value.charCodeAt(0)), type: this.tipov };
            }else{
                return { value: parseFloat(valor.value), type: this.tipov };
            }
        }
    }else if(this.tipov == Type.INT){
        if(valor.type == Type.CHAR || valor.type == Type.DOUBLE){
            if(valor.type == Type.CHAR){
                return  { value: parseFloat(valor.value.charCodeAt(0)), type: this.tipov };
            }else{
                return { value: parseInt(valor.value), type: this.tipov };
            }
        }
    }else if(this.tipov == Type.CHAR){
        if(valor.type == Type.DOUBLE || valor.type == Type.INT){
            if(valor.type == Type.INT){
                return  { value: String.fromCharCode(valor.value), type: this.tipov };
        }
    }
   

  }
  return { value: null, type: Type.NULL };
}
  public AST(): {rama: string, nodo:string} {
   //numero de id del nodo Casteo
   const id = Math.floor(Math.random() * 300) + 1;
   //agregar el id a nodoCasteo
   const nombreNodo = 'nodoCasteo'+id.toString();
   //agregar label a nodoCasteo
   let ramaCasteo = nombreNodo+`[label="Casteo"];\n`
   //obtener nodo y rama de expresion
   const codeRama : {rama: string, nodo:string} = this.expression.AST();
   //agregar a la rama de Casteo las ramas de expresion
   ramaCasteo += codeRama.rama;
   //agregar a la rama de Casteo la conexion de Casteo a expresion
   ramaCasteo += nombreNodo+"->"+codeRama.nodo+`;\n`
   
   return {rama: ramaCasteo, nodo:nombreNodo}
}

}