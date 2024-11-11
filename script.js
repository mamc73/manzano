document.getElementById('fuelForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const distancia = parseFloat(document.getElementById('distancia').value);
    const fecha = document.getElementById('fecha').value;

    // Calcular el consumo de combustible
    const consumo = (distancia / 9.3).toFixed(2); // Calcular litros consumidos

    // Crear una nueva fila en la tabla
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${distancia} km</td>
        <td>${fecha}</td>
        <td>${consumo} L</td>
    `;

    // Añadir la nueva fila a la tabla
    document.getElementById('registroTabla').appendChild(nuevaFila);

    // Limpiar el formulario
    document.getElementById('fuelForm').reset();
});

// Funcionalidad para descargar comprobante
document.getElementById('exportBtn').addEventListener('click', function() {
    window.open('https://classroom.google.com/c/NzI4ODU5NjMwOTc4/a/NzI4ODU5MDM3Njcy/details', '_blank'); // Abrir el enlace en una nueva pestaña
});
