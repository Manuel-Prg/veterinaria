import { auth } from './firebase-config.js';

export function cargarPerfilUsuario() {
    const user = auth.currentUser;
    if (user) {
        const nombreElement = document.getElementById('nombreUsuario');
        const emailElement = document.getElementById('emailUsuario');
        
        if (nombreElement) nombreElement.textContent = user.displayName || 'No disponible';
        if (emailElement) emailElement.textContent = user.email;
    }
}

export function cargarMascotas() {
    const listaMascotas = document.getElementById('listaMascotas');
    if (listaMascotas) {
        listaMascotas.innerHTML = '<li>No hay mascotas registradas</li>';
    }
}

export function cargarCitas() {
    const listaCitas = document.getElementById('listaCitas');
    if (listaCitas) {
        listaCitas.innerHTML = '<li>No hay citas programadas</li>';
    }
}

export function editarPerfil() {
    alert("Función para editar perfil");
}

export function agregarMascota() {
    alert("Función para agregar mascota");
}

