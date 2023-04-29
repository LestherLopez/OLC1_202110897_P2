import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import {Expression} from '../abstract/Expression';
import { Type } from "../abstract/Return";
import { TablaSimbolos, ListaTabla } from "../Reports/TablaSimbolos";

export class Todeclare extends Instruction {
  private id: string;
  private tipo: Type;
  private valor: Expression | null;

  constructor(id: string, tipo: Type, valor: Expression | null, line:number, column:number) {
    super(line, column);
    this.id = id;
    this.tipo = tipo;
    this.valor = valor; // primitivo, llamada(), operacion aritmetica
    
  }

  public execute(env: Environment): any {
    
    if (this.valor != null) {
      const val = this.valor.execute(env);
      env.guardar(this.id, val.value, this.tipo, this.line, this.column);
      ListaTabla.push(new TablaSimbolos(this.id.toString(), "variable",Type[this.tipo], env.getName(), this.line.toString(), this.column.toString()));
    }else if(this.tipo==null){ 
      const value = env.getVar(this.id);
      if(value ){
        value.valor = this.valor;
      }else{

      }
      
      
    }else {
      // guardar los valores por defecto segun el tipo (ver el enunciado)
      env.guardar(this.id, null, this.tipo, this.line, this.column);
      ListaTabla.push(new TablaSimbolos(this.id.toString(), "variable",Type[this.tipo], env.getName(), this.line.toString(), this.column.toString()));
    }
    
  }
  public AST(): {rama: string, nodo:string} {
    //generar nodo de declarar 
    const id = Math.floor(Math.random() * 100) + 1;
    const nodoPrincipal = `nodoDeclarar${id.toString()}`;
    //nodo del id de variable
    const nodoIdPrincipal = `nodoId${id.toString()}`;
    //generar ast de la expresion
    if (this.valor != null){
      //obtener el ast del valor
      const codigoAST: {rama: string, nodo:string}=this.valor.AST();
      let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n`;
      //agregar el nodo del id
      ramaDeclarar += `${nodoIdPrincipal}[label="${this.id.toString()}"];\n`;
      ramaDeclarar += codigoAST.rama+ "\n";
      //conectar nodo del id con el nodo principal
      ramaDeclarar += `${nodoPrincipal}->${nodoIdPrincipal};\n`
      //declarar->var->valor
      ramaDeclarar += `${nodoIdPrincipal}->${codigoAST.nodo};\n`
      return {rama: ramaDeclarar, nodo:nodoPrincipal}
    }else{
      let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n`
      ramaDeclarar += `${nodoIdPrincipal}[label="${this.id.toString()}"];\n`
      ramaDeclarar += `${nodoPrincipal}->${nodoIdPrincipal};\n`;
      return {rama: ramaDeclarar, nodo:nodoPrincipal}
    }


  
}

}