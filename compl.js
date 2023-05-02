

const container_completadas = document.querySelector(".container_completadas");



/*
           <div class="container_completa">
                <div class="container_completa-">
                    <input type="checkbox" class="box">
                    <p class="tarea_ingresada">Tarea Ingresada...</p>
                </div>
                <div class="container_list_boton">
                    <button class="btn-eliminar" ><i class="fa-regular fa-square-minus"></i></button>
                </div>
            </div>
*/
function addCompl(){
    //creo el containerCompletas con atributos y clases
    const div_compl = document.createElement("div");
    const div_completa = document.createElement("div");
    const parrafo2 = document.createElement("p");
    const div_boton2 = document.createElement("div")
    const button2 = document.createElement("button");
    const icono2 = document.createElement("i");

    //le doy estilo a los elementos
    div_compl.classList.add("container_completa");
    div_completa.classList.add("container_listado-");
    parrafo2.classList.add("tarea_ingresada");
    div_boton2.classList.add("container_list_boton");
    button2.classList.add("btn-eliminar");
    

    icono2.classList.add("fa-regular", "fa-square-minus");
     //Se forma todo la fila tarea
    div_compl.appendChild(div_completa);
    div_compl.appendChild(div_boton2);
    div_completa.appendChild(parrafo2);
    div_boton2.appendChild(button2);
    button2.appendChild(icono2);

   //se agrega todo la fila tarea
   container_completadas.appendChild(div_compl);

   if (elimino==true){
        parrafo2.innerHTML = recibeTarea;
   };
};




