import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
export declare class Statement extends Instruction {
    private body;
    constructor(body: Array<Instruction>, line: number, column: number);
    execute(env: Environment, id: string): any;
}
