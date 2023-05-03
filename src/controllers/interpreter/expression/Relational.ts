import { Environment } from "../abstract/Environment"; 
import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { TipoRelacional } from "../utils/TipoRelacional";


export class Relational extends Expression {
    constructor(
        private izquierdo: Expression,
        private derecho: Expression,
        private tipoOperacion: TipoRelacional,
        line: number,
        column: number
      ){
        super(line, column);
      }
      public execute(env: Environment): Return {
        //verificar si algun valor es caracter y convertirlo a number
        //igualacion
        const op1 = this.izquierdo.execute(env);
        const op2 = this.derecho.execute(env);
        switch(this.tipoOperacion) {
            //igualdad
            case 0:
                if(op1.type==Type.CHAR){
                    op1.value = op1.value.charCodeAt(0);
                }
                if(op2.type == Type.CHAR){
                    op2.value = op2.value.charCodeAt(0);
                }
                if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                    if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                        return { value: op1.value == op2.value, type: Type.BOOLEAN };
                    }else{
                        return { value: null, type: Type.NULL };
                    }
                }
                
                else if(op1.type == Type.STRING && op2.type == Type.STRING){
                    op1.value = op1.value.toString();
                    op2.value = op2.value.toString();
                    return { value: op1.value==op2.value, type: Type.BOOLEAN };
                }
                else if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                    op1.value = op1.value ? 1 : 0;
                    op2.value = op2.value ? 1 : 0;
                    return { value: op1.value==op2.value, type: Type.BOOLEAN };
                }
            //diferente
            case 1:
                if(op1.type==Type.CHAR){
                    op1.value = op1.value.charCodeAt(0);
                }
                if(op2.type == Type.CHAR){
                    op2.value = op2.value.charCodeAt(0);
                }
                if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                    if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                        return { value: op1.value!=op2.value, type: Type.BOOLEAN };
                    }
                }else if(op1.type == Type.STRING && op2.type == Type.STRING){
                    op1.value = op1.value.toString();
                    op2.value = op2.value.toString();
                    return { value: op1.value!=op2.value, type: Type.BOOLEAN };
                }else if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                    op1.value = op1.value ? 1 : 0;
                    op2.value = op2.value ? 1 : 0;
                    return { value: op1.value!=op2.value, type: Type.BOOLEAN };
                }

            //menor
            case 2:
                if(op1.type==Type.CHAR){
                    op1.value = op1.value.charCodeAt(0);
                }
                if(op2.type == Type.CHAR){
                    op2.value = op2.value.charCodeAt(0);
                }
                if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                    if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                        return { value: op1.value<op2.value, type: Type.BOOLEAN };
                    }
                } else if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                    op1.value = op1.value ? 1 : 0;
                    op2.value = op2.value ? 1 : 0;
                    return { value: op1.value<op2.value, type: Type.BOOLEAN };
                }
            

            //menor o igual
            case 3:
                if(op1.type==Type.CHAR){
                    op1.value = op1.value.charCodeAt(0);
                }
                if(op2.type == Type.CHAR){
                    op2.value = op2.value.charCodeAt(0);
                }
            if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                    return { value: op1.value<=op2.value, type: Type.BOOLEAN };
                } 
            }else if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value<=op2.value, type: Type.BOOLEAN };
            }


            //mayor
            case 4:
                if(op1.type==Type.CHAR){
                    op1.value = op1.value.charCodeAt(0);
                }
                if(op2.type == Type.CHAR){
                    op2.value = op2.value.charCodeAt(0);
                }
                if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                    if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                        return { value: op1.value>op2.value, type: Type.BOOLEAN };
                    }
                }else if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                    op1.value = op1.value ? 1 : 0;
                    op2.value = op2.value ? 1 : 0;
                    return { value: op1.value>op2.value, type: Type.BOOLEAN };
                } 

            //mayor o igual que
            case 5:
                if(op1.type==Type.CHAR){
                    op1.value = op1.value.charCodeAt(0);
                }
                if(op2.type == Type.CHAR){
                    op2.value = op2.value.charCodeAt(0);
                }
                if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                    if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                        return { value: op1.value>=op2.value, type: Type.BOOLEAN };
                    }
                } else if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                    op1.value = op1.value ? 1 : 0;
                    op2.value = op2.value ? 1 : 0;
                    return { value: op1.value>=op2.value, type: Type.BOOLEAN };
                } 
            
          
            
        }
        return { value: null, type: Type.NULL };
      }  
      public AST(): {rama: string, nodo:string} {
        const id = Math.floor(Math.random() * 100) + 1;
        const nombreNodo = 'nodoRelacional'+id.toString();
        let ramaRelacional = nombreNodo+`[label="Relacional"];\n`
        const codeRama : {rama: string, nodo:string} = this.izquierdo.AST();
        ramaRelacional += codeRama.rama;
        ramaRelacional += nombreNodo+"->"+codeRama.nodo+`;\n`
        const idRama = Math.floor(Math.random() * 100) + 1;
        const codeRamas = 'nodoRelacional'+idRama.toString();
        let nodoVar = codeRamas+`[label="${TipoRelacional[this.tipoOperacion]}"];\n`
        ramaRelacional += nodoVar;
        ramaRelacional += nombreNodo+"->"+codeRamas+`;\n`
        const codeRamaact : {rama: string, nodo:string} = this.derecho.AST();
        ramaRelacional += codeRamaact.rama;
        ramaRelacional += nombreNodo+"->"+codeRamaact.nodo+`;\n`
   
        return {rama: ramaRelacional, nodo:nombreNodo}
    }
} 