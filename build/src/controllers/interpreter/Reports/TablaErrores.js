"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaTablaErroresLexicos = exports.ListaTablaErrores = exports.TablaErrores = void 0;
class TablaErrores {
    constructor(tipo_error, descripcion, linea, columna) {
        this.tipo_error = tipo_error;
        this.descripcion = descripcion;
        this.linea = linea;
        this.columna = columna;
    }
}
exports.TablaErrores = TablaErrores;
exports.ListaTablaErrores = [];
exports.ListaTablaErroresLexicos = [];
//# sourceMappingURL=TablaErrores.js.map