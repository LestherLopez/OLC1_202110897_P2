import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
export declare class Statement extends Instruction {
    body: Array<Instruction>;
    constructor(body: Array<Instruction>, line: number, column: number);
    execute(env: Environment, id: string): any;
    AST(): {
        rama: string;
        nodo: string;
    };
}
