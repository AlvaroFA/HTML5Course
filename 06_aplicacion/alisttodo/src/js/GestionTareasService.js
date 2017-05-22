var GestionTareasService = function() {
};

/*constante*/
GestionTareasService.STORAGE_KEY = 'alist_tareas';


GestionTareasService.prototype.agregarTarea = function(nuevaTarea, fnSuccess, fnError) {
    var tareasAsString = localStorage.getItem(GestionTareasService.STORAGE_KEY);
    var tareas = JSON.parse(tareasAsString);
    tareas.push(nuevaTarea);
    tareasAsString = JSON.stringify(tareas);
    localStorage.setItem(GestionTareasService.STORAGE_KEY, tareasAsString);
    fnSuccess();
};

GestionTareasService.prototype.obtenerTareas = function(fnSuccess, fnError) {
    var tareasAsString = localStorage.getItem(GestionTareasService.STORAGE_KEY);
    var tareas = JSON.parse(tareasAsString);
    fnSuccess(tareas);
};










