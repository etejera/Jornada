document.getElementById('registroJornada').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const trabajador = document.getElementById('trabajador').value;
    const fecha = document.getElementById('fecha').value;
    const horaEntrada = document.getElementById('horaEntrada').value;
    const horaSalida = document.getElementById('horaSalida').value;

    if (trabajador && fecha && horaEntrada && horaSalida) {
        document.getElementById('registroExitoso').classList.remove('hidden');
        document.getElementById('error').classList.add('hidden');
        
        // Aquí se podría agregar el código para guardar los datos en una base de datos
        // Ejemplo: enviarDatos(trabajador, fecha, horaEntrada, horaSalida);
        
    } else {
        document.getElementById('error').classList.remove('hidden');
        document.getElementById('registroExitoso').classList.add('hidden');
    }
});
