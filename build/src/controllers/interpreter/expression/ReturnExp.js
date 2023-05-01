"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnExp = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
// return 5;
class ReturnExp extends Expression_1.Expression {
    constructor(value, line, column) {
        super(line, column);
        this.value = value;
    }
    execute(env) {
        if (this.value != null && this.value != undefined) {
            const value = this.value.execute(env);
            console.log(value);
            return { value: value.value, type: Return_1.Type.RETURN };
        }
        return { value: null, type: Return_1.Type.RETURN };
    }
    AST() {
        return { rama: "", nodo: "" };
    }
}
exports.ReturnExp = ReturnExp;
//# sourceMappingURL=ReturnExp.js.map