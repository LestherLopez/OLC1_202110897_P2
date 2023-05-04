%{
  // importar tipos
  const {Type} = require('./abstract/Return');
  const {Primitivo} = require('./expression/Primitivo');
  const {Print} = require('./instruction/Print');
  const {Todeclare} = require('./instruction/Todeclare');
  const {Access} = require('./expression/Access');
  const {Arithmetic} = require('./expression/Arithmetic');
  const {TipoAritmetica} = require('./utils/TipoAritmetica');
  const {Logic} = require('./expression/Logic');
  const {TipoLogica} = require('./utils/TipoLogica');
  const {Relational} = require('./expression/Relational');
  const {TipoRelacional} = require('./utils/TipoRelacional');
  const {Statement} = require('./instruction/Statement');
  const {Function} = require('./instruction/Function');
  const {Parameters} = require('./expression/Parameters');
  const {ObtenerFunction} = require('./expression/ObtenerFunction');
  const {Assignation} = require('./instruction/Assignation');
  const {TablaErrores, ListaTablaErrores} = require('./reports/TablaErrores');
  const {If} = require('./instruction/If');
  const {While} = require('./instruction/While');
  const {IncreaseDecrease} = require('./expression/IncreaseDecrease');
  const {Main} = require('./instruction/Main');
  const {toLower} = require('./expression/toLower');
  const {toUpper} = require('./expression/toUpper');
  const {Length} = require('./expression/Length');
  const {Truncate} = require('./expression/Truncate');
  const {Round} = require('./expression/Round');
  const {Typeof} = require('./expression/Typeof');
  const {toString} = require('./expression/toString');
    const {For} = require('./instruction/For');
    const {DoWhile} = require('./instruction/DoWhile');
    const {ReturnExp} = require('./expression/ReturnExp');
    const {ErrorSintactico} = require('./errors/ErrorSintactico');
    const {ErrorLexico} = require('./errors/ErrorLexico');
%}

/* Definición Léxica */
%lex

%options case-insensitive
%x string

int                         (?:[0-9]|[1-9][0-9]+)

frac                        (?:\.[0-9]+)


%%


// simbolos reservados
";"                 return 'PTCOMA';
"("                 return 'PARIZQ';
")"                 return 'PARDER';
"."                 return 'PUNTO';
":"                 return 'DOSPUNTOS';
","                 return 'COMA';
"["                 return 'CORIZR';
"]"                 return 'CORDER';
"{"                 return 'LLAVEIZQ';
"}"                 return "LLAVEDER";
"?"                 return 'KLEENE';
"<="                return "MENOROIGUALQUE";
">="                return 'MAYOROIGUALQUE';
"=="                return "IGUALACION";
"="                 return 'IGUAL';
"$"                 return 'DOLAR';

//Incremento y decremento
"++"                return 'AUMENTO';
"--"                return 'REDUCCION';

//operadores relacionales 

"!="                return 'DIFERENCIACION';
"<"                 return "MENORQUE";
">"                 return 'MAYORQUE';


//operadores logicos
"!"                 return 'NOT';
"&&"                return 'AND';
"||"                return 'OR';




// palabras reservadas
"print"          return 'RPRIN';   // funcion de imprimir
"true"              return 'TRUE';
"false"             return 'FALSE';
"if"              return 'IF';
"while"              return 'WHILE';    
"else"               return 'ELSE';     
"void"              return 'VOID';     
"toLower"           return 'TOLOWER';
"toUpper"           return 'TOUPPER';
"return"             return 'RRETURN';  
"new"               return 'NEW';
"list"              return 'LIST';
"add"               return 'ADD';
"switch"            return 'SWITCH';
"case"              return 'CASE';
"default"           return 'DEFAULT';
"for"               return 'FOR';
"do"                return 'DO';
"break"             return 'BREAK';
"continue"          return 'CONTINUE';

"Length"            return 'LENGTH';
"truncate"          return 'TRUNCATE';
"round"             return 'ROUND';
"typeof"            return 'TYPEOF';
"toString"          return 'TOSTRING';
"toCharArray"       return 'TOCHARARRAY';
"main"              return 'MAIN';





