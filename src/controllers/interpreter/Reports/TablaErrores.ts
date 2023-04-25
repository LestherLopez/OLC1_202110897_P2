export class TablaErrores {

    constructor(public tipo_error:string, public descripcion: string,  public linea: number, public columna: number) {  
    }
}

export let ListaTablaErrores:Array<TablaErrores> =[];