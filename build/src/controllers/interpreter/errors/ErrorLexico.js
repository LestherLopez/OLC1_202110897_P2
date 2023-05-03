"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLexico = void 0;
const Instruction_1 = require("../abstract/Instruction");
const TablaErrores_1 = require("../Reports/TablaErrores");
class ErrorLexico extends Instruction_1.Instruction {
    constructor(error, line, column) {
        super(line, column);
        this.error = error;
    }
    execute() {
        // guardar la funcion en entorno
        TablaErrores_1.ListaTablaErroresLexicos.push(new TablaErrores_1.TablaErrores("Léxico", "El caracter " + this.error + " no pertenece al lenguaje", this.line, this.column));
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
exports.ErrorLexico = ErrorLexico;
//# sourceMappingURL=ErrorLexico.js.map