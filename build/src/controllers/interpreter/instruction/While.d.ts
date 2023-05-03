import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Type } from "../abstract/Return";
export declare class While extends Instruction {
    exp: Expression;
    sentencias: Instruction;
    constructor(exp: Expression, sentencias: Instruction, linea: number, columna: number);
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
