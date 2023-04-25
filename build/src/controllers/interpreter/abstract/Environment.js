"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const Symbol_1 = require("./Symbol");
const PrintList_1 = require("../Reports/PrintList");
class Environment {
    // constructor
    constructor(anterior, nameenv) {
        this.anterior = anterior;
        this.variables = new Map(); //  mapa de variables
        this.funciones = new Map();
        this.metodos = new Map();
        this.variables = new Map();
        this.nameenv = nameenv;
    }
    // guardar una nueva variable
    guardar(id, valor, tipo, linea, columna) {
        // verificar el ambito
        let env = this;
        // verificar si la variable ya existe
        if (!env.variables.has(id.toLowerCase())) {
            // guardar la variable
            // guardar la variable en una tabla de simbolos para el reporte
            env.variables.set(id.toLowerCase(), new Symbol_1.Simbolo(valor, id, tipo));
            //  ListaTabla.push(new TablaSimbolos())   hace falta metere argumentos que son 5
        }
        else {
            PrintList_1.printlist.push("Error, La variable " + id + " ya existe en el entorno, linea " + linea + " y columna " + columna);
        }
    }
    getVar(id) {
        //verificar si el amiente no es nulo
        let env = this;
        // buscar la variable en el entorno actual
        while (env != null) {
            // verificar si la variable existe
            if (env.variables.has(id.toLowerCase())) {
                return env.variables.get(id.toLowerCase());
            }
            // buscar en el entorno anterior
            env = env.anterior;
        }
        return null;
    }
    //guardar nueva funcion
    guardarFuncion(id, funcion) {
        // verificar el ambito
        let env = this;
        // verificar si la funcion ya existe
        if (!env.funciones.has(id.toLowerCase())) {
            // guardar la variable
            // guardar la variable en una tabla de simbolos para el reporte
            env.funciones.set(id.toLowerCase(), funcion);
        }
        else {
            PrintList_1.printlist.push("Error, La funcion " + id + " ya existe en el entorno");
        }
    }
    //obtener funcion
    getFuncion(id) {
        // verificar el ambito
        let env = this;
        // buscar la variable
        while (env != null) {
            // verificar si la variable existe
            if (env.funciones.has(id.toLowerCase())) {
                // retornar la variable
                return env.funciones.get(id.toLowerCase());
            }
            // cambiar de ambito
            env = env.anterior;
        }
        // retornar null si no se encontro la variable
        return null;
    }
    // guardar metodo
    guardarMetodo(id, metodo) {
        // verificar el ambito
        let env = this;
        // verificar si la funcion ya existe
        if (!env.metodos.has(id.toLowerCase())) {
            // guardar la variable
            // guardar la variable en una tabla de simbolos para el reporte
            env.metodos.set(id.toLowerCase(), metodo);
        }
        else {
            PrintList_1.printlist.push("Error, La funcion " + id + " ya existe en el entorno");
        }
    }
    //obtener metodo
    getMetodo(id) {
        // verificar el ambito
        let env = this;
        // buscar la variable
        while (env != null) {
            // verificar si la variable existe
            if (env.metodos.has(id.toLowerCase())) {
                // retornar la variable
                return env.metodos.get(id.toLowerCase());
            }
            // cambiar de ambito
            env = env.anterior;
        }
        // retornar null si no se encontro la variable
        return null;
    }
    // obtener el entorno global
    getGlobal() {
        // verificar el ambito
        let env = this;
        // buscar la variable
        while (env.anterior != null) {
            // cambiar de ambito
            env = env.anterior;
        }
        // retornar el entorno global
        return env;
    }
}
exports.Environment = Environment;
//# sourceMappingURL=Environment.js.map