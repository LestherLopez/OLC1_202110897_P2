import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { TablaSuma, TablaResta, TablaMultiplicacion, TablaDivision, TablaModulo, TablaPotencia } from "../utils/MatrizAritmetica";
import { TipoAritmetica } from "../utils/TipoAritmetica";

export class Arithmetic extends Expression {
  constructor(
    private izquierdo: Expression,
    private derecho: Expression,
    private tipoOperacion: TipoAritmetica,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment): Return {
    // verificar el tipo de operacion
    if (this.tipoOperacion == TipoAritmetica.SUMA) {
      // obtener los valores de  los operandos
      const op1 = this.izquierdo.execute(env);
      const op2 = this.derecho.execute(env);
      // obtener el tipo de dato de los operandos
      const tipoDominante = TablaSuma[op1.type][op2.type];
      // verificar el tipo de dato
      switch (tipoDominante) {
        case Type.INT:
          // verificar si algun operando es de tipo boleano
          if (op1.type == Type.BOOLEAN) {
            // convertir el valor a entero
            op1.value = op1.value ? 1 : 0;
          }
          if (op2.type == Type.BOOLEAN) {
            // convertir el valor a entero
            op2.value = op2.value ? 1 : 0;
          }

          // verificar si algun operando es de tipo caracter
          if (op1.type == Type.CHAR) {
            // convertir el valor a entero
            op1.value = op1.value.charCodeAt(0);
          }
          if (op2.type == Type.CHAR) {
            // convertir el valor a entero
            op2.value = op2.value.charCodeAt(0);
          }

          return { value: op1.value + op2.value, type: Type.INT };
        // verifcar demas tipos de datos
        case Type.DOUBLE: //double, entero, booleano, caracter
            //verificar si algun operando es de tipo entero
           if (op1.type == Type.INT){
              op1.value = parseFloat(op1.value.toFixed(2));
           }
           if (op2.type == Type.INT){
             op2.value = parseFloat(op2.value.toFixed(2));
           }
           //verificar si algun operando es de tipo booleano 
           if (op1.type == Type.BOOLEAN){
              op1.value = op1.value ? 1 : 0;
              op1.value = parseFloat(op1.value.toFixed(2));
           }
           if (op2.type == Type.BOOLEAN){
              op2.value = op2.value ? 1 : 0;
              op2.value = parseFloat(op2.value.toFixed(2));
           }
              // verificar si algun operando es de tipo caracter
            if (op1.type == Type.CHAR) {
              // convertir el valor a entero
              op1.value = op1.value.charCodeAt(0);
              op1.value = parseFloat(op1.value.toFixed(2));
            }
            if (op2.type == Type.CHAR) {
              // convertir el valor a entero
              op2.value = op2.value.charCodeAt(0);
              op2.value = parseFloat(op2.value.toFixed(2));
            }
           return { value: op1.value + op2.value, type: Type.DOUBLE };
           //verificar si algun operando es de tipo 
        case Type.STRING: //ENTERO, DOBLE, BOOLEANO, CARACTER
          // verificar si algun operando es de tipo boleano
          if (op1.type == Type.BOOLEAN) {
            // convertir el valor a entero
            op1.value = op1.value ? "verdadero" : "falso";
          }
          if (op2.type == Type.BOOLEAN) {
            // convertir el valor a entero
            op2.value = op2.value ? "verdadero" : "falso";
          }

          // verificar si algun operando es de tipo caracter
          if (op1.type == Type.CHAR) {
            // convertir el valor a entero
            op1.value = op1.value
          }
          if (op2.type == Type.CHAR) {
            // convertir el valor a entero
            op2.value = op2.value
          }
          //verificar si un valor es entero
          if (op1.type == Type.INT){
            op1.value = String(op1.value);
          }
          if(op2.value == Type.INT){
            op2.value = String(op2.value);
          }
          //verificar si un valor es double
          if(op1.value == Type.DOUBLE){
            op1.value = op1.value.toString();
          }
          if(op2.value == Type.DOUBLE){
            op2.value = op2.value.toString();
          }
          return { value: op1.value + op2.value, type: Type.STRING };
          
      }
    } //  RESTA
    else if(this.tipoOperacion == TipoAritmetica.RESTA){
      // obtener los valores de  los operandos
      const op1 = this.izquierdo.execute(env);
      const op2 = this.derecho.execute(env);
      // obtener el tipo de dato de los operandos
      const tipoDominante = TablaResta[op1.type][op2.type];
      // verificar el tipo de dato
      switch (tipoDominante) {
        case Type.INT:
          // verificar si algun operando es de tipo boleano
          if (op1.type == Type.BOOLEAN) {
            // convertir el valor a entero
            op1.value = op1.value ? 1 : 0;
          }
          if (op2.type == Type.BOOLEAN) {
            // convertir el valor a entero
            op2.value = op2.value ? 1 : 0;
          }
          // verificar si algun operando es de tipo caracter
          if (op1.type == Type.CHAR) {
            // convertir el valor a entero
            op1.value = op1.value.charCodeAt(0);
          }
          if (op2.type == Type.CHAR) {
            // convertir el valor a entero
            op2.value = op2.value.charCodeAt(0);
          }
          return { value: op1.value - op2.value, type: Type.INT };
        // verifcar demas tipos de datos
      case Type.DOUBLE: //double, entero, booleano, caracter
        //verificar si algun operando es de tipo entero
       if (op1.type == Type.INT){
          op1.value = parseFloat(op1.value.toFixed(2));
       }
       if (op2.type == Type.INT){
         op2.value = parseFloat(op2.value.toFixed(2));
       }
       //verificar si algun operando es de tipo booleano 
       if (op1.type == Type.BOOLEAN){
          op1.value = op1.value ? 1 : 0;
          op1.value = parseFloat(op1.value.toFixed(2));
       }
       if (op2.type == Type.BOOLEAN){
          op2.value = op2.value ? 1 : 0;
          op2.value = parseFloat(op2.value.toFixed(2));
       }
          // verificar si algun operando es de tipo caracter
        if (op1.type == Type.CHAR) {
          // convertir el valor a entero
          op1.value = op1.value.charCodeAt(0);
          op1.value = parseFloat(op1.value.toFixed(2));
        }
        if (op2.type == Type.CHAR) {
          // convertir el valor a entero
          op2.value = op2.value.charCodeAt(0);
          op2.value = parseFloat(op2.value.toFixed(2));
        }
       return { value: op1.value - op2.value, type: Type.DOUBLE };
      }
    }else if(this.tipoOperacion == TipoAritmetica.MULTIPLICACION){
            // obtener los valores de  los operandos
            const op1 = this.izquierdo.execute(env);
            const op2 = this.derecho.execute(env);
            // obtener el tipo de dato de los operandos
            const tipoDominante = TablaMultiplicacion[op1.type][op2.type];
            // verificar el tipo de dato
            switch (tipoDominante) {
              case Type.INT: //caracter
                  // verificar si algun operando es de tipo caracter
                    if (op1.type == Type.CHAR) {
                      // convertir el valor a entero
                      op1.value = op1.value.charCodeAt(0);
                    }
                    if (op2.type == Type.CHAR) {
                      // convertir el valor a entero
                      op2.value = op2.value.charCodeAt(0);
                    }
                    return { value: op1.value * op2.value, type: Type.INT };
            case Type.DOUBLE:
               if (op1.type == Type.INT){
                  op1.value = parseFloat(op1.value.toFixed(2));
               }
               if (op2.type == Type.INT){
                 op2.value = parseFloat(op2.value.toFixed(2));
               }

                  // veriFicar si algun operando es de tipo caracter
                if (op1.type == Type.CHAR) {
                  // convertir el valor a entero
                  op1.value = op1.value.charCodeAt(0);
                  op1.value = parseFloat(op1.value.toFixed(2));
                }
                if (op2.type == Type.CHAR) {
                  // convertir el valor a entero
                  op2.value = op2.value.charCodeAt(0);
                  op2.value = parseFloat(op2.value.toFixed(2));
                }
               return { value: op1.value * op2.value, type: Type.DOUBLE };
            }
    }
    //Division
    else if(this.tipoOperacion == TipoAritmetica.DIVISION){
      // obtener los valores de  los operandos
      const op1 = this.izquierdo.execute(env);
      const op2 = this.derecho.execute(env);
      // obtener el tipo de dato de los operandos
      const tipoDominante = TablaDivision[op1.type][op2.type];
      // verificar el tipo de dato
      switch (tipoDominante) {
        case Type.DOUBLE:
               if (op1.type == Type.INT){
                  op1.value = parseFloat(op1.value.toFixed(2));
               }
               if (op2.type == Type.INT){
                 op2.value = parseFloat(op2.value.toFixed(2));
               }

                  // veriFicar si algun operando es de tipo caracter
                if (op1.type == Type.CHAR) {
                  // convertir el valor a entero
                  op1.value = op1.value.charCodeAt(0);
                  op1.value = parseFloat(op1.value.toFixed(2));
                }
                if (op2.type == Type.CHAR) {
                  // convertir el valor a entero
                  op2.value = op2.value.charCodeAt(0);
                  op2.value = parseFloat(op2.value.toFixed(2));
                }
               return { value: op1.value / op2.value, type: Type.DOUBLE };
            
      }
    } else if(this.tipoOperacion == TipoAritmetica.POTENCIA){
      // obtener los valores de  los operandos
      const op1 = this.izquierdo.execute(env);
      const op2 = this.derecho.execute(env);
      // obtener el tipo de dato de los operandos
      const tipoDominante = TablaPotencia[op1.type][op2.type];
      // verificar el tipo de dato
      switch (tipoDominante) {
        case Type.INT:
          return { value: op1.value ** op2.value, type: Type.INT };
        case Type.DOUBLE:
          if (op1.type == Type.INT){
            op1.value = parseFloat(op1.value.toFixed(2));
         }
         if (op2.type == Type.INT){
           op2.value = parseFloat(op2.value.toFixed(2));
         }
         return { value: op1.value ** op2.value, type: Type.DOUBLE };
      }
    } else if(this.tipoOperacion == TipoAritmetica.MODULO){
      // obtener los valores de  los operandos
      const op1 = this.izquierdo.execute(env);
      const op2 = this.derecho.execute(env);
      // obtener el tipo de dato de los operandos
      const tipoDominante = TablaMultiplicacion[op1.type][op2.type];
      // verificar el tipo de dato
      switch (tipoDominante) {
        case Type.DOUBLE:
          if (op1.type == Type.INT){
            op1.value = parseFloat(op1.value.toFixed(2));
         }
         if (op2.type == Type.INT){
           op2.value = parseFloat(op2.value.toFixed(2));
         }
         return { value: op1.value % op2.value, type: Type.DOUBLE };
      }
    }
    //  UNARIO
    else if(this.tipoOperacion == TipoAritmetica.MENOSUNARIO){
      // obtener los valores de  los operandos
      const op2 = this.izquierdo.execute(env);
      // entero
      if(op2.type == Type.INT){
        return { value: -op2.value, type: Type.INT };
      }
      // doble
      else if(op2.type == Type.DOUBLE){
        return { value: -op2.value, type: Type.DOUBLE };
      }

    } 
  

    return { value: null, type: Type.NULL };
  }
  public AST(): {rama: string, nodo:string} {
    return {rama: "", nodo:""}
}
}