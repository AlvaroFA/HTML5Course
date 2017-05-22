var controlador = function(){
	this.servicio= new GestionTareaService();
	

}



var ctrl = function(){

}



crtl.prototype._listarTareas= function(){
	gestionTareasService.prototype.leerTarea= function(){
	var url = 'http://localhost/tareas.json';
	var df = $get.JSONÇ(url);
	df.fail(function(tarea){
		console.log('Error');
	});
	df.always(function(tareA){
		console.log('realizando conexion');
	})

}

controlador.prototype._onNewTarea= function(tarea){
	var tr = document.createElement('p');
	tr.innerHTML = tarea.tx
	return tr;
}