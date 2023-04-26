import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { ObtenerFunction } from "../expression/ObtenerFunction";
export declare class Main extends Instruction {
    funcion: ObtenerFunction;
    constructor(funcion: ObtenerFunction, line: number, column: number);
    execute(env: Environment): void;
}
