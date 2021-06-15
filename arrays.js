var frutas = []; //generamos un arrays vacío

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"]; //definimos un arrays de 4 elementos

/*Es importante saber que las posiciones de un arrays comienzan desde 0 hasta la longitud - 1
y podemos saber la longitud del arrays de la siguiente manera frutas.length, y para mostrar
los elementos de forma individual debemos mostrarlos según en la posición que esten en 
nuestro arrays, la sintaxis es la siguiente frutas[posición] */

var masFrutas = frutas.push("Uvas"); //Con push lo que hacemos es enviar mas valores al arrays frutas al final

var ultimo = frutas.pop("Uvas"); //Con pop eliminamos el último elemento del arrays frutas.pop()

var alInicio = frutas.unshift("Mango"); //Con esto agregamos datos al inicio del arrays

var borrarFruta = frutas.shift();//Con esto eliminamos el primer valor del arrays

var posicion = frutas.indexOf("Plátano"); //Con esto nos busca la posición del elemento en el arrays


