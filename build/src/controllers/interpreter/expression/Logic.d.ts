import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Return";
import { TipoLogica } from "../utils/TipoLogica";
export declare class Logic extends Expression {
    private izquierdo;
    private derecho;
    private tipoOperacion;
    constructor(izquierdo: Expression, derecho: Expression, tipoOperacion: TipoLogica, line: number, column: number);
    execute(env: Environment): Return;
}
