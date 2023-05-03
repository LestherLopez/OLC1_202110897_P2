export declare class TablaErrores {
    tipo_error: string;
    descripcion: string;
    linea: number;
    columna: number;
    constructor(tipo_error: string, descripcion: string, linea: number, columna: number);
}
export declare let ListaTablaErrores: Array<TablaErrores>;
export declare let ListaTablaErroresLexicos: Array<TablaErrores>;
