"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerMethod = void 0;
const Expression_1 = require("../abstract/Expression");
const Environment_1 = require("../abstract/Environment");
const Return_1 = require("../abstract/Return");
class ObtenerMethod extends Expression_1.Expression {
    constructor(id, argumentos, line, column) {
        super(line, column);
        this.id = id;
        this.argumentos = argumentos;
    }
    execute(env) {
        // ejecutar la metodo
        const metodo = env.getMetodo(this.id);
        if (metodo != null) {
            // crear un nuevo entorno
            const envFun = new Environment_1.Environment(env.getGlobal(), "null");
            //  guardar los parametros
            // verificar la cantidad de parametros
            if (metodo.parametros.length == this.argumentos.length) {
                // recorrer los parametros
                for (let i = 0; i < metodo.parametros.length; i++) {
                    // guardar el parametro
                    const valor = this.argumentos[i].execute(env);
                    const param = metodo.parametros[i].execute(env); // se tiene el nombre y el tipo del parametro guardado
                    // guardar el parametro
                    envFun.guardar(param.value, valor.value, Return_1.Type.NULL, this.line, this.column);
                }
                // ejecutar el cuerpo de la metodo
                metodo.statement.execute(envFun);
            }
            else {
                console.log("Error, El metodo " + this.id + " no tiene la cantidad de parametros correcta, linea " + this.line + " y columna " + this.column);
            }
        }
        else {
            console.log("Error, El metodo " + this.id + " no existe, linea " + this.line + " y columna " + this.column);
        }
    }
}
exports.ObtenerMethod = ObtenerMethod;
//# sourceMappingURL=ObtenerMethod.js.map