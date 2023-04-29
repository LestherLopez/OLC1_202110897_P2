import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { TipoAritmetica } from "../utils/TipoAritmetica";
export declare class IncreaseDecrease extends Expression {
    private izquierdo;
    private tipoOperacion;
    constructor(izquierdo: string, tipoOperacion: TipoAritmetica, line: number, column: number);
    execute(env: Environment): Return;
    AST(): {
        rama: string;
        nodo: string;
    };
}
