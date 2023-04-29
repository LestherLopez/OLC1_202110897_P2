import { Environment } from "./Environment";
export declare abstract class Instruction {
    line: number;
    column: number;
    constructor(line: number, column: number);
    abstract execute(env: Environment, id: string): any;
    abstract AST(): {
        rama: string;
        nodo: string;
    };
}
