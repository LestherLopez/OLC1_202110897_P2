"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
const Instruction_1 = require("../abstract/Instruction");
const PrintList_1 = require("../Reports/PrintList");
class Print extends Instruction_1.Instruction {
    constructor(line, column, expression) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const value = this.expression.execute(env); // value and type
        PrintList_1.printlist.push(value.value);
        // printlist.push("\n");
        console.log("desde consola:", value.value);
    }
    AST() {
        //numero de id del nodo print
        const id = Math.floor(Math.random() * 100) + 1;
        //agregar el id a nodoprint
        const nombreNodo = 'nodoPrint' + id.toString();
        //agregar label a nodoPrint
        let ramaPrint = nombreNodo + `[label="Print"];\n`;
        //obtener nodo y rama de expresion
        const codeRama = this.expression.AST();
        //agregar a la rama de print las ramas de expresion
        ramaPrint += codeRama.rama;
        //agregar a la rama de print la conexion de print a expresion
        ramaPrint += nombreNodo + "->" + codeRama.nodo + `;\n`;
        return { rama: ramaPrint, nodo: nombreNodo };
    }
}
exports.Print = Print;
//# sourceMappingURL=Print.js.map