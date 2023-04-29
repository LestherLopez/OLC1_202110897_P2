"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Access = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Access extends Expression_1.Expression {
    constructor(id, line, column) {
        super(line, column);
        this.id = id;
    }
    execute(env) {
        const value = env.getVar(this.id);
        if (value) {
            return { value: value.valor, type: value.type };
        }
        else {
            return { value: null, type: Return_1.Type.NULL };
        }
    }
    AST() {
        return { rama: "", nodo: "" };
    }
}
exports.Access = Access;
//# sourceMappingURL=Access.js.map