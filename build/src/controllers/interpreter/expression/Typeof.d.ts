import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return } from "../abstract/Return";
export declare class Typeof extends Expression {
    expression: Expression;
    constructor(expression: Expression, line: number, column: number);
    execute(env: Environment): Return;
    AST(): {
        rama: string;
        nodo: string;
    };
}
