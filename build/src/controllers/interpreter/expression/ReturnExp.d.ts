import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
export declare class ReturnExp extends Expression {
    private value;
    constructor(value: Expression, line: number, column: number);
    execute(env: Environment): Return;
    AST(): {
        rama: string;
        nodo: string;
    };
}
