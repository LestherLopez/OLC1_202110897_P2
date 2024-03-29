import { Expression } from "../abstract/Expression";
import { Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";
export declare class ReturnExp extends Instruction {
    value: Expression;
    constructor(value: Expression, line: number, column: number);
    execute(env: Environment): this | {
        value: any;
        type: Type;
        tipo: Type;
    };
    AST(): {
        rama: string;
        nodo: string;
    };
}
