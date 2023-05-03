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
        if (this.tipo == Return_1.Type.VOID) {
            const id = Math.floor(Math.random() * 300) + 1;
            const nombreNodo = 'nodoFuncion' + id.toString();
            let ramaFuncion = nombreNodo + `[label="Metodo"];\n`;
            const idRama = Math.floor(Math.random() * 100) + 1;
            const codeRamas = 'nodoTipoFuncion' + idRama.toString();
            let nodoVar = codeRamas + `[label="${Return_1.Type[this.tipo]}"];\n`;
            ramaFuncion += nodoVar;
            ramaFuncion += nombreNodo + "->" + codeRamas + ";";
            const idvar = Math.floor(Math.random() * 100) + 1;
            const codevar = 'nodovarfuncion' + idvar.toString();
            let nodoVari = codevar + `[label="${this.id}"];\n`;
            ramaFuncion += nodoVari;
            ramaFuncion += codeRamas + "->" + codevar + ";";
            const idpar = Math.floor(Math.random() * 100) + 1;
            const codepar = 'nodoTipoFuncion' + idpar.toString();
            let nodpar = codepar + `[label="parametros"];\n`;
            ramaFuncion += nodpar;
            ramaFuncion += nombreNodo + "->" + codepar + ";";
            for (let i = 0; i < this.parametros.length; i++) {
                const codeRamaIN = this.parametros[i].AST();
                ramaFuncion += codeRamaIN.rama;
                ramaFuncion += codepar + "->" + codeRamaIN.nodo + ";";
            }
            //statement de metodo
            const idstatement = Math.floor(Math.random() * 100) + 1;
            const codestatement = 'nodoTipoFuncion' + idstatement.toString();
            let nodostatement = codestatement + `[label="Instrucciones"];\n`;
            ramaFuncion += nodostatement;
            ramaFuncion += nombreNodo + "->" + codestatement + ";";
            const codeRamaSta = this.statement.AST();
            ramaFuncion += codeRamaSta.rama;
            const subramas = codeRamaSta.nodo.split("nodo");
            for (let i = 1; i < subramas.length; i++) {
                ramaFuncion += codestatement + "->" + "nodo" + subramas[i] + `;\n`;
            }
            return { rama: ramaFuncion, nodo: nombreNodo };
        }
        else {
            const id = Math.floor(Math.random() * 300) + 1;
            const nombreNodo = 'nodoFuncion' + id.toString();
            let ramaFuncion = nombreNodo + `[label="Funcion"];\n`;
            const idRama = Math.floor(Math.random() * 100) + 1;
            const codeRamas = 'nodoTipoFuncion' + idRama.toString();
            let nodoVar = codeRamas + `[label="${Return_1.Type[this.tipo]}"];\n`;
            ramaFuncion += nodoVar;
            ramaFuncion += nombreNodo + "->" + codeRamas + ";";
            const idvar = Math.floor(Math.random() * 100) + 1;
            const codevar = 'nodovarfuncion' + idvar.toString();
            let nodoVari = codevar + `[label="${this.id}"];\n`;
            ramaFuncion += nodoVari;
            ramaFuncion += codeRamas + "->" + codevar + ";";
            const idpar = Math.floor(Math.random() * 100) + 1;
            const codepar = 'nodoTipoFuncion' + idpar.toString();
            let nodpar = codepar + `[label="parametros"];\n`;
            ramaFuncion += nodpar;
            ramaFuncion += nombreNodo + "->" + codepar + ";";
            for (let i = 0; i < this.parametros.length; i++) {
                const codeRamaIN = this.parametros[i].AST();
                ramaFuncion += codeRamaIN.rama;
                ramaFuncion += codepar + "->" + codeRamaIN.nodo + ";";
            }
            //statement de metodo
            const idstatement = Math.floor(Math.random() * 100) + 1;
            const codestatement = 'nodoTipoFuncion' + idstatement.toString();
            let nodostatement = codestatement + `[label="Instrucciones"];\n`;
            ramaFuncion += nodostatement;
            ramaFuncion += nombreNodo + "->" + codestatement + ";";
            const codeRamaSta = this.statement.AST();
            ramaFuncion += codeRamaSta.rama;
            const subramas = codeRamaSta.nodo.split("nodo");
            for (let i = 1; i < subramas.length; i++) {
                ramaFuncion += codestatement + "->" + "nodo" + subramas[i] + `;\n`;
            }
            return { rama: ramaFuncion, nodo: nombreNodo };
        }
    }
}
exports.Function = Function;
//# sourceMappingURL=Function.js.map