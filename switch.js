/*Con este tipo de condicional podemos evaluar varias veces una condición que 
pueda tener varias respuestas de una manera más fácil de entender, cuando notas
que tienes un if o else if varias veces puedes obtar por usar un switch y su sintaxis
es la siguiente*/
var numero = 100; //definimos una variable y la inicializamos con 100

switch (numero){ //en este campo indicamos que vamos a evaluar el valor que tiene numero
    case 1: //Se divide por casos y nuestra variable sera verificada en cada case
        console.log("Soy uno!");
        break; //es por esto que el uso del break es importante para evitar que nuestra condicional
        // siga ejecutando si ya entro a un case, el break lo que hace es que libera el código
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Soy un 100!");
        break;
    default:
        console.log("No soy nada");  
        break;
}

/*En este ejemplo pasado nuestra varias numero sería verificada en el case 1, case 10 y case 100 
al llegar al caso indicado realiza las intrucciones del caso y con el break cierra la condición
y continua con el código que tengamos para ejecutar. El valor por default es importante
ya que si ninguno de nuestros casos se ejecuta imprimimos un valor por defecto y así poder
saber que no logramos lo que deseamos.*/