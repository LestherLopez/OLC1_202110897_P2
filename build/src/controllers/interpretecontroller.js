"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpreteController = void 0;
const PrintList_1 = require("./interpreter/Reports/PrintList");
const Environment_1 = require("./interpreter/abstract/Environment");
const TablaSimbolos_1 = require("./interpreter/Reports/TablaSimbolos");
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
                //crear entorno que almacena variables
                const globalEnv = new Environment_1.Environment(null, "global");
                //recorrer y ejecutar instrucciones del entorno
                for (const inst of ast) {
                    inst.execute(globalEnv);
                }
                //codigo para enviar st
                let astcode = `digraph G{
          nodoPrincipal[label="AST"];\n
          `;
                for (const inst of ast) {
                    const dast = inst.AST();
                    astcode += `${dast.rama}\n`;
                    astcode += `nodoPrincipal -> ${dast.nodo};`;
                }
                astcode += `\n}`;
                let simboloscode = `digraph cola {\n
                  parent [shape=plaintext,\n
                  label=<\n
                  <table border='1' cellborder='1'>\n
                  <tr><td>Identificador</td><td>Tipo</td><td>Tipo</td><td>Entorno</td><td>Linea</td><td>Columna</td></tr>\n
          `;
                for (const filas of TablaSimbolos_1.ListaTabla) {
                    simboloscode += `<tr><td>${filas.id}</td><td>${filas.tipo1}</td> <td>${filas.tipo2}</td><td>${filas.ambito}</td><td>${filas.linea}</td><td>${filas.columna}</td></tr>\n`;
                }
                simboloscode += ` </table>
                                >];
                      }`;
                console.log(simboloscode);
                res.json({ consola: PrintList_1.printlist.join("\n"), errores: "ninguno", ast: astcode });
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