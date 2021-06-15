var estudiantes = ["Maria", "Sergio", "Rosa" , "Luis" , "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}
// Esto se llama interpolar y como las conseguimos con teclado `` Alt gr + la tecla }

/* Todo el proceso es igual a excepcion, que en esta parte en vez de usar el FOR se 
usa el WHILE */
while(estudiantes.length > 0) { /* Mientras lo que este adentro del () sea verdad, lo 
    que esta abajo se va a generar */
    console.log(estudiantes); //Con esto podemos notar que el arrays va disminuyendo
     var estudiante = estudiantes.shift(); /* Mientras estudiantes.lengh que es a 
     longitud del arrayl sea > 0 entonces se debe de cumpir el loop */
     saludarEstudiantes(estudiante);
}