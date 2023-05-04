import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import {Expression} from '../abstract/Expression';
import { Type } from "../abstract/Return";
import { TablaSimbolos, ListaTabla } from "../Reports/TablaSimbolos";
export class Function extends Instruction{
    constructor(public tipo:Type ,private id:string, public parametros:Array<Expression>, public statement:Instruction, line:number, column:number)
    {
        super(line, column);
    }

    public execute(env: Environment) {
        // guardar la funcion en entorno

        env.guardarFuncion(this.id,this);
        if(this.tipo==Type.VOID){
            ListaTabla.push(new TablaSimbolos(this.id.toString(), "Método",Type[this.tipo], env.getName(), this.line.toString(), this.column.toString()));
        }else{
            ListaTabla.push(new TablaSimbolos(this.id.toString(), "Función",Type[this.tipo], env.getName(), this.line.toString(), this.column.toString()));
        }
        
    }
    public AST(): {rama: string, nodo:string} {
       if(this.tipo==Type.VOID){
            const id = Math.floor(Math.random() * 300) + 1;
            const nombreNodo = 'nodoFuncion'+id.toString();
            let ramaFuncion = nombreNodo+`[label="Metodo"];\n`
            //nodo tipo de funcion
            const idRama = Math.floor(Math.random() * 100) + 1;
            const codeRamas = 'nodoTipoFuncion'+idRama.toString();
            let nodoVar = codeRamas+`[label="${Type[this.tipo]}"];\n`
            ramaFuncion += nodoVar;
            ramaFuncion += nombreNodo +"->"+codeRamas+";";
            //nodo id de la funcion
            const idvar = Math.floor(Math.random() * 100) + 1;
            const codevar = 'nodovarfuncion'+idvar.toString();
            let nodoVari = codevar+`[label="${this.id}"];\n`
            ramaFuncion += nodoVari;
            ramaFuncion += codeRamas +"->"+codevar+";";
            //nodo de "parametros"
            const idpar = Math.floor(Math.random() * 100) + 1;
            const codepar = 'nodoTipoFuncion'+idpar.toString();
            let nodpar = codepar+`[label="parametros"];\n`
            ramaFuncion += nodpar;
            ramaFuncion += nombreNodo +"->"+codepar+";";
            //nodos de los parametros
            for (let i = 0; i < this.parametros.length; i++) {
            const codeRamaIN : {rama: string, nodo:string} = this.parametros[i].AST();
                ramaFuncion+=codeRamaIN.rama
                ramaFuncion+=codepar+"->"+codeRamaIN.nodo+";"
            }
            //nodo de "instrucciones" 
            const idstatement = Math.floor(Math.random() * 100) + 1;
            const codestatement = 'nodoTipoFuncion'+idstatement.toString();
            let nodostatement = codestatement+`[label="Instrucciones"];\n`
            ramaFuncion += nodostatement;
            ramaFuncion += nombreNodo +"->"+codestatement+";";

            //nodos de instrucciones  de metodo
            const codeRamaSta : {rama: string, nodo:string} = this.statement.AST();
            ramaFuncion += codeRamaSta.rama;
            const subramas = codeRamaSta.nodo.split("nodo");
            for (let i = 1; i < subramas.length; i++) {
                
                ramaFuncion += codestatement+"->"+"nodo"+subramas[i]+`;\n`
            }

            return {rama: ramaFuncion, nodo:nombreNodo}
        }else{
            const id = Math.floor(Math.random() * 300) + 1;
            const nombreNodo = 'nodoFuncion'+id.toString();
            let ramaFuncion = nombreNodo+`[label="Funcion"];\n`

            const idRama = Math.floor(Math.random() * 100) + 1;
            const codeRamas = 'nodoTipoFuncion'+idRama.toString();
            let nodoVar = codeRamas+`[label="${Type[this.tipo]}"];\n`
            ramaFuncion += nodoVar;
            ramaFuncion += nombreNodo +"->"+codeRamas+";";
            

            const idvar = Math.floor(Math.random() * 100) + 1;
            const codevar = 'nodovarfuncion'+idvar.toString();
            let nodoVari = codevar+`[label="${this.id}"];\n`
            ramaFuncion += nodoVari;
            ramaFuncion += codeRamas +"->"+codevar+";";
            

            const idpar = Math.floor(Math.random() * 100) + 1;
            const codepar = 'nodoTipoFuncion'+idpar.toString();
            let nodpar = codepar+`[label="parametros"];\n`
            ramaFuncion += nodpar;
            ramaFuncion += nombreNodo +"->"+codepar+";";

            
            for (let i = 0; i < this.parametros.length; i++) {
            const codeRamaIN : {rama: string, nodo:string} = this.parametros[i].AST();
                ramaFuncion+=codeRamaIN.rama
                ramaFuncion+=codepar+"->"+codeRamaIN.nodo+";"
            }
            //statement de metodo
            const idstatement = Math.floor(Math.random() * 100) + 1;
            const codestatement = 'nodoTipoFuncion'+idstatement.toString();
            let nodostatement = codestatement+`[label="Instrucciones"];\n`
            ramaFuncion += nodostatement;
            ramaFuncion += nombreNodo +"->"+codestatement+";";



            const codeRamaSta : {rama: string, nodo:string} = this.statement.AST();
            ramaFuncion += codeRamaSta.rama;
            const subramas = codeRamaSta.nodo.split("nodo");
            for (let i = 1; i < subramas.length; i++) {
                
                ramaFuncion += codestatement+"->"+"nodo"+subramas[i]+`;\n`
            }


            return {rama: ramaFuncion, nodo:nombreNodo}
        }
      
        
    }

}