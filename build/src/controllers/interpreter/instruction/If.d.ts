import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Type } from "../abstract/Return";
export declare class If extends Instruction {
    exp_condicion: Expression;
    sentencias: Instruction;
    sentencias_else: Instruction;
    constructor(exp_condicion: Expression, sentencias: Instruction, sentencias_else: Instruction, line: number, column: number);
    execute(env: Environment): {
        value: any;
        type: Type;
        tipo: any;
    } | null | undefined;
    AST(): {
        rama: string;
        nodo: string;
    };
}
