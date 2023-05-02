const input = document.getElementById("input");
const btn_todo = document.getElementById("btn_todo");
const container_todo = document.querySelector(".container_tareas");

const container_completadas = document.querySelector(".container_completadas");


let id=1;
/*
            <div class="container_listado">
                <div class="container_listado-">
                    <input type="checkbox" class="box">
                    <p class="tarea_ingresada">Tarea Ingresada...</p>
                </div>
                <div class="container_list_boton">
                    <button class="btn-eliminar" ><i class="fa-regular fa-square-minus"></i></button>
                </div>
                
            </div>
*/
function addTodo(){
    //creo el containerListado con atributos y clases
    const div_todo = document.createElement("div");
    const div_container = document.createElement("div");
    const checkbox = document.createElement("input");
    const parrafo = document.createElement("p");
    const div_boton = document.createElement("div");
    const button = document.createElement("button");
    const icono = document.createElement("i");

    parrafo.innerHTML = input.value;
    //le doy estilo a los elementos
    div_todo.classList.add("container_listado");
    div_container.classList.add("container_listado-");
    checkbox.classList.add("box");
    checkbox.setAttribute("type","checkbox");//le ingreso un atributo
    parrafo.classList.add("tarea_ingresada");
    div_boton.classList.add("container_list_boton");
    button.classList.add("btn-eliminar");
    button.setAttribute("id",id++);

    icono.classList.add("fa-regular", "fa-square-minus");

    //Se forma toda la fila tarea
   div_todo.appendChild(div_container);
   div_todo.appendChild(div_boton);
   div_container.appendChild(checkbox);
   div_container.appendChild(parrafo);
   div_boton.appendChild(button);
   button.appendChild(icono);

   //se agrega todo la fila tarea
   container_todo.appendChild(div_todo);

   input.value="";


   function eliminarTarea(id){
        document.getElementById(id).parentElement.parentElement.remove();
 
   };


   //Comprueba que se hizo click en el checkbox para luego escuchar el botón eliminar
   checkbox.addEventListener("click",()=>{
            if (checkbox.checked){
                button.addEventListener("click", ()=>{
                eliminarTarea(button.getAttribute("id"));
            });
        };
    });
};
btn_todo.addEventListener("click",()=>{
    if (input.value ==="" || input.value.trim()===""){//método trim() para eliminar los espacios en bco a ambos extremos
        window.alert("Debe ingresar una Tarea");
    }else{
        addTodo();
    };

});

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

function addCompl(){
    //creo el containerCompletas con atributos y clases
    const div_compl = document.createElement("div");
    const div_completa = document.createElement("div");
    const parrafo2 = document.createElement("p");
    const div_boton2 = document.createElement("div")
    const button2 = document.createElement("button");
    const icono2 = document.createElement("i");

    //le doy estilo a los elementos
    parrafo2.innerHTML=parrafo

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

};

*/
