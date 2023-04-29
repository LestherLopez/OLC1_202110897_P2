import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from '../abstract/Expression';
import { Type } from "../abstract/Return";
export declare class Function extends Instruction {
    tipo: Type;
    private id;
    parametros: Array<Expression>;
    statement: Instruction;
    constructor(tipo: Type, id: string, parametros: Array<Expression>, statement: Instruction, line: number, column: number);
    execute(env: Environment): void;
    AST(): {
        rama: string;
        nodo: string;
    };
}
