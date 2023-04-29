"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
const TablaSimbolos_1 = require("../Reports/TablaSimbolos");
class Function extends Instruction_1.Instruction {
    constructor(tipo, id, parametros, statement, line, column) {
        super(line, column);
        this.tipo = tipo;
        this.id = id;
        this.parametros = parametros;
        this.statement = statement;
    }
    execute(env) {
        // guardar la funcion en entorno
        env.guardarFuncion(this.id, this);
        if (this.tipo == Return_1.Type.VOID) {
            TablaSimbolos_1.ListaTabla.push(new TablaSimbolos_1.TablaSimbolos(this.id.toString(), "Método", Return_1.Type[this.tipo], env.getName(), this.line.toString(), this.column.toString()));
        }
        else {
            TablaSimbolos_1.ListaTabla.push(new TablaSimbolos_1.TablaSimbolos(this.id.toString(), "Función", Return_1.Type[this.tipo], env.getName(), this.line.toString(), this.column.toString()));
        }
    }
    AST() {
        //crear nodo de funcion
        /*    const id = Math.floor(Math.random() * 100) + 1;
            const nodoPrincipal = `nodoFuncion${id.toString()}`;
            //nodo del id del de la funcion
            const nodoIdPrincipal = `nodoFuncionId${id.toString()}`;
            for (let i = 0; i < this.parametros.length; i++) {
                let codigoAST: {rama: string, nodo:string}=this.parametros[i].AST();
                let ramaFuncion = `${nodoPrincipal}[label="Declarar"];\n`;
                ramaFuncion += `${nodoIdPrincipal}[label="${this.id.toString()}"];\n`;
                // Haz algo con la expresión
              }*/
        return { rama: "", nodo: "" };
    }
}
exports.Function = Function;
//# sourceMappingURL=Function.js.map