import { Simbolo } from "./Symbol";
import { Type } from "./Return";
import { printlist } from "../Reports/PrintList";
import { Function } from "../instruction/Function";
import { Method } from "../instruction/Method";
import { ListaTabla, TablaSimbolos } from "../Reports/TablaSimbolos";
export class Environment {
    private variables = new Map<string, Simbolo>();   //  mapa de variables
    private funciones = new Map<string, Function>();
    private metodos = new Map<string, Method>();
    private nameenv: string;  
    
    // constructor
    constructor(private anterior: Environment | null, nameenv: string) {
      this.variables = new Map<string, Simbolo>();
      this.nameenv = nameenv;
    }
  
    // guardar una nueva variable
    public guardar(id: string, valor: any , tipo: Type,linea:number,columna:number)  {
      // verificar el ambito
      let env: Environment | null = this;
  
      // verificar si la variable ya existe
      if (!env.variables.has(id.toLowerCase())) {
     
        // guardar la variable
        // guardar la variable en una tabla de simbolos para el reporte
        env.variables.set(id.toLowerCase(), new Simbolo(valor, id, tipo));
    //  ListaTabla.push(new TablaSimbolos())   hace falta metere argumentos que son 5
      }else {
        printlist.push("Error, La variable "+id+" ya existe en el entorno, linea "+linea+" y columna "+columna);
      }
  
    }
public getName(): string{
  return this.nameenv;
}
public getVar(id: string): Simbolo | null {
  //verificar si el amiente no es nulo
  let env: Environment | null = this;
  // buscar la variable en el entorno actual
  while (env != null) {
    // verificar si la variable existe
   if(env.variables.has(id.toLowerCase())){
    return env.variables.get(id.toLowerCase())!;
   }
    // buscar en el entorno anterior
    env = env.anterior;
  }  
  return null;  
}
  //guardar nueva funcion
  public guardarFuncion(id: string, funcion: Function) {
    // verificar el ambito
    let env: Environment | null = this;

    // verificar si la funcion ya existe
    if (!env.funciones.has(id.toLowerCase())) {
      // guardar la variable
      // guardar la variable en una tabla de simbolos para el reporte
      env.funciones.set(id.toLowerCase(),funcion);
    }else {
      printlist.push("Error, La funcion "+id+" ya existe en el entorno");
    }
  }
  //obtener funcion
  public getFuncion(id: string): Function | null {
    // verificar el ambito
    let env: Environment | null = this;

    // buscar la variable
    while (env != null) {
      // verificar si la variable existe
      if (env.funciones.has(id.toLowerCase())) {
        // retornar la variable
        return env.funciones.get(id.toLowerCase())!;
      }
      // cambiar de ambito
      env = env.anterior;
    }

    // retornar null si no se encontro la variable
    return null;
  }
  // guardar metodo
  public guardarMetodo(id: string, metodo: Method){
    // verificar el ambito
    let env: Environment | null = this;

    // verificar si la funcion ya existe
    if (!env.metodos.has(id.toLowerCase())) {
      // guardar la variable
      // guardar la variable en una tabla de simbolos para el reporte
      env.metodos.set(id.toLowerCase(),metodo);
    }else {
      printlist.push("Error, La funcion "+id+" ya existe en el entorno");
    }
  }
  //obtener metodo
  public getMetodo(id: string): Method | null {
    // verificar el ambito
    let env: Environment | null = this;

    // buscar la variable
    while (env != null) {
      // verificar si la variable existe
      if (env.metodos.has(id.toLowerCase())) {
        // retornar la variable
        return env.metodos.get(id.toLowerCase())!;
      }
      // cambiar de ambito
      env = env.anterior;
    }

    // retornar null si no se encontro la variable
    return null;
  }



  // obtener el entorno global
  public getGlobal(): Environment {
    // verificar el ambito
    let env: Environment | null = this;

    // buscar la variable
    while (env.anterior != null) {
      // cambiar de ambito
      env = env.anterior;
    }
    // retornar el entorno global
    return env;
  }




}
    
  
  