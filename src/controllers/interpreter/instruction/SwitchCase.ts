/*import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Return, Type } from "../abstract/Return";

export class Switch extends Instruction{
    exp_condicion: Expression;
    cases : Array<Case>
    constructor( exp_condicion:Expression,   cases:Array<Case>,line:number, column:number)
    {
        super(line, column);
        this.exp_condicion = exp_condicion;
        this.cases =  cases;
    }
    public execute(env: Environment) {
      

        
        let condicion = this.exp_condicion.execute(env);
        for (let i = 0; i < this.cases.length; i++) {
            const caso = this.cases[i];
            const caseValue = caso.getExp().execute(env);
      
            if (value.type === caseValue.type && value.value === caseValue.value) {
              return caso.execute(env);
            }
          }
      
        if(condicion.value){
            let new_environment =  new Environment(env, "null");
            let elemento = this.sentencias.execute(new_environment, "if");
            if(elemento!=undefined){
                if(elemento.type==Type.RETURN){
             
                    return {value:elemento.value, type: Type.RETURN, tipo:elemento.tipo}
                }
              }
             
        }else{
            let else_environment = new Environment(env, "null");
            this.sentencias_else.execute(else_environment, "else");
        }
    }
    public AST(): {rama: string, nodo:string} {
        const id = Math.floor(Math.random() * 300) + 1;
        const nombreNodo = 'nodoIf'+id.toString();
        let ramaIf = nombreNodo+`[label="If"];\n`

        const codeRama : {rama: string, nodo:string} = this.exp_condicion.AST();
        ramaIf += codeRama.rama;
        ramaIf += nombreNodo+"->"+codeRama.nodo+`;\n`

        const codeRamaIN : {rama: string, nodo:string} = this.sentencias.AST();
            ramaIf += codeRamaIN.rama;
            const subramas = codeRamaIN.nodo.split("nodo");
            for (let i = 1; i < subramas.length; i++) {
                
                ramaIf += nombreNodo+"->"+"nodo"+subramas[i]+`;\n`
            }
        //bloque else if
        if(this.sentencias_else!=null || this.sentencias_else!=undefined){
            if(this.exp_condicion!=null || this.exp_condicion!=undefined){
                let idelseif = Math.floor(Math.random() * 300) + 1;
            let nombreNodoelse = 'nodoelseIf'+idelseif.toString();
            let ramaifelse = nombreNodoelse+`[label="Else"];\n`
            ramaIf += ramaifelse
            ramaIf += nombreNodo +"->" +nombreNodoelse+`;\n`
            //instrucciones else if
            const codeRamaIN : {rama: string, nodo:string} = this.sentencias_else.AST();
            ramaIf += codeRamaIN.rama;
            const subramas = codeRamaIN.nodo.split("nodo");
            for (let i = 1; i < subramas.length; i++) {
                
                ramaIf += nombreNodoelse+"->"+"nodo"+subramas[i]+`;\n`
            }





            }else{
            let idelseif = Math.floor(Math.random() * 300) + 1;
            let nombreNodoelse = 'nodoelseIf'+idelseif.toString();
            let ramaifelse = nombreNodoelse+`[label="Else"];\n`
            ramaIf += ramaifelse
            ramaIf += nombreNodo +"->" +nombreNodoelse+`;\n`
            }
        }
        




        return {rama: ramaIf, nodo:nombreNodo}
    }
}

export class Case extends Instruction{
    exp_condicion: Expression;
    cases : Array<Cases>
    constructor( exp_condicion:Expression,  public cases:Array<Cases>,line:number, column:number)
    {
        super(line, column);
        this.exp_condicion = exp_condicion;
        
    }
    public execute(env: Environment) {
      

        
        let condicion = this.exp_condicion.execute(env);
        if(condicion.type!= Type.BOOLEAN){
            return null;
        }
        if(condicion.value){
            let new_environment =  new Environment(env, "null");
            let elemento = this.sentencias.execute(new_environment, "if");
            if(elemento!=undefined){
                if(elemento.type==Type.RETURN){
             
                    return {value:elemento.value, type: Type.RETURN, tipo:elemento.tipo}
                }
              }
             
        }else{
            let else_environment = new Environment(env, "null");
            this.sentencias_else.execute(else_environment, "else");
        }
    }
    public AST(): {rama: string, nodo:string} {
        const id = Math.floor(Math.random() * 300) + 1;
        const nombreNodo = 'nodoIf'+id.toString();
        let ramaIf = nombreNodo+`[label="If"];\n`

        const codeRama : {rama: string, nodo:string} = this.exp_condicion.AST();
        ramaIf += codeRama.rama;
        ramaIf += nombreNodo+"->"+codeRama.nodo+`;\n`

        const codeRamaIN : {rama: string, nodo:string} = this.sentencias.AST();
            ramaIf += codeRamaIN.rama;
            const subramas = codeRamaIN.nodo.split("nodo");
            for (let i = 1; i < subramas.length; i++) {
                
                ramaIf += nombreNodo+"->"+"nodo"+subramas[i]+`;\n`
            }
        //bloque else if
        if(this.sentencias_else!=null || this.sentencias_else!=undefined){
            if(this.exp_condicion!=null || this.exp_condicion!=undefined){
                let idelseif = Math.floor(Math.random() * 300) + 1;
            let nombreNodoelse = 'nodoelseIf'+idelseif.toString();
            let ramaifelse = nombreNodoelse+`[label="Else"];\n`
            ramaIf += ramaifelse
            ramaIf += nombreNodo +"->" +nombreNodoelse+`;\n`
            //instrucciones else if
            const codeRamaIN : {rama: string, nodo:string} = this.sentencias_else.AST();
            ramaIf += codeRamaIN.rama;
            const subramas = codeRamaIN.nodo.split("nodo");
            for (let i = 1; i < subramas.length; i++) {
                
                ramaIf += nombreNodoelse+"->"+"nodo"+subramas[i]+`;\n`
            }





            }else{
            let idelseif = Math.floor(Math.random() * 300) + 1;
            let nombreNodoelse = 'nodoelseIf'+idelseif.toString();
            let ramaifelse = nombreNodoelse+`[label="Else"];\n`
            ramaIf += ramaifelse
            ramaIf += nombreNodo +"->" +nombreNodoelse+`;\n`
            }
        }
        




        return {rama: ramaIf, nodo:nombreNodo}
    }
}
*/