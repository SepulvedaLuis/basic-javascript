/* Las funciones son las tareas que va a llevar a cabo el navegador. Existen 2 tipos de funciones
1) Declarativas
2) De expresión
Ambas pueden llevar parámetros, que son los datos que necesitan para ejecutarse.
Cada parámetro va separado por una coma.
Cada instrucción que tenga la función debe terminar con ; .
Si queremos que una función nos dé un numero o dato tenemos que usar la siguiente sintaxis:

return El dato que queremos que nos dé; */

// Función Declarativa Sintaxis
//function Nombre de la función (Parámetros de la función) {Instrucciones}

function miFuncionD(){
    return 3;
}

miFuncionD();

// Función de Expresión Sintaxis
//var Nombre de la variable = function(Parametros){Instrucciones}.

var miFuncionE = function (a, b){
    return a + b;
}

miFuncionE(4,5);

/*Es importante tener presente que nuestras funciones pueden tener parametros
los cuales nos ayudaran en el desarrollo correcto de la funcion o sin parametros,
en los parametros se puede resivir cualquier tipo de valor. Siempre nuestras 
funciones pueden devolver algun valor con la palabra reservada return y así
esto puede ser mostrado o almacenado en alguna variable*/