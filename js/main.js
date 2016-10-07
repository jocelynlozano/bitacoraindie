window.addEventListener("load",main);

 
 swal ({ 
 		title: "Bitacora" ,   
 		text: "Comparte textos, citas, imagenes, pensamientos y mucho más con tus amigos en un espacio seguro" ,   
 		timer: 3000 ,  
 		showConfirmButton: false  
 });

function Mostrar(){
  document.getElementById("caja").style.display = "block"
}
function Ocultar(){
  document.getElementById("caja").style.display = "none"
}
function mostrarOcultar(){
  var caja = document.getElementById("caja")
  if(caja.style.display == "none"){
    Mostrar();
    document.getElementById("boton").value = "Ocultar"
  } else {
    Ocultar();
    document.getElementById("boton").value = "Publicar"
  }
}


//Funcion que se ejecuta cuando termina de cargar
function main() {
  var addTaskButton = document.getElementById("add-task");
  addTaskButton.addEventListener("click",onClickAddTask);
}

function onClickAddTask(e) {
  e.preventDefault();
  var text = getTextAreaValue();
  if (text != "" && text.length <= 140) {
    var newTask = createTask(text);
    addTaskToContainer(newTask);
  } else {
    alert("Ingresa texto entre 0 y 140 caracteres");
  }
}

function getTextAreaValue() {
  var textarea = document.querySelector(".add-tasks textarea");
  return textarea.value;
}

function createTask(text) {
  var newTask = document.createElement("div");
  newTask.innerText = text;
  return newTask;
}

function addTaskToContainer(task) {
  var taskContainer = document.getElementById("tasks-container");
  taskContainer.appendChild(task);
}