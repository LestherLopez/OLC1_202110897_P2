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

}
/*        
        let variable = actual.getVariable(this.id);
        if(variable === undefined) {
            // * ERROR *
            throw new Error("ERROR => No se ha definido la variable " + this.id);
        }

        let valor_asig = this.exp.getValor(actual, global, ast);
        if(variable.getTipo().getPrimitivo() != this.exp.tipo.getPrimitivo()) {
            throw new Error("ERROR => El tipo del valor asignado no corresponde a la variable " + this.id);
        }

        variable.asignarValor(valor_asig);

    }

}*/