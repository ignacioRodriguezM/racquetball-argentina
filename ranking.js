// DATOS DE JUGADORES - Edita aquí para actualizar la web automáticamente
const jugadores = [
    { pos: 1, nombre: "María José Vargas", puntos: 2450 },
    { pos: 2, nombre: "Natalia Méndez", puntos: 2100 },
    { pos: 3, nombre: "Diego García", puntos: 1850 },
    { pos: 4, nombre: "Gerson Miranda", puntos: 1600 },
    { pos: 5, nombre: "Shai Manzuri", puntos: 1200 }
];

// Función para renderizar la tabla
function cargarRanking() {
    const tabla = document.getElementById('ranking-body');
    tabla.innerHTML = ""; // Limpiar tabla

    jugadores.forEach(j => {
        let fila = `<tr>
            <td><strong>#${j.pos}</strong></td>
            <td>${j.nombre}</td>
            <td>${j.puntos} pts</td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', cargarRanking);