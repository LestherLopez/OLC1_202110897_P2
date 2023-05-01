import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
export declare class ErrorLexico extends Instruction {
    error: string;
    constructor(error: string, line: number, column: number);
    execute(env: Environment): void;
    AST(): {
        rama: string;
        nodo: string;
    };
}
