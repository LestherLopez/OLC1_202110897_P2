import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
export declare class DoWhile extends Instruction {
    exp: Expression;
    sentencias: Instruction;
    constructor(exp: Expression, sentencias: Instruction, linea: number, columna: number);
    execute(env: Environment): void;
    AST(): {
        rama: string;
        nodo: string;
    };
}
