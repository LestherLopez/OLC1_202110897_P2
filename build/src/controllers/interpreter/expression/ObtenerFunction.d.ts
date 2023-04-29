import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
export declare class ObtenerFunction extends Expression {
    private id;
    private argumentos;
    constructor(id: string, argumentos: Array<Expression>, line: number, column: number);
    execute(env: Environment): any;
    AST(): {
        rama: string;
        nodo: string;
    };
}
