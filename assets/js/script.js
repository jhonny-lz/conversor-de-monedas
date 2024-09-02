document.getElementById('convertir').addEventListener('click', function() {

    var cantidad = document.getElementById('cantidad').value;
    var moneda = document.getElementById('moneda').value;

    // Validar cantidad
    if (!cantidad) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }

    // Consultar la API 
    fetch('https://mindicador.cl/api/' + moneda)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // conversión
            var valorMoneda = data.serie[0].valor;
            var resultado = cantidad / valorMoneda;

            // resultado de la conversión
            document.getElementById('resultado').innerText = cantidad + ' CLP = ' + resultado.toFixed(2) + ' ' + moneda.toUpperCase();
        })
        .catch(function(error) {
            console.error('Error al consultar la API:', error);
            alert('Hubo un problema al consultar los datos. Inténtelo nuevamente más tarde.');
        });
});