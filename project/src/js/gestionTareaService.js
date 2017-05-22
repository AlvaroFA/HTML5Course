var gestionTareasService = function (insertarTarea , leerTarea){
	this.insertarTarea = insertarTarea;
	this.leerTarea = leerTarea;
}

gestionTareasService.prototype.insertarTarea = function(tarea){
	var tr = document.querySelector('#p');
	var fecha = document.querySelector('#fecha').innerHTML;
	
	var elemItem = document.createElement('p');
	elemItem.innerHTML = '';
	lista.appendChild(elemItem);
}

/*
gestionTareasService.prototype.leerTarea = function(tarea[]){
	var listaTareasSer = localStorage.getItem('tareas');
	var listaTareas = JSON.parse(listaTareasSer);
	listaTareas.push(nuevaTarea);
	var listaTareasSer = JSON.stringify(listaTareas);
	localStorage.setItem('tareas', listaTareasSer);
	*/
gestionTareasService.prototype.leerTarea= function(){
	var url = 'http://localhost/tareas.json';
	var df = $get.JSONÇ(url);
	df.fail(function(tarea){
		console.log('Error');
	});
	df.always(funtion(){
		console.log('realizando conexion');
	});
	
	
		
	}	
}