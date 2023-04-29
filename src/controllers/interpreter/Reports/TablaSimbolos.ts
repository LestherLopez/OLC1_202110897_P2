export class TablaSimbolos {

    constructor(public id:string, public tipo1: string, public tipo2: string,public ambito:string, public linea: string, public columna: string) {  
    }
}

export let ListaTabla:Array<TablaSimbolos> =[];