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
    const div_completa=document.createElement("div");
    const div_container = document.createElement("div");
    const checkbox = document.createElement("input");
    const parrafo = document.createElement("p");
    const div_boton = document.createElement("div");
    const button_submit = document.createElement("button");
    const icono = document.createElement("i");

    const button_delette=document.createElement("button");
    /*const icono_delette=document.createElement("i");*/

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

    /*button_delette.classList.add("btn-delete")
    icono_delette.classList.add("fa-regular", "fa-square-minus")*/

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

   /*************************************************************** */
   function eliminarTarea(id){
       document.getElementById(id).parentElement.parentElement.remove();
   }
   
   button_delette.addEventListener("click", ()=>{
       eliminarTarea(button_delette.getAttribute("id"));
   })




    /*button_delette.classList.add("btn-submit")
    icono_delette.classList.add("fa-regular", "fa-square-minus")

    div_completa.appendChild(div_container);
    div_completa.appendChild(div_boton);
    div_container.appendChild(parrafo);
    div_boton.appendChild(button_delette);
    button_delette.appendChild(icono_delette);*/
    



    function moverTarea(id){
        //se agrega todo la fila tarea al otro contenedor
        icono.classList.replace(("fa-solid", "fa-arrow-right"),("fa-regular", "fa-square-minus"));
        
        
        
        container_completadas.appendChild(div_todo);
        

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
/*import deleteIcon from "./deleteicon";

const checkComplete = () => {//arrow function
    const i = document.createElement('i');//creamos el elemento botón
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click', completeTask);//entre parentesis el EVENTO y la FUNCION a ejecutar cuando el usuario hace click)
    return i;
    
 };
//Clase04: Inmediately invoked function expression (IIFE)..
//..para esto creamos arriba de todo un arrow function
 const completeTask = (event) => {//creamos la funcion que se va a ejecutar una vez el usuario le de click a nuestro elemento checkComplete
    const element = event.target;
    element.classList.toggle('fas'); //con TOGGLE determinamos si existe o no la clase (el azul o no al hacer click)
    element.classList.toggle('completeIcon');//CLASE que pone el color azul
    element.classList.toggle('far');//remover clase "far"
    
 };

 export default checkComplete; */