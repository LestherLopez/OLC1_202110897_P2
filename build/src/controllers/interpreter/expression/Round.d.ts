import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return } from "../abstract/Return";
export declare class Round extends Instruction {
    private expression;
    constructor(expression: Expression, line: number, column: number);
    execute(env: Environment): Return;
}
