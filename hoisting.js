/* En JavaScript, las declaraciones (por ejemplo, de variables o funciones) se mueven
 al principio de su scope o ámbito. Este comportamiento se conoce como hoisting y es 
 muy importante tenerlo en cuenta a la hora de programar para prevenir posibles 
 errores.
*/

console.log("mi nombre es "+ miNombre);
var miNombre;
miNombre = "Luis";

// También podemos hacer var miNombre = "Luis"; esto se puede hacer de forma directa
/* En el ejemplo anterior nos va devolver Undefined en vez de nuestro nombre
ya que estamos llamando primero nuestra variable antes de que sea inicializada, y lo
que sucede es que cuando se ejecuta el código primero crea las variables y por defecto
toda variable es definidad como Undefined y hasta que no se inicialice no cambia
su valor */

miFuncionD();

function miFuncion(){
    console.log("Hola" + miNombre);
}

var miNombre = "Luis";

/* El hoisting también afecta las funciones y primero se crean antes que todo, pero 
si llamamos primero nuestra función sin todavía almacenar o guardar los argumentos 
que se van actualizar, el va hacer la ejecución pero si dependemos de alguna variable
que no esta inicializada para registrar nuevamente undesifed*/

/* Para evitar estos errores, debemos ser cuidadosos con la creación y definición de
funciones, variables y entre otros tipos que son afectados por hoisting, lo mejor siempre
es al crear una variable inicializarla y si va ser usada en alguna línea de código
asegurarse de que este creada, también siempre crear las funciones y ordenar de forma
adecuada el uso de parametros y variables en cada función.*/