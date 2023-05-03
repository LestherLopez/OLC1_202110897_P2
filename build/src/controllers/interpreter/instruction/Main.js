"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Instruction_1 = require("../abstract/Instruction");
class Main extends Instruction_1.Instruction {
    constructor(funcion, line, column) {
        super(line, column);
        this.funcion = funcion;
    }
    execute(env) {
        this.funcion.execute(env.getGlobal());
    }
    AST() {
        //numero de id del nodo main
        const id = Math.floor(Math.random() * 300) + 1;
        //agregar el id a nodoMain
        const nombreNodo = 'nodoMain' + id.toString();
        //agregar label a nodoMain
        let ramamain = nombreNodo + `[label="main"];\n`;
        //obtener nodo y rama de expresion
        const codeRama = this.funcion.AST();
        //agregar a la rama de main las ramas de expresion
        ramamain += codeRama.rama;
        //agregar a la rama de main la conexion de main a expresion
        ramamain += nombreNodo + "->" + codeRama.nodo + `;\n`;
        return { rama: ramamain, nodo: nombreNodo };
        return { rama: "", nodo: "" };
    }
}
exports.Main = Main;
//# sourceMappingURL=Main.js.map