const input = document.getElementById("input");
const btn_input = document.getElementById("btn_input");
const container_todo = document.querySelector(".container_tareas");

const container_completadas = document.querySelector(".container_completadas");
let id=1;
/*
            <div class="container_listado">//div_todo
                <div class="container_listado-">//div_container
                    <input type="checkbox" class="box">
                    <p class="tarea_ingresada">Tarea Ingresada...</p>
                </div>
                <div class="container_list_boton">
                    <button class="btn-submit" ><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                
            </div>
*/
function addTodo(){
    //creo el containerFila con atributos y clases
    const div_todo = document.createElement("div");
    const div_container = document.createElement("div");
    const checkbox = document.createElement("input");
    const parrafo = document.createElement("p");
    const div_boton = document.createElement("div");
    const button_submit = document.createElement("button");
    const icono = document.createElement("i");

    const btn_delete = document.createElement("button");
    

    parrafo.innerHTML = input.value;
    //le doy estilo a los elementos
    div_todo.classList.add("container_listado");
    div_container.classList.add("container_listado-");
    checkbox.classList.add("box");
    checkbox.setAttribute("type","checkbox");//le doy un atributo
    parrafo.classList.add("tarea_ingresada");
    div_boton.classList.add("container_list_boton");
    button_submit.classList.add("btn-submit");
    button_submit.setAttribute("id",id++);
    icono.classList.add("fa-solid", "fa-arrow-right");

    btn_delete.classList.add("btn-delete")
    /*icono_delette.classList.add("fa-regular", "fa-square-minus")*/

    //Se forma toda la fila tarea(ubico todos los elementos)
    div_todo.appendChild(div_container);
    div_todo.appendChild(div_boton);
    div_container.appendChild(checkbox);
    div_container.appendChild(parrafo);
    div_boton.appendChild(button_submit);
    button_submit.appendChild(icono);

    //se agrega todo la fila tarea
    container_todo.appendChild(div_todo);

    input.value="";

   /**************************************************************/ 
   function eliminarTarea(){
       document.querySelector("tarea_ingresada").parentElement.parentElement.remove();
       
   };
        
   btn_delete.addEventListener("click",()=>{
    eliminarTarea(parrafo.getAttribute("tarea_ingresada"))
});
   
    /*button_delette.classList.add("btn-submit")
    icono_delette.classList.add("fa-regular", "fa-square-minus")

    div_completa.appendChild(div_container);
    div_completa.appendChild(div_boton);
    div_container.appendChild(parrafo);
    button_delette.appendChild(icono_delette);*/
    
    function moverTarea(){
        //se agrega todo la fila tarea al otro contenedor
        
        button_submit.replaceWith(btn_delete);
        container_completadas.appendChild(div_todo);
       
        return(btn_delete);

            
   };


   //Comprueba que se hizo click en el checkbox para luego escuchar el botón eliminar
   checkbox.addEventListener("click",()=>{
            if (checkbox.checked){
                button_submit.addEventListener("click", ()=>{
                moverTarea(button_submit.getAttribute("id"));
                });
            };  
    });
};

/*************************************************** */
btn_input.addEventListener("click",()=>{
    if (input.value ==="" || input.value.trim()===""){//método trim() para eliminar los espacios en bco a ambos extremos
        window.alert("Debe ingresar una Tarea");
    }else{
        addTodo();
    };

});