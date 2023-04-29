import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
export declare class For extends Instruction {
    exp_inicial: Instruction;
    exp_condicional: Expression;
    exp_actualizacion: Expression;
    sentencias: Instruction;
    constructor(exp_inicial: Instruction, exp_condicional: Expression, exp_actualizacion: Expression, sentencias: Instruction, linea: number, columna: number);
    execute(env: Environment): void;
    AST(): {
        rama: string;
        nodo: string;
    };
}
