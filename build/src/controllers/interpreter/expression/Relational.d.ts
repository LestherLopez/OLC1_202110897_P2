import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Return";
import { TipoRelacional } from "../utils/TipoRelacional";
export declare class Relational extends Expression {
    private izquierdo;
    private derecho;
    private tipoOperacion;
    constructor(izquierdo: Expression, derecho: Expression, tipoOperacion: TipoRelacional, line: number, column: number);
    execute(env: Environment): Return;
    AST(): {
        rama: string;
        nodo: string;
    };
}
