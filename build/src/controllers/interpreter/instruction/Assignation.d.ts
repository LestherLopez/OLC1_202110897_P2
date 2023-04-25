import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
export declare class Assignation extends Instruction {
    id_var: string;
    valor: Expression;
    constructor(id_var: string, valor: Expression, line: number, column: number);
    execute(env: Environment): void;
}
