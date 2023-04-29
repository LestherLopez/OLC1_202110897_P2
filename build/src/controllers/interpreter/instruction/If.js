"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
const Environment_1 = require("../abstract/Environment");
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
class If extends Instruction_1.Instruction {
    constructor(exp_condicion, sentencias, sentencias_else, line, column) {
        super(line, column);
        this.exp_condicion = exp_condicion;
        this.sentencias = sentencias;
        this.sentencias_else = sentencias_else;
    }
    execute(env) {
        let condicion = this.exp_condicion.execute(env);
        if (condicion.type != Return_1.Type.BOOLEAN) {
            return null;
        }
        if (condicion.value) {
            let new_environment = new Environment_1.Environment(env, "null");
            this.sentencias.execute(new_environment, "if");
        }
        else {
            let else_environment = new Environment_1.Environment(env, "null");
            this.sentencias_else.execute(else_environment, "else");
        }
    }
    AST() {
        return { rama: "", nodo: "" };
    }
}
exports.If = If;
/*
export class If extends Instruccion {
    
    exp_condicion   : Expresion;
    sentencias      : Nodo[];
    sentencias_else : Nodo[];

    constructor(exp_condicion :Expresion, sentencias :Nodo[], sentencias_else :Nodo[], linea :number, columna :number) {
        super(linea, columna);
        this.exp_condicion = exp_condicion;
        this.sentencias = sentencias;
        this.sentencias_else = sentencias_else;
    }
    
    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
        // Condicion
        let condicion = this.exp_condicion.getValor(actual, global, ast);

        // Verificar tipo booleano
        if(this.exp_condicion.tipo.getPrimitivo() != TipoPrimitivo.Boolean) {
            // * ERROR *
            return
        }

        if ( condicion ){
            // Crear ambito nuevo
            let ambito_if = new Ambito(actual);

            for(let sentencia of this.sentencias){
                if(sentencia instanceof Instruccion) sentencia.ejecutar(ambito_if, global, ast);
                if(sentencia instanceof Expresion) sentencia.getValor(ambito_if, global, ast);
            }
        }else {
            let ambito_else = new Ambito(actual);
            for(let sentencia of this.sentencias_else){
                if(sentencia instanceof Instruccion) sentencia.ejecutar(ambito_else, global, ast);
                if(sentencia instanceof Expresion) sentencia.getValor(ambito_else, global, ast);
            }
        }
    }

}*/ 
//# sourceMappingURL=If.js.map