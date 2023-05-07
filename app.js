const input = document.getElementById("input");
const btn_input = document.getElementById("btn_input");
const container_todo = document.querySelector(".container_tareas");

const guardarTareas = () =>{
    const tarea ={//creo el objeto tarea
        input_tarea : input.value//input_tarea es un objeto que tiene el valor del input
    };
    if (localStorage.getItem("tareas")=== null){
        let arreglo = [];//creo el arreglo
        arreglo.push(tarea);//le pongo un objeto(tarea)
        localStorage.setItem("tareas",JSON.stringify(arreglo));//de JSON a string y guardo el arreglo en el localStorage
    }else{//si existen tareas en el localStorage
        let obtener = JSON.parse(localStorage.getItem("tareas"));//JSON.parse para convertir a objeto - obtengo las tareas del localStorage
        obtener.push(tarea);//le coloco la nueva tarea al arreglo (lo actualizo)
        localStorage.setItem("tareas",JSON.stringify(obtener)); //vuelvo a guardar el arreglo en el localStorage

    };
    mostrarTareas();
    input.value =""; //reinicio el input
};
const mostrarTareas= (tarea)=>{
    let muestra_tareas = JSON.parse(localStorage.getItem("tareas"));
    container_todo.innerHTML ="";
    for (let i=0; i<muestra_tareas.length; i++){
        let input = muestra_tareas[i].input_tarea;//al input le paso la tarea
        container_todo.innerHTML += `
        <div class="container_listado">
            <div class="container_listado-">
                <input type="checkbox" id="box"  >
                <p class="tarea_ingresada">${input}</p>
            </div>
            <div class="container_list_boton">
                <button class="btn-submit" onclick="pasarTarea('${input}','${checkbox}')">-></button>
            </div>
        </div>
        `;
    }
//onclick="validarCorreo(document.getElementById('email').value)"/>
}


        const pasarTarea =(tarea)=>{
            
            let tareas = JSON.parse(localStorage.getItem("tareas"));
            for (let i=0; i<tareas.length; i++){
                if(tarea === tareas[i].input_tarea){
                    tareas.splice(i,1);
                };
            };
            localStorage.setItem("tareas",JSON.stringify(tareas));//se vuelve a guardar la lista de tareas en el localStorage sin la tarea eliminada
            mostrarTareas();//para que vuelva a recorrer el arreglo y lo muestre sin la tarea eliminada
        };
       
        checkbox.addEventListener("click",()=>{
            if (checkbox.checked){
                pasarTarea(tarea);
            }
        })





btn_input.addEventListener("click",()=>{
    if(input.value === "" ||input.value.trim()===""){
        window.alert("Debe ingresar una tarea");
    }else{
        guardarTareas();
    }
})
