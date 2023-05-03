import { Environment } from "../abstract/Environment"; 
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Return, Type } from "../abstract/Return";

export class Assignation extends Instruction{
    id_var: string;
    valor: Expression;
    constructor(id_var: string, valor: Expression, line:number, column : number){
        super(line, column);
        this.id_var = id_var;
        this.valor = valor;

    }
    public execute(env: Environment) {
        let variable = env.getVar(this.id_var);
        if(variable === undefined){
            throw new Error("ERROR: No se ha definido la variable previamente " + this.id_var);
        }
        let valor_asignar = this.valor.execute(env);
        if(variable?.type!=valor_asignar.type){
            throw new Error("ERROR => El tipo del valor asignado no corresponde a la variable " + this.id_var);
        }
        variable.valor = valor_asignar.value;
    }
    public AST(): {rama: string, nodo:string}   { 

    const id = Math.floor(Math.random() * 300) + 1;
    //generar nodo
    const nodoPrincipal = `nodoAsignacion${id.toString()}`;
    const nodoIdPrincipal = `nodoIdAsignacion${id.toString()}`;
    //generar ast de la expresion

      const codigoAST: {rama: string, nodo:string}=this.valor.AST();
      let ramaAsignacion = `${nodoPrincipal}[label="Asignacion"];\n`;
      //agregar el nodo del id
      ramaAsignacion += `${nodoIdPrincipal}[label="${this.id_var.toString()}"];\n`;
      ramaAsignacion += codigoAST.rama+ "\n";
      //conectar nodo del id con el nodo principal
      ramaAsignacion += `${nodoPrincipal}->${nodoIdPrincipal};\n`
      //Asignacion->var->valor
      ramaAsignacion += `${nodoIdPrincipal}->${codigoAST.nodo};\n`
      return {rama: ramaAsignacion, nodo:nodoPrincipal}
    
       
    }
}
