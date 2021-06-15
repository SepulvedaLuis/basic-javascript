/*JS es un lenguaje que está diseñado en un paradigma de objetos.
Ejemplo de Objeto: */
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}
//Acceder a una propiedad del objeto:
miAuto.marca 
// "Toyota"
//Se pueden agregar propiedades que van a ser una función, se les llama métodos de 
//objetos.

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020, 
    detallesDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.año}`);
    }
}   
miAuto.detallesDelAuto();
//Auto Corolla 2020

//¿Quién es this?
//Es una variable que hace referencia al objeto. En este caso: this = miAuto.

/*JS no fue diseñado dentro del paradigma orientado a objetos (a pesar de que esta 
basado en Java). Originalmente era un lenguaje diseñado solo para que fuera posible 
interactuar con el HTML de las páginas web de los 90s, (es decir un lenguaje de scripting
liviano y sencillo). Lo que paso con JS es que a través del tiempo y debido a su entrada
en auge de unos años para aca, se han ido incluyendo caracteristicas de diversos paradigmas
de programación (si, también programacion orientada a objetos) en su forma de funcionar. 
Pero para ser sinceros JS lo que tiene es una serie de palabras clave que le permiten 
emular la programación orientada a objetos. O en palabras de la MDN: “Las clases de 
JavaScript, introducidas en ECMAScript 2015, son principalmente azúcar sintáctica sobre
la herencia existente basada en prototipos de JavaScript. La sintaxis de clase no 
introduce un nuevo modelo de herencia orientado a objetos a JavaScript.” Classes en JS.
Sin embargo existen herramientas que si permiten trabajar JS dentro del paradigma de 
orientación a objetos de forma mucho más adecuada, por ejemplo typescriptlang.
Espero que esto sirva de ayuda para ampliar conocimientos y conceptos.*/

//Usar objects con función constructura

function auto(marca, modelo, annio){ //Creamos la función constructura con las características de un auto
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = []; //En este arrays vamos a guardar todos los objetos de autos
 
for(let i = 0 ; i < 3 ; i++){ //En este ciclo vamos a crear 3 objetos de autos con sus características pedidas
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio)); // de esta manera almacenamos cada objeto en nuestro arrays de objetos
}

for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
}
// Con este ciclo imprimimos nuestros objetos de autos