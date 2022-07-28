//* llamada a elemento del html 
const tareasInput = document.getElementById('input');
const btnAgregar = document.getElementById('button');
const listaDeTareas = document.getElementById('tareas');
const totalDeTareas = document.getElementById('total');
const contadorDeRealizadas = document.getElementById('realizadas');

//* Arreglo de objeto donde estan las 3 primeras tareas
const tareas = [
    {id: 1, checked: false, nombre: 'Hacer mercardo'},
    {id: 2, checked: false, nombre: 'Estudiar para la prueba'},
    {id: 3, checked: false, nombre: 'Sacar a pasaear a Tobby'}
];

//* Funcion para renderizar las tareas
function renderTareas(){
    console.log(tareas);
    let html = "";
    for (let tarea of tareas) {
        console.log(tarea.checked)
        html += `<tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td><input type="checkbox" class="checkbox_tarea" ${(tarea.checked ? " checked " : "")}onclick="sumarCheckbox()"></td>
        <td><button class="button__borrar" onclick="borrar(${tarea.id})"><i class="fa-solid fa-xmark"></i></button></td>
        </tr>
        `;
    }
    listaDeTareas.innerHTML = html;
    totalDeTareas.textContent = `Total: ${tareas.length}`; 
}
renderTareas()

//* funcion para borrar las tareas
function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderTareas()
    sumarCheckbox()
    console.log(index, 'borrado')
}

//* Funcion para checkear las tareas
function sumarCheckbox(){
    let contador_realizadas = 0
    let contenedor_tareas = document.getElementById('tareas');
    contenedor_tareas = contenedor_tareas.querySelectorAll("input");

    contenedor_tareas.forEach(function (tarea, index) {
        if(tarea.checked){
            console.log(`la tarea ${index} está checkada`)
            tareas[index].checked = 'true'
            contador_realizadas ++
            console.log(tarea, 'checkeada')
        } else {
            console.log(tarea, 'no checkeada')
        }
    });
contadorDeRealizadas.textContent = `Realizadas: ${contador_realizadas}`;
};

//* Evento para agregar tareas
let id = tareas.length + 1
btnAgregar.addEventListener("click", () => { 
    const nuevaTarea = {id: id, checked: false, nombre: tareasInput.value};
    tareas.push(nuevaTarea);
    tareasInput.value = "";
    renderTareas()
    id++;
})


