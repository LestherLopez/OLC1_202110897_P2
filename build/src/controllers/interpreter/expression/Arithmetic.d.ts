import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { TipoAritmetica } from "../utils/TipoAritmetica";
export declare class Arithmetic extends Expression {
    private izquierdo;
    private derecho;
    private tipoOperacion;
    constructor(izquierdo: Expression, derecho: Expression, tipoOperacion: TipoAritmetica, line: number, column: number);
    execute(env: Environment): Return;
    AST(): {
        rama: string;
        nodo: string;
    };
}
