const jugadores = [
    { pos: 1, nombre: "María José Vargas", puntos: 2840 },
    { pos: 2, nombre: "Natalia Méndez", puntos: 2410 },
    { pos: 3, nombre: "Diego García", puntos: 1950 },
    { pos: 4, nombre: "Gerson Miranda", puntos: 1720 },
    { pos: 5, nombre: "Fernando Kurzbard", puntos: 1500 }
];

function cargarRanking() {
    const tabla = document.getElementById('ranking-body');
    if(!tabla) return;
    tabla.innerHTML = jugadores.map(j => `
        <tr>
            <td style="width: 50px;"><strong>#${j.pos}</strong></td>
            <td>${j.nombre}</td>
            <td style="text-align: right; color: #74ACDF; font-weight: bold;">${j.puntos} pts</td>
        </tr>
    `).join('');
}

document.addEventListener('DOMContentLoaded', cargarRanking);