import { Environment } from "../abstract/Environment";

import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Return, Type } from '../abstract/Return';

export class For extends Instruction{
    
    exp_inicial: Instruction;
    exp_condicional: Expression;
    exp_actualizacion: Expression;
    sentencias : Instruction;

    constructor(exp_inicial:Instruction , exp_condicional: Expression,exp_actualizacion:Expression, sentencias : Instruction, linea: number, columna: number){
        super(linea, columna);
        this.exp_inicial = exp_inicial;
        this.exp_condicional = exp_condicional;
        this.exp_actualizacion = exp_actualizacion;
        this.sentencias = sentencias;
    }

    public execute(env: Environment) {
        //inicializar
        this.exp_inicial.execute(env, "Condicion inicial bucle for");
        
        let exp_condicional = this.exp_condicional.execute(env);
       
        //creacion de entorno
        
        let environment_for =  new Environment(env, "for");
        while(exp_condicional.value){
           const elemento = this.sentencias.execute(environment_for, "for");  
           console.log(elemento)
           if(elemento!= null || elemento!= undefined){
                if(elemento.type==Type.RETURN){
             
                    return {value:elemento.value, type: Type.RETURN, tipo:elemento.tipo}
                }
           }  
            /*
            if(element.type == Type.RETURN){
                return element;
            }else if(element.type == Type.BREAK){
                break;
            }else if(element.type == Type.CONTINUE){
                this.exp_actualizacion.execute(environment_for);
                exp_condicional = this.exp_condicional.execute(environment_for);
                continue;
            }*/

            this.exp_actualizacion.execute(environment_for);
            exp_condicional = this.exp_condicional.execute(environment_for);
        }    

 
        }  
        public AST(): {rama: string, nodo:string}  {
            //nodoFor15[label="For"];
            const id = Math.floor(Math.random() * 300) + 1;
            const nombreNodo = 'nodoFor'+id.toString();
            let ramaFor = nombreNodo+`[label="For"];\n`
            //rama de declaracion
            const codeRama : {rama: string, nodo:string} = this.exp_inicial.AST();
            ramaFor += codeRama.rama;
            ramaFor += nombreNodo+"->"+codeRama.nodo+`;\n`
            //rama de condicional
            const codeRamaCon : {rama: string, nodo:string} = this.exp_condicional.AST();
            ramaFor += codeRamaCon.rama;
            ramaFor += nombreNodo+"->"+codeRamaCon.nodo+`;\n`
            //rama de expresion de actualizacion
            const codeRamaact : {rama: string, nodo:string} = this.exp_actualizacion.AST();
            ramaFor += codeRamaact.rama;
            ramaFor += nombreNodo+"->"+codeRamaact.nodo+`;\n`
            //rama sentencias de for
            const codeRamaIN : {rama: string, nodo:string} = this.sentencias.AST();
            ramaFor += codeRamaIN.rama;
            const subramas = codeRamaIN.nodo.split("nodo");
            for (let i = 1; i < subramas.length; i++) {
                ramaFor += nombreNodo+"->"+"nodo"+subramas[i]+`;\n`
            }
            return {rama: ramaFor, nodo:nombreNodo}
            return {rama: "", nodo:""}
        }
}