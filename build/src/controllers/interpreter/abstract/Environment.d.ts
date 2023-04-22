import { Simbolo } from "./Symbol";
import { Type } from "./Return";
export declare class Environment {
    private anterior;
    private variables;
    private nameenv;
    constructor(anterior: Environment | null, nameenv: string);
    guardar(id: string, valor: any, tipo: Type, linea: number, columna: number): void;
    getVar(id: string): Simbolo | null;
}
