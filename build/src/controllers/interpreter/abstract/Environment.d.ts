import { Simbolo } from "./Symbol";
import { Type } from "./Return";
import { Function } from "../instruction/Function";
export declare class Environment {
    private anterior;
    private variables;
    private funciones;
    private nameenv;
    constructor(anterior: Environment | null, nameenv: string);
    guardar(id: string, valor: any, tipo: Type, linea: number, columna: number): void;
    getVar(id: string): Simbolo | null;
    guardarFuncion(id: string, funcion: Function): void;
    getFuncion(id: string): Function | null;
    getGlobal(): Environment;
}
