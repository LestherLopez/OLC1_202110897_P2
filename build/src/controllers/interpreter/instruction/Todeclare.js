"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todeclare = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
const TablaSimbolos_1 = require("../Reports/TablaSimbolos");
class Todeclare extends Instruction_1.Instruction {
    constructor(id, tipo, valor, line, column) {
        super(line, column);
        this.id = id;
        this.tipo = tipo;
        this.valor = valor; // primitivo, llamada(), operacion aritmetica
    }
    execute(env) {
        if (this.valor != null) {
            const val = this.valor.execute(env);
            env.guardar(this.id, val.value, this.tipo, this.line, this.column);
            TablaSimbolos_1.ListaTabla.push(new TablaSimbolos_1.TablaSimbolos(this.id.toString(), "variable", Return_1.Type[this.tipo], env.getName(), this.line.toString(), this.column.toString()));
        }
        else if (this.tipo == null) {
            const value = env.getVar(this.id);
            if (value) {
                value.valor = this.valor;
            }
            else {
            }
        }
        else {
            // guardar los valores por defecto segun el tipo (ver el enunciado)
            env.guardar(this.id, null, this.tipo, this.line, this.column);
            TablaSimbolos_1.ListaTabla.push(new TablaSimbolos_1.TablaSimbolos(this.id.toString(), "variable", Return_1.Type[this.tipo], env.getName(), this.line.toString(), this.column.toString()));
        }
    }
    AST() {
        //generar nodo de declarar 
        const id = Math.floor(Math.random() * 100) + 1;
        const nodoPrincipal = `nodoDeclarar${id.toString()}`;
        //nodo del id de variable
        const nodoIdPrincipal = `nodoId${id.toString()}`;
        //generar ast de la expresion
        if (this.valor != null) {
            //obtener el ast del valor
            const codigoAST = this.valor.AST();
            let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n`;
            //agregar el nodo del id
            ramaDeclarar += `${nodoIdPrincipal}[label="${this.id.toString()}"];\n`;
            ramaDeclarar += codigoAST.rama + "\n";
            //conectar nodo del id con el nodo principal
            ramaDeclarar += `${nodoPrincipal}->${nodoIdPrincipal};\n`;
            //declarar->var->valor
            ramaDeclarar += `${nodoIdPrincipal}->${codigoAST.nodo};\n`;
            return { rama: ramaDeclarar, nodo: nodoPrincipal };
        }
        else {
            let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n`;
            ramaDeclarar += `${nodoIdPrincipal}[label="${this.id.toString()}"];\n`;
            ramaDeclarar += `${nodoPrincipal}->${nodoIdPrincipal};\n`;
            return { rama: ramaDeclarar, nodo: nodoPrincipal };
        }
    }
}
exports.Todeclare = Todeclare;
//# sourceMappingURL=Todeclare.js.map