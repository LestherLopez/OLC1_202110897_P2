// importar librerias
import { Request, Response } from "express";
import { printlist } from "./interpreter/Reports/PrintList";
import { Environment } from "./interpreter/abstract/Environment";
import { ListaTabla, TablaSimbolos } from "./interpreter/Reports/TablaSimbolos";
import { ListaTablaErrores } from "./interpreter/Reports/TablaErrores";
// creando una clase controlador

class InterpreteController {

  // metodo ping
  public pong(req: Request, res: Response) {
    res.send("Pong interpreter controller OLC1");
  }

  // metodo para interpretar el codigo fuente
  public interpretar(req: Request, res: Response) {
    // variable parser
    var parser = require("./interpreter/grammar");

    // variable codigo fuente
    const text = req.body.code;
    console.log("Codigo de entrada:  " + text);

    try {
      // parsear el codigo fuente
      const ast = parser.parse(text); //ast es el arbol de sintaxis abstracta
      try {
        printlist.splice(0, printlist.length);
        ListaTabla.splice(0, ListaTabla.length);
        ListaTablaErrores.splice(0, ListaTablaErrores.length);
        //crear entorno que almacena variables
        const globalEnv = new Environment(null, "global");
        //recorrer y ejecutar instrucciones del entorno
        for (const inst of ast){
            inst.execute(globalEnv);
        }
        //codigo para enviar ast
        let astcode = `digraph G{
          nodoPrincipal[label="AST"];\n
          `;
        for (const inst of ast){
            const dast = inst.AST();
            astcode += `${dast.rama}\n`
            astcode += `nodoPrincipal -> ${dast.nodo};`
        }
        astcode += `\n}`;
        // codigo graphviz para tabla de simbolos
        let simboloscode = `digraph cola {\n
                  parent [shape=plaintext,\n
                  label=<\n
                  <table border='1' cellborder='1'>\n
                  <tr><td>Identificador</td><td>Tipo</td><td>Tipo</td><td>Entorno</td><td>Linea</td><td>Columna</td></tr>\n
          `;
          const idsAgregados = new Set();
          for(const filas of ListaTabla){
            if (!idsAgregados.has(filas.id)) {
            simboloscode+=`<tr><td>${filas.id}</td><td>${filas.tipo1}</td> <td>${filas.tipo2}</td><td>${filas.ambito}</td><td>${filas.linea}</td><td>${filas.columna}</td></tr>\n`
            idsAgregados.add(filas.id);
            }
          }
          simboloscode += ` </table>
                                >];
                      }`
          //console.log(simboloscode);
          idsAgregados.clear();  
          //codigo para tabla de errores
          let errorescode =  `digraph cola {\n
            parent [shape=plaintext,\n
            label=<\n
            <table border='1' cellborder='1'>\n
            <tr><td>#</td><td>Tipo de error</td><td>Descripción</td><td>Linea</td><td>Columna</td></tr>\n`;   
            for (let i = 0; i < ListaTablaErrores.length; i++) {

              errorescode+=`<tr><td>${(i+1).toString()}</td><td>${ListaTablaErrores[i].tipo_error}</td> <td>${ListaTablaErrores[i].descripcion}</td><td>${ListaTablaErrores[i].linea}</td><td>${ListaTablaErrores[i].columna}</td></tr>\n`
            } 
         
            errorescode += ` </table>
                                  >];
                        }`
            console.log(errorescode );
        res.json({ consola:printlist.join("\n"), errores: errorescode, ast: astcode, simbolos: simboloscode });

      } catch (error) {
        console.log(error);
        res.json({
          consola: error,
          errores: error,
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        consola: err,
        errores: err,
      });
    }
  }
}

export const interpreteController = new InterpreteController();