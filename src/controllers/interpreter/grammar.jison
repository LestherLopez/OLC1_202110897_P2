/* Definición Léxica */
%lex

%options case-insensitive
%x string

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
"="                 return 'IGUAL';
"$"                 return 'DOLAR';

//Incremento y decremento
"++"                return 'AUMENTO';
"--"                return 'REDUCCION';

//operadores relacionales 
"=="                return 'IGUALACION';
"!="                return 'DIFERENCIACION';
"<"                 return "MENORQUE";
">"                 return 'MAYORQUE';
"<="                return "MENOROIGUALQUE";
">="                return 'MAYOROIGUALQUE';

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
"return"             return 'RETURN';  
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
"toLower"           return 'TOLOWER';
"toUpper"           return 'TOUPPER';
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
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]  {}     // comentario multilinea

[a-zA-Z][a-zA-Z0-9_]*   return 'ID';
[0-9]+("."[0-9]+)\b     return 'DECIMAL';
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

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);}
/lex

%{
  // importar tipos
  const {Type} = require('./abstract/Return');
  const {Primitivo} = require('./expression/Primitivo');
  const {Print} = require('./instruction/Print');
  const {Todeclare} = require('./instruction/Todeclare');
  const {Access} = require('./expression/Access');
  const {Arithmetic} = require('./expression/Arithmetic');
  const {TipoAritmetica} = require('./utils/TipoAritmetica');
 // const {If} = require('./instruction/If');
 // const {While} = require('./instruction/While');
 // const {Function} = require('./instruction/Function');
 // const {ObtenerFunction} = require('./expression/ObtenerFunction');


%}


// PRECEDENCIA DE OPERADORES
%left 'MAS' 'MENOS'
%left 'POR' 'DIVISION' 'MODULO'
%right 'UMENOS' 

%left '++' '--'
%left 'POTENCIA'
%right 'NOT' 'PARIZQ'
%left 'OR'
%left 'AND'
%left 'DIFERENCIACION' 'IGUALACION' 
%left 'MENORQUE' 'MAYORQUE' 'MENOROIGUALQUE' 'MAYOROIGUALQUE' 



%start INICIO

%% /* Definición de la gramática */

INICIO
	: INSTRUCCIONES EOF {return $1;}
;

INSTRUCCIONES
	: INSTRUCCIONES INSTRUCCION     { $1.push($2); $$ = $1; }
	| INSTRUCCION                   { $$ = [$1]; }
;



BLOQUE_INSTRUCCIONES 
  : LLAVEIZQ INSTRUCCIONES LLAVEDER  { $$ = $2; }
  |  LLAVEIZQ LLAVEDER            { $$ = []; }
;

INSTRUCCION
	: DEFPRINT          { $$ = $1; }
  | DECLARAR          { $$ = $1; }
  | FUNCION           { $$ = $1; }
  | DIF                { $$ = $1; }
  | WHILE             { $$ = $1; }
  | LLAMAR_FUNCION    { $$ = $1; } //AQUI LLEVA PT COMA
	| error PTCOMA
  {   console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);}
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
// GRAMNATICA PARA DECLARAR FUINCIONES
FUNCION 
   : TIPO ID PARIZQ LISTA_PARAMETROS PARDER BLOQUE_INSTRUCCIONES// { $$ = new Function($1, $2, $4, $6, @2.first_line, @2.first_column); }
   | TIPO ID PARIZQ PARDER BLOQUE_INSTRUCCIONES// { $$ = new Function($1, $2, [], $5, @2.first_line, @2.first_column); }
   | VOID ID PARIZQ LISTA_PARAMETROS PARDER BLOQUE_INSTRUCCIONES //{ $$ = new Function(new Tipo(TipoPrimitivo.Void), $2, $4, $6, @2.first_line, @2.first_column); }
   | VOID ID PARIZQ PARDER BLOQUE_INSTRUCCIONES //{    $$ = new Function(new Tipo(TipoPrimitivo.Void), $2, [], $5, @2.first_line, @2.first_column); }
;
//BLOQUE EDE IF, ELSE IF Y ELSE
DIF 
  : IF PARIZQ EXPRESION PARDER BLOQUE_INSTRUCCIONES //{ $$ = new If($3, $5, [], @1.first_line, @1.first_column); }
  | IF PARIZQ EXPRESION PARDER BLOQUE_INSTRUCCIONES DELSE //{  $$ = new If($3, $5, $6, @1.first_line, @1.first_column); }
;

DELSE 
  : ELSE DIF { $$ = [$2]; }
  | ELSE BLOQUE_INSTRUCCIONES { $$ = $2; }
;
//GRAMATICA PARA DECLARAR WHILE
DWHILE 
  : WHILE PARIZQ EXPRESION PARDER BLOQUE_INSTRUCCIONES// {  $$ = new While($3, $5, @1.first_line, @1.first_column ); }
;

//GRAMATICA PARA LLAMAR A UNA FUNCION
LLAMAR_FUNCION 
  : ID PARIZQ LISTA_EXPRESIONES PARDER //{ $$ = new ObtenerFunction($1, $3, @1.first_line, @1.first_column); }
;
LISTA_EXPRESIONES
  : LISTA_EXPRESIONES COMA EXPRESION { $1.push($3); $$ = $1; }
  | EXPRESION { $$ = [$1] }
;


EXPRESION
  : PRIMITIVO                           { $$ = $1; }
  | EXPRESION MAS EXPRESION             { $$ = new Arithmetic($1,$3,TipoAritmetica.SUMA,@1.first_line, @1.first_column); }
  | EXPRESION MENOS EXPRESION           { $$ = new Arithmetic($1,$3,TipoAritmetica.RESTA,@1.first_line, @1.first_column); }
  | EXPRESION DIVISION EXPRESION
  | EXPRESION POR EXPRESION
  | MENOS EXPRESION %prec UMENOS        { $$ = new Aritmetica($2,$2,TipoAritmetica.UMENOS,@1.first_line, @1.first_column); }  
  | ID                                  { $$ = new Access($1,@1.first_line, @1.first_column); }
  | LLAMAR_FUNCION                      { $$ = $1; }
  | PARIZQ EXPRESION PARDER             { $$ = $2;}
  | EXPRESION AND EXPRESION
  | EXPRESION OR EXPRESION
  | EXPRESION IGUALACION EXPRESION
  | EXPRESION DIFERENCIACION EXPRESION
  | EXPRESION MENORQUE EXPRESION
  | EXPRESION MENOROIGUALQUE EXPRESION
  | EXPRESION MAYORQUE EXPRESION
  | EXPRESION MAYOROIGUALQUE EXPRESION

;


PRIMITIVO
  : ENTERO          { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.INT); }
  | DECIMAL         { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.DOUBLE); }
  | CADENA          { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.STRING);}
  | CARACTER        { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.CHAR); }
  | TRUE            { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.BOOLEAN); }
  | FALSE           { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.BOOLEAN); }
;


// GRAMATICA TIPO
TIPO
  : RENTERO         { $$ = Type.INT; }
  | RDOUBLE         { $$ = Type.DOUBLE; }
  | RSTRING         { $$ = Type.STRING; }
  | RCHAR           { $$ = Type.CHAR; }
  | RBOOLEAN        { $$ = Type.BOOLEAN; }
;
