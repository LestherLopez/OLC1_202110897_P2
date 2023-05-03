import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Type } from '../abstract/Return';
export declare class For extends Instruction {
    exp_inicial: Instruction;
    exp_condicional: Expression;
    exp_actualizacion: Expression;
    sentencias: Instruction;
    constructor(exp_inicial: Instruction, exp_condicional: Expression, exp_actualizacion: Expression, sentencias: Instruction, linea: number, columna: number);
    execute(env: Environment): {
        value: any;
        type: Type;
        tipo: any;
    } | undefined;
    AST(): {
        rama: string;
        nodo: string;
    };
}
