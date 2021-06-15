/*Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite 
diferentes tipos de bucles:
for - recorre un bloque de código varias veces
for/in - recorre las propiedades de un objeto
for/of - recorre los valores de un objeto iterable */

var estudiantes = ["Maria", "Sergio", "Rosa" , "Luis" , "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log("Hola, "+ estudiantes);
}

for(var i = 0; i < estudiantes.length; i++){ 
    saludarEstudiantes(estudiantes[i]);
}
/*Estructura básica del for en la cual debemos indicar la variable que nos va ayudar 
a iterar, hasta donde vamos a iterar y el aumento que vamos a tener */

for(var estudiante of estudiantes){ 
    saludarEstudiantes(estudiante);
}
//Con esta forma iteramos en cada elemento del arrays sin tener que poner los demas parametros

//Encontramos dos maneras de recorrer nuestro arrays
