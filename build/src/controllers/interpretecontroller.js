"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpreteController = void 0;
const PrintList_1 = require("./interpreter/Reports/PrintList");
const Environment_1 = require("./interpreter/abstract/Environment");
const TablaSimbolos_1 = require("./interpreter/Reports/TablaSimbolos");
const TablaErrores_1 = require("./interpreter/Reports/TablaErrores");
// creando una clase controlador
class InterpreteController {
    // metodo ping
    pong(req, res) {
        res.send("Pong interpreter controller OLC1");
    }
    // metodo para interpretar el codigo fuente
    interpretar(req, res) {
        // variable parser
        var parser = require("./interpreter/grammar");
        // variable codigo fuente
        const text = req.body.code;
        console.log("Codigo de entrada:  " + text);
        try {
            // parsear el codigo fuente
            const ast = parser.parse(text); //ast es el arbol de sintaxis abstracta
            try {
                PrintList_1.printlist.splice(0, PrintList_1.printlist.length);
                TablaSimbolos_1.ListaTabla.splice(0, TablaSimbolos_1.ListaTabla.length);
                TablaErrores_1.ListaTablaErrores.splice(0, TablaErrores_1.ListaTablaErrores.length);
                //crear entorno que almacena variables
                const globalEnv = new Environment_1.Environment(null, "global");
                //recorrer y ejecutar instrucciones del entorno
                for (const inst of ast) {
                    inst.execute(globalEnv);
                }
                //codigo para enviar ast
                let astcode = `digraph G{
          nodoPrincipal[label="AST"];\n
          `;
                for (const inst of ast) {
                    const dast = inst.AST();
                    astcode += `${dast.rama}\n`;
                    astcode += `nodoPrincipal -> ${dast.nodo};`;
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
                for (const filas of TablaSimbolos_1.ListaTabla) {
                    if (!idsAgregados.has(filas.id)) {
                        simboloscode += `<tr><td>${filas.id}</td><td>${filas.tipo1}</td> <td>${filas.tipo2}</td><td>${filas.ambito}</td><td>${filas.linea}</td><td>${filas.columna}</td></tr>\n`;
                        idsAgregados.add(filas.id);
                    }
                }
                simboloscode += ` </table>
                                >];
                      }`;
                //console.log(simboloscode);
                idsAgregados.clear();
                //codigo para tabla de errores
                let errorescode = `digraph cola {\n
            parent [shape=plaintext,\n
            label=<\n
            <table border='1' cellborder='1'>\n
            <tr><td>#</td><td>Tipo de error</td><td>Descripción</td><td>Linea</td><td>Columna</td></tr>\n`;
                let contador = 1;
                for (const filase of TablaErrores_1.ListaTablaErrores) {
                    errorescode += `<tr><td>${contador}</td><td>${filase.tipo_error}</td> <td>${filase.descripcion}</td><td>${filase.linea}</td><td>${filase.columna}</td></tr>\n`;
                    contador++;
                }
                /*  for (let i = 0; i < ListaTablaErrores.length; i++) {
                  console.log("a");
                  errorescode+=`<tr><td>${(i+1).toString()}</td><td>${ListaTablaErrores[i].tipo_error}</td> <td>${ListaTablaErrores[i].descripcion}</td><td>${ListaTablaErrores[i].linea}</td><td>${ListaTablaErrores[i].columna}</td></tr>\n`
                } */
                for (const filase of TablaErrores_1.ListaTablaErroresLexicos) {
                    errorescode += `<tr><td>${contador}</td><td>${filase.tipo_error}</td> <td>${filase.descripcion}</td><td>${filase.linea}</td><td>${filase.columna}</td></tr>\n`;
                    contador++;
                }
                contador = 1;
                errorescode += ` </table>
                                  >];
                        }`;
                //  console.log(errorescode );
                //   console.log(astcode)
                TablaErrores_1.ListaTablaErroresLexicos.splice(0, TablaErrores_1.ListaTablaErroresLexicos.length);
                res.json({ consola: PrintList_1.printlist.join("\n"), errores: errorescode, ast: astcode, simbolos: simboloscode });
            }
            catch (error) {
                console.log(error);
                res.json({
                    consola: error,
                    errores: error,
                });
            }
        }
        catch (err) {
            console.log(err);
            res.json({
                consola: err,
                errores: err,
            });
        }
    }
}
exports.interpreteController = new InterpreteController();
//# sourceMappingURL=interpretecontroller.js.map