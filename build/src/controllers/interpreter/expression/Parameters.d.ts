import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
export declare class Parameters extends Expression {
    private tipo;
    private id;
    constructor(tipo: Type, id: string, line: number, column: number);
    execute(env: Environment): Return;
}
