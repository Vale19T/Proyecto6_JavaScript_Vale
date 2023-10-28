/*Se crea una constante con querySelector*/
const marcoPuntaje = document.querySelector('.puntaje');

/*Variable en donde el puntaje esta e inicia en 0 */
let puntajeActual = 0;

/*Constante para el limite */
const puntajeLimite = 5;

/*El div para cada estrella se hace desde un mapeo HTML y este se construye con un arreglo este con 
un limite puesto desde la constante puntajeLimite*/
/*.map para construir en el html 5 divisiones por las cinco estrellas */
const htmlMapa = Array.from(Array(puntajeLimite)).map((item, i)=>{
    /*Significa que la clase del elemento será "item" seguida del valor de i, por 
    lo que para cada elemento en el arreglo, la clase será diferente */
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

/*Insertar en el html por medio del htmlMapa en el div del puntaje */
marcoPuntaje.innerHTML = htmlMapa.join("");

/*Traer todo lo de la clase Item ademas que en esta parte se va a recorrer el arreglo*/
document.querySelectorAll(".item").forEach(item=>{
    /*Mientras se recorre el arreglo se hace una revision 
    de cuando el mouse pasa por encima de las estrellas o el querySelector*/
    item.addEventListener("mouseover", e=>{
        /*console.log("Funciona");*/
        /*Crear una constante de la posicion en donde se captura la posicion*/
        const posicion = item.getAttribute("data-pos");

        /*Si el puntaje es igual a la posicion mas 1 se retorne vacio... 
        Es una optimizacion para actualizar la ultima posicion*/
        if (puntajeActual === parseInt(posicion)+1){
            return;
        }

        /*Con el querySelector se hace la parte de devolver la seleccion 
        de los item y con el .remove se deja el item por default*/
        document.querySelectorAll(".item").forEach(cuadraditoGris =>{
            if (cuadraditoGris.classList.contains("selec")){
                cuadraditoGris.classList.remove("selec");
            }
        });

        /*El for depende de la posicion y el limite es la posicion con un aumento de 1 en 1*/
        for (let i = 0; i <= posicion; i++){
            /*Se crea la constante cuadradito para guardar el indice del item con el querySelector de 0 a 4*/
            const cuadradito = document.querySelector(`.item-${i}`);

            /*Si al pasar el mouse es diferente a la clase selec, si el cuadradito se va a agregar*/
            if (!cuadradito.classList.contains("selec")){
                /*ClassList.add se agrega temporalmente */
                cuadradito.classList.add("selec");
            }
        }
        /*Se actualiza el puntaje actual segun la posicion*/
        puntajeActual =parseInt(posicion)+1;
    });

    /*EL listener en este caso se utilizar con el click para capturar 
    el puntaje, ademas, de vuelve el valor el puntaje en las estrellas*/
    item.addEventListener("click", (e)=>{
        /*Traer la posicion del data-pos, y se le suma una posicion y se van sumando las estrellas */
        const posicion = item.getAttribute("data.pos");
        puntajeActual = parseInt(posicion)+1;
        /*El console.log para verificar si devuelve el valor o conteo de las estrellas*/
        console.log(puntajeActual);
    })
})