// aritmeticos
"+"                 return 'MAS';
"-"                 return 'MENOS';
"*"                 return 'POR';
"/"                 return 'DIVISION';
"^"                 return 'POTENCIA';
"%"                 return 'MODULO';




// tipos de variables 
"int"               return 'RENTERO';
"string"               return 'RSTRING';
"char"               return 'RCHAR';
"boolean"               return 'RBOOLEAN';
"double"               return 'RDOUBLE';




/* Espacios en blanco */
[ \r\t]+            {}                      // espacio en blanco
\n                  {}                      // salto
(\/\/).*                             {}     // comentario linea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]  {}
[a-zA-Z][a-zA-Z0-9_ñÑ]*   return 'ID';
{int}{frac}\b     return 'DECIMAL';
[0-9]+\b                return 'ENTERO';
\'((\\\')|[^\n\'])*\'	{ yytext = yytext.substr(1,yyleng-2); return 'CARACTER'; }
["]                             {cadena="";this.begin("string");}
<string>[^"\\]+                 {cadena+=yytext;}
<string>"\\\""                  {cadena+="\"";}
<string>"\\n"                   {cadena+="\n";}
<string>"\\t"                   {cadena+="\t";}
<string>"\\\\"                  {cadena+="\\";}
<string>"\\\'"                  {cadena+="\'";}
<string>["]                     {yytext=cadena; this.popState(); return 'CADENA';}

//\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); 	return 'CADENA'; }


<<EOF>>                 return 'EOF';

.                       { 
 $$ = new ErrorLexico(yytext,  yylloc.first_line, yylloc.first_column ); 
 $$.execute();
   /*
  ListaTablaErrores.push(new TablaErrores("Léxico", "El caracter "+yytext+" no pertenece al lenguaje",  yylloc.first_line, yylloc.first_column));
  console.log(new TablaErrores("Léxico", "El caracter "+yytext+" no pertenece al lenguaje",  yylloc.first_line, yylloc.first_column ))*/
  console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex






// PRECEDENCIA DE OPERADORES
%left 'AUMENTO' 'REDUCCION'//8
%left 'POTENCIA'//1
%left 'OR'//7
%left 'AND'//6
%left  'DIFERENCIACION' 'MENORQUE' 'MAYORQUE' 'MENOROIGUALQUE' 'MAYOROIGUALQUE' 'IGUALACION' //4

%left 'MAS' 'MENOS' //3
%left 'POR' 'DIVISION' 'MODULO' //2
%right 'UMENOS'  //0
%right 'NOT'//5 .





%start INICIO

%% /* Definición de la gramática */

INICIO
	: INSTRUCCIONES EOF {return $1;}
;

INSTRUCCIONES
	: INSTRUCCIONES INSTRUCCION     { $1.push($2); $$ = $1; }
	| INSTRUCCION                   { $$ = [$1]; }
;

TIPO
  : RDOUBLE         { $$ = Type.DOUBLE; } 
  | RENTERO         { $$ = Type.INT; }
  | RCHAR           { $$ = Type.CHAR; } 
  | RSTRING         { $$ = Type.STRING; }
  | RBOOLEAN        { $$ = Type.BOOLEAN; }
  | VOID             { $$ = Type.VOID; }
; 


BLOQUE_INSTRUCCIONES 
  : LLAVEIZQ INSTRUCCIONES LLAVEDER  { $$ = new Statement($2,@1.first_line, @1.first_column); }
  |  LLAVEIZQ LLAVEDER            { $$ = new Statement([],@1.first_line, @1.first_column); }
;

INSTRUCCION
	: DEFPRINT          { $$ = $1; }
  | DECLARAR          { $$ = $1; }
  | DIF                { $$ = $1; }
  | FUNCION           { $$ = $1; } 
  | DWHILE             { $$ = $1; }         
  | LLAMAR_FUNCION  PTCOMA  { $$ = $1; }
  | DFOR                    { $$ = $1; }
  | DOWHILE                { $$ = $1; }
  | SWITCHCASE            { $$ = $1; }
	| INCREMENTOYDECREMENTO PTCOMA { $$ = $1; }
  | DTOLOWER  PTCOMA               { $$ = $1; }
  | DTOUPPER  PTCOMA               { $$ = $1; }
  | VECTOR  { $$ = $1; }
  | MODIFICARVECTOR { $$ = $1; }
  | DRETURN  { $$ = $1; }
  | CONTINUE PTCOMA { $$ = $1; }
  | BREAK PTCOMA{ $$ = $1; }
  | LISTA { $$ = $1; }
  | MAIN LLAMAR_FUNCION PTCOMA {$$= new Main($2, @1.first_line, @1.first_column);}
  | AGREGARVALORLISTA { $$ = $1; }
  | MODIFICARVALORLISTA { $$ = $1; }
  | ASIGNACION      { $$ = $1; } //asignar valor a una variable declarada
  | error  { $$= new ErrorSintactico(yytext, @1.first_line, @1.first_column);
     
    console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
;

// GRAMATICA IMPRIMIR 
DEFPRINT
    : RPRIN PARIZQ EXPRESION PARDER PTCOMA  { $$ = new Print(@1.first_line, @1.first_column,$3); }
;
// print(EXPRESION);


// GRAMATICA DECLARAR
//  int a = 5;
//  int a ;
DECLARAR
    : TIPO ID PTCOMA  { $$ = new Todeclare($2,$1,null,@1.first_line, @1.first_column ); }
    | TIPO ID IGUAL EXPRESION PTCOMA  { $$ = new Todeclare($2,$1,$4,@1.first_line, @1.first_column ); }
    
;
DRETURN
  : RRETURN  PTCOMA { $$ = new ReturnExp(null, @1.first_line, @1.first_column ); }
  | RRETURN EXPRESION PTCOMA { $$ = new ReturnExp($2, @1.first_line, @1.first_column );}
;
ASIGNACION
  :  ID IGUAL EXPRESION PTCOMA      { $$ = new Assignation($1,$3,@1.first_line, @1.first_column ); }
;
DIF 
  : IF PARIZQ EXPRESION PARDER BLOQUE_INSTRUCCIONES { $$ = new If($3, $5, null, @1.first_line, @1.first_column); }
  | IF PARIZQ EXPRESION PARDER BLOQUE_INSTRUCCIONES DELSE {  $$ = new If($3, $5, $6, @1.first_line, @1.first_column); }
;

DELSE 
  : ELSE DIF { $$ = $2; } 
  | ELSE BLOQUE_INSTRUCCIONES { $$ = $2; }
;
// GRAMNATICA PARA DECLARAR FUINCIONES
FUNCION 
   : TIPO ID PARIZQ LISTA_PARAMETROS PARDER BLOQUE_INSTRUCCIONES  { $$ = new Function($1,$2,$4,$6,@1.first_line, @1.first_column ); }
   | TIPO ID PARIZQ PARDER BLOQUE_INSTRUCCIONES                 { $$ = new Function($1,$2,[],$5,@1.first_line, @1.first_column ); }
  
;

LISTA_PARAMETROS
  : LISTA_PARAMETROS COMA PARAMETRO  { $1.push($3); $$ = $1; }
  | PARAMETRO                        { $$ = [$1]; }
;

PARAMETRO
  : TIPO ID {$$ = new Parameters($1,$2,@1.first_line, @1.first_column);}
;
//BLOQUE EDE IF, ELSE IF Y ELSE

//GRAMATICA PARA DECLARAR WHILE
DWHILE 
  : WHILE PARIZQ EXPRESION PARDER BLOQUE_INSTRUCCIONES {  $$ = new While($3, $5, @1.first_line, @1.first_column ); }
;

DFOR
  : FOR PARIZQ CONDICIONINICIALFOR EXPRESION PTCOMA EXPRESION PARDER BLOQUE_INSTRUCCIONES {  $$ = new For($3, $4,$6,$8, @1.first_line, @1.first_column ); }
;

CONDICIONINICIALFOR
  : ASIGNACION { $$ = $1; }
  | DECLARAR { $$ = $1; }
;
 DOWHILE
  : DO BLOQUE_INSTRUCCIONES WHILE PARIZQ EXPRESION PARDER PTCOMA {  $$ = new DoWhile($5, $2, @1.first_line, @1.first_column ); }
;

SWITCHCASE
  : SWITCH PARIZQ EXPRESION PARDER LLAVEIZQ LISTA_CASOS LLAVEDER //expresion, listacasos
;

LISTA_CASOS
	: CASE EXPRESION DOSPUNTOS BLOQUE_INSTRUCCIONES
	| LISTA_CASOS CASE EXPRESION DOSPUNTOS BLOQUE_INSTRUCCIONES
	| LISTA_CASOS DEFAULT DOSPUNTOS BLOQUE_INSTRUCCIONES

;
LISTA_EXPRESIONES
  : LISTA_EXPRESIONES COMA EXPRESION { $1.push($3); $$ = $1; }
  | EXPRESION { $$ = [$1] }
;


VECTOR
  : TIPO CORIZR CORDER ID IGUAL NEW TIPO CORIZR ENTERO CORDER PTCOMA 
  | TIPO CORIZR CORDER ID IGUAL LLAVEIZQ LISTA_EXPRESIONES LLAVEDER PTCOMA
;
MODIFICARVECTOR
  : ACCEDERVECTOR IGUAL EXPRESION PTCOMA
;


//DECLARAR LISTA
LISTA 
  : LIST MENORQUE TIPO MAYORQUE ID IGUAL NEW LIST MENORQUE TIPO MAYORQUE PTCOMA
;
AGREGARVALORLISTA
  : ACCEDERID PUNTO PARIZQ EXPRESION PARDER PTCOMA
;
MODIFICARVALORLISTA
  : ACCEDERLISTA IGUAL EXPRESION PTCOMA
;

EXPRESION
  : PRIMITIVO                           { $$ = $1; }
  | EXPRESION MAS EXPRESION             { $$ = new Arithmetic($1,$3,TipoAritmetica.SUMA,@1.first_line, @1.first_column); }
  | EXPRESION MENOS EXPRESION           { $$ = new Arithmetic($1,$3,TipoAritmetica.RESTA,@1.first_line, @1.first_column); }
  | EXPRESION DIVISION EXPRESION        { $$ = new Arithmetic($1,$3,TipoAritmetica.DIVISION,@1.first_line, @1.first_column); }  
  | EXPRESION POR EXPRESION             { $$ = new Arithmetic($1,$3,TipoAritmetica.MULTIPLICACION,@1.first_line, @1.first_column); }  
  | MENOS EXPRESION %prec UMENOS        { $$ = new Arithmetic($2,$2,TipoAritmetica.MENOSUNARIO,@1.first_line, @1.first_column); }  
  | EXPRESION POTENCIA EXPRESION        { $$ = new Arithmetic($1,$3,TipoAritmetica.POTENCIA,@1.first_line, @1.first_column); }  
  | EXPRESION MODULO EXPRESION          { $$ = new Arithmetic($1,$3,TipoAritmetica.MODULO,@1.first_line, @1.first_column); }  
  | ACCEDERID                            { $$ = $1; }
  | LLAMAR_FUNCION                      { $$ = $1; }
  | PARIZQ EXPRESION PARDER             { $$ = $2;}
  | EXPRESION AND EXPRESION             { $$ = new Logic($1,$3,TipoLogica.AND,@1.first_line, @1.first_column); }  
  | EXPRESION OR EXPRESION              { $$ = new Logic($1,$3,TipoLogica.OR,@1.first_line, @1.first_column); }  
  | NOT EXPRESION                       { $$ = new Logic($2,$2,TipoLogica.NOT,@1.first_line, @1.first_column); }  
  | EXPRESION IGUALACION EXPRESION      { $$ = new Relational($1,$3,TipoRelacional.IGUAL,@1.first_line, @1.first_column); } 
  | EXPRESION DIFERENCIACION EXPRESION  { $$ = new Relational($1,$3,TipoRelacional.DIFERENTE,@1.first_line, @1.first_column); } 
  | EXPRESION MENORQUE EXPRESION        { $$ = new Relational($1,$3,TipoRelacional.MENOR,@1.first_line, @1.first_column); } 
  | EXPRESION MENOROIGUALQUE EXPRESION  { $$ = new Relational($1,$3,TipoRelacional.MENORIGUAL,@1.first_line, @1.first_column); } 
  | EXPRESION MAYORQUE EXPRESION        { $$ = new Relational($1,$3,TipoRelacional.MAYOR,@1.first_line, @1.first_column); } 
  | EXPRESION MAYOROIGUALQUE EXPRESION  { $$ = new Relational($1,$3,TipoRelacional.MAYORIGUAL,@1.first_line, @1.first_column); } 
	| INCREMENTOYDECREMENTO             { $$ = $1; }
  | DTOLOWER                           { $$ = $1; }
  | DTOUPPER                           { $$ = $1; }
  | DLENGTH                              { $$ = $1; }
  | DTRUNCATE                            { $$ = $1; }
  | DROUND                             { $$ = $1; } 
  | DTYPEOF                              { $$ = $1; } 
  | DTOSTRING                            { $$ = $1; } 
  | ACCEDERVECTOR                      { $$ = $1; }
  | ACCEDERLISTA                      { $$ = $1; }
  | OPERADORTERNARIO                   { $$ = $1; }
    | DIF                { $$ = $1; }
    | DFOR                    { $$ = $1; }
  | DWHILE                { $$ = $1; }

  | WHILE                { $$ = $1; }
;   

//GRAMATICA PARA LLAMAR A UNA FUNCION
LLAMAR_FUNCION 
  : ID PARIZQ LISTA_EXPRESIONES PARDER { $$ = new ObtenerFunction($1,$3,@1.first_line, @1.first_column); }
  | ID PARIZQ PARDER { $$ = new ObtenerFunction($1,[],@1.first_line, @1.first_column); }

;
DTOLOWER
  : TOLOWER PARIZQ EXPRESION PARDER   { $$ = new toLower($3,@1.first_line, @1.first_column); }  
;
DTRUNCATE
  : TRUNCATE PARIZQ EXPRESION PARDER  { $$ = new Truncate($3,@1.first_line, @1.first_column); }
;
DLENGTH
  : LENGTH PARIZQ EXPRESION PARDER  { $$ = new Length($3,@1.first_line, @1.first_column); }  
;
DTOUPPER
  : TOUPPER PARIZQ EXPRESION PARDER   { $$ = new toUpper($3,@1.first_line, @1.first_column); }  
;

DROUND 
  : ROUND PARIZQ EXPRESION PARDER     { $$ = new Round($3,@1.first_line, @1.first_column); }  
;
DTYPEOF
  : TYPEOF PARIZQ EXPRESION PARDER     { $$ = new Typeof($3,@1.first_line, @1.first_column); }  
;

DTOSTRING
  : TOSTRING PARIZQ EXPRESION PARDER     { $$ = new toString($3,@1.first_line, @1.first_column); }  
;

ACCEDERLISTA
  : ACCEDERID CORIZR CORIZR EXPRESION CORDER CORDER 
;



ACCEDERVECTOR 
  : ACCEDERID LLAVEIZQ EXPRESION LLAVEDER
;


ACCEDERID 
  : ID       { $$ = new Access($1,@1.first_line, @1.first_column); }
;
//INCREMENTO Y DECREMENTO
INCREMENTOYDECREMENTO
  : ID AUMENTO  { $$ = new IncreaseDecrease($1,TipoAritmetica.INCREMENTO,@1.first_line, @1.first_column); }  
  | ID REDUCCION  { $$ = new IncreaseDecrease($1,TipoAritmetica.DECREMENTO,@1.first_line, @1.first_column); }  
;


PRIMITIVO
  : DECIMAL         { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.DOUBLE); }
  | ENTERO          { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.INT); }
  | CADENA          { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.STRING);}
  | CARACTER        { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.CHAR); }
  | TRUE            { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.BOOLEAN); }
  | FALSE           { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.BOOLEAN); }
;


// GRAMATICA TIPO


//ternarios
