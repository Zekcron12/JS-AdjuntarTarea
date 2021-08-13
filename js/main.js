//Apenas se lea el archivo js queremos que ya este lista la función


//Función principal
function logicPrimary() {

	//Constantes
	let TASK = document.getElementById('lista');
	const INPUT = document.getElementById('tareaInput');
	const BUTTON = document.getElementById('buttonTask');

	const addTask = function()  {
		//Creamos la variables y la igualamos a la constantes para acceder a sus valores.
		let task = INPUT.value;
		//Creamos 2 variables donde se va almacenar 2 etiquetas que se van a crear.
		let newTask = document.createElement('li');
		let linkTask = document.createElement('a');
		linkTask.setAttribute('href', '#'); //a la etiqueta 'a' le agreamos atributos.
		//Creamos un nodo de texto y le agreamos el contenido que haya en la variable task.
		let containerTask = document.createTextNode(task);

		if (task === "") {
			//Al input del html le agregamos un atributo.
			INPUT.setAttribute('placeholder', 'No ha ingresado ningún dato');
			//Ademas tambien le agregamos una class 'error' que esta en css.
			INPUT.className = 'error';
			//Si la condicion no se cumple, es decir si pusieron la tarea, cerrame la funcion.
			return false;
		}

		//Nota: lo siguiente es agregar una etiqueta dentro de otra en HTML.
		//La variable containerTask le agregamos dentro del linkTask.
		linkTask.appendChild(containerTask);
		//La variable linkTask la agragamos dentro de newTask.
		newTask.appendChild(linkTask);
		//La variable newTask la agregamos dentro de la lista.
		TASK.appendChild(newTask);		
		//Cuando se ejecute toda la linea de código de arriba, limpiame el input.
		INPUT.value = '';
		//let almacenamiento = TASK;

		//Cuando se le da un click a la tarea, llama a la función y espera al 2do click para borrar.
		TASK.addEventListener('click', restart);
	};



	const checkInput = function() {
		//Cuando no se pone una tarea valida en el input, mas arriba en el código se le van a 
		//agregar ciertos atributos que indican que la tarea no es valida, entonces ahora, 
		//cuando se le vuelve a clickear se le remueven esos atributos para que el usuario 
		//lo vuelta a intentar.
		INPUT.className = '';
		INPUT.setAttribute('placeholder', 'Adjunta tú tarea');
	};
	const removeTask = function() {
		//Cuando se clickea una tarea, llama al padre y busca al hijo osea la tarea clickeada y la
		//borra de la lista.
		this.parentNode.removeChild(this);
	};



	//Eventos
	// Agregar Tarea - Cuando se da click al boton
	BUTTON.addEventListener('click', addTask);
	// Comprobar que el input no este vacio
	INPUT.addEventListener('click', checkInput);

	// Borrando Elementos de la lista
	function restart() {
		for (let i = 0; i <= TASK.children.length -1; i++) {
			TASK.children[i].addEventListener('click', removeTask);
		};
	};
	restart();
	//Logica: creamos un ciclo
	//accedemos a la lista 'task', a sus hijos 'children' y a su cantidades 'length'

	// NO FUNCIONO XD
	//codigo de prueba para el guardado
	/*const saveTask= document.querySelector('#save');
	let tumama = TASK;
	function saveLocal() {
		for (let i = 0; i <= TASK.children.length +1; i++) {
			document.body.classList.toggle('active');
		};
		if(document.body.classList.contains('active')){
	    localStorage.setItem('almacenamiento', 'true');
	  } else {
	    localStorage.setItem('almacenamiento', 'false');
	  }
	}
	if(localStorage.getItem('almacenamiento') === 'true'){
		document.body.classList.add('active');
		TASK.value;
	} else {
  	document.body.classList.remove('active');
	}
	saveTask.addEventListener('click', saveLocal);*/
}
//Apenas se lea el archivo js queremos que ya este lista la función
logicPrimary();

//-------------------- BITÁCORA --------------------//
const open = document.getElementById('open');
const modalBitacora = document.getElementById('modal-bitacora');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modalBitacora.classList.add('show');  
});

close.addEventListener('click', () => {
  modalBitacora.classList.remove('show');
});




