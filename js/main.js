window.addEventListener("load",function(){
  swal ({ 
  title: "Bitacora" ,   
  text: "Comparte textos, citas, imagenes, pensamientos y mucho más con tus amigos en un espacio seguro" ,   
  timer: 3000,  
  showConfirmButton: false  
});
  var caja=document.getElementById("caja");
  caja.style.display="none";
  var ocultatePrimero=document.getElementById("ocultatePrimero"); 
  var tasksContainer=document.getElementById("tasks-container");
  ocultatePrimero.style.display="none";
  tasksContainer.style.display="none";
  var boton=document.getElementById("boton");
  var texto=document.getElementById("texto");
  var cita=document.getElementById("cita");
  var link=document.getElementById("link");
  var pildora=document.getElementById("pildora");
  pildora.addEventListener("click",aparecer);
  link.addEventListener("click",aparecer);
  cita.addEventListener("click",aparecer);
  texto.addEventListener("click",aparecer);
  boton.addEventListener("click",listas);
    function listas(){
      caja.style.display="block";
    }
    function aparecer(){
    ocultatePrimero.style.display="block";
    tasksContainer.style.display="block";
  }
    function mostrarOcultar(){
      if (caja.style.display = "none"){
        Mostrar();
        document.getElementById("boton").value;
      } else {
        Ocultar();
        document.getElementById("boton").value;
      };
    };
    main();
});

//Funcion que se ejecuta cuando termina de cargar
function main() {
  var addTaskButton = document.getElementById("add-task");
  addTaskButton.addEventListener("click",onClickAddTask);

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