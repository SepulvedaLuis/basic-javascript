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


//Meétodos de recorridos de Arrays

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

articulosFiltrados;

var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulo;

/*FILTER(): retorna un nuevo array con los elementos que cumplen alguna condición, 
los elementos no son modificados. 
MAP(): retorna un nuevo array con los resultados de la función que le pasamos y 
que es aplicada a cada uno de los elementos del array.*/