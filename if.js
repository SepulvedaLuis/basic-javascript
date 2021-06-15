/*Este tipo de condicional es uno de los más utilizados ya que siempre que la condición
que va alojada en () se cumpla, es decir, que esta condición es verdadera vamos a realizar
instrucciónes que tengamos alojadas, en caso que sea negativo nuestra condición puede
morir o si deseamos podemos utilizar la opción else para indicar que si es falso hacer
las intrucciones que deseemos*/

if(true){ // si condición es verdadera, hacer
    console.log("Esto es verdad"); // intrucciones
}else{ // si condición es falso, entonces hacer
    console.log("Sor falso"); // instrucciones
}

/* Contamos con otra alternativa de if, en el cual podemos seguir evaluando si la 
instruccion es verdad en diferentes partes, en pocas palabras podemos tener varias
opciones para evaluar */

//ej. vamos a evaluar si una persona puede votar, siendo la edad para votar 18 años,
//Indicar si es la primera votació, si es votante regular o cuantos años le falta

var edad = 18; 

if(edad === 18){ //Comparamos si la edad es igual a 18 para saber si es primera votación
    console.log("Puedes votar, será tu 1ra votación");
}else if(edad > 18){ //Si la condición inicial no se cumplió validamos si es mayor de 18
    console.log("Eres votante regular");
}else{ // Si ninguna de las dos condiciones se cumplió verificamos si es menor y cuanto le falta
    console.log("No puedes votar, te faltan "+ (18 - edad) + " años para poder votar");
}

//condicional ternario 

// Condition ? true : false ;

var numero = 1;
var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno"; 