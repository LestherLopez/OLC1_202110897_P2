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
        if(this.tipoOperacion == TipoRelacional.IGUAL){
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            /*
            if(op1.type==Type.CHAR){
                op1.value = op1.value.charCodeAt(0);
            }
            if(op2.type == Type.CHAR){
                op2.value = op2.value.charCodeAt(0);
            }*/
            if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                    return { value: op1.value == op2.value, type: Type.BOOLEAN };
                }else{

                }
            }
            if(op1.type == Type.STRING && op2.type == Type.STRING){
                op1.value = op1.value.toString();
                op2.value = op2.value.toString();
                return { value: op1.value==op2.value, type: Type.BOOLEAN };
            }
            if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value==op2.value, type: Type.BOOLEAN };
            }
        //diferenciacion 
        }
        
        else if(this.tipoOperacion = TipoRelacional.DIFERENTE){
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            /*
            if(op1.type==Type.CHAR){
                op1.value = op1.value.charCodeAt(0);
            }
            if(op2.type == Type.CHAR){
                op2.value = op2.value.charCodeAt(0);
            }*/
    
            if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                    return { value: op1.value!=op2.value, type: Type.BOOLEAN };
                }else{

                }
            } else if(op1.type == Type.STRING && op2.type == Type.STRING){
                op1.value = op1.value.toString();
                op2.value = op2.value.toString();
                return { value: op1.value!=op2.value, type: Type.BOOLEAN };
            }else if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value!=op2.value, type: Type.BOOLEAN };
            }

        }
        
        else if(this.tipoOperacion = TipoRelacional.MENOR){
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            //convertir caracter a number
            /*
            if(op1.type==Type.CHAR){
                op1.value = op1.value.charCodeAt(0);
            }
            if(op2.type == Type.CHAR){
                op2.value = op2.value.charCodeAt(0);
            }*/
          
            if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                    return { value: op1.value<op2.value, type: Type.BOOLEAN };
                }else{

                }
            } else if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value<op2.value, type: Type.BOOLEAN };
            }
        }

        else if(this.tipoOperacion = TipoRelacional.MENORIGUAL){
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            //convertir caracter a number
            /*
            if(op1.type==Type.CHAR){
                op1.value = op1.value.charCodeAt(0);
            }
            if(op2.type == Type.CHAR){
                op2.value = op2.value.charCodeAt(0);
            }*/

            if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                    return { value: op1.value<=op2.value, type: Type.BOOLEAN };
                }else{

                }
            }else if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value<=op2.value, type: Type.BOOLEAN };
            }
        }
        
        
        else if(this.tipoOperacion = TipoRelacional.MAYOR){
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            //convertir caracter a number
            /*
            if(op1.type==Type.CHAR){
                op1.value = op1.value.charCodeAt(0);
            }
            if(op2.type == Type.CHAR){
                op2.value = op2.value.charCodeAt(0);
            }*/
          
            if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                    return { value: op1.value>op2.value, type: Type.BOOLEAN };
                }else{

                }
            }else if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value>op2.value, type: Type.BOOLEAN };
            } 
        }
        
        
        else if(this.tipoOperacion = TipoRelacional.MAYORIGUAL){
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            //convertir caracter a number
            /*
            if(op1.type==Type.CHAR){
                op1.value = op1.value.charCodeAt(0);
            }
            if(op2.type == Type.CHAR){
                op2.value = op2.value.charCodeAt(0);
            }*/
       
            if(op1.type == Type.INT || op1.type == Type.DOUBLE || op1.type == Type.CHAR){
                if(op2.type == Type.INT || op2.type == Type.DOUBLE || op1.type == Type.CHAR){
                    return { value: op1.value>=op2.value, type: Type.BOOLEAN };
                }else{

                }
            }
            else if(op1.type == Type.BOOLEAN && op2.type == Type.BOOLEAN){
                op1.value = op1.value ? 1 : 0;
                op2.value = op2.value ? 1 : 0;
                return { value: op1.value>=op2.value, type: Type.BOOLEAN };
            } 
        }



        return { value: null, type: Type.NULL };
      }  
} 