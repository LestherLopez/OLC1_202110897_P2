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
}
exports.Main = Main;
//# sourceMappingURL=Main.js.map