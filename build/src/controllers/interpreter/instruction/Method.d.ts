import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from '../abstract/Expression';
export declare class Method extends Instruction {
    private id;
    parametros: Array<Expression>;
    statement: Instruction;
    constructor(id: string, parametros: Array<Expression>, statement: Instruction, line: number, column: number);
    execute(env: Environment): void;
}
