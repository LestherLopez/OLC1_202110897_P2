import { Simbolo } from "./Symbol";
import { Type } from "./Return";
import { Function } from "../instruction/Function";
import { Method } from "../instruction/Method";
export declare class Environment {
    private anterior;
    private variables;
    private funciones;
    private metodos;
    private nameenv;
    constructor(anterior: Environment | null, nameenv: string);
    guardar(id: string, valor: any, tipo: Type, linea: number, columna: number): void;
    getVar(id: string): Simbolo | null;
    guardarFuncion(id: string, funcion: Function): void;
    getFuncion(id: string): Function | null;
    guardarMetodo(id: string, metodo: Method): void;
    getMetodo(id: string): Method | null;
    getGlobal(): Environment;
}
