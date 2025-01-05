import { auth } from './firebase-config.js';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { cargarPerfilUsuario, cargarMascotas, cargarCitas } from '/scripts/userProfile.js';

export function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.classList.add('notification', type, 'animate'); // Agregamos la clase animate
    notification.textContent = message;
    document.body.appendChild(notification);

    // Mostrar la notificación con animación
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Ocultar y remover la notificación
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

export async function iniciarSesion(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        showNotification('Inicio de sesión exitoso', 'success');
        setTimeout(() => {
            window.location.href = './perfilUsuario.html';
        }, 1000);
        return true;
    } catch (error) {
        console.error('Error de inicio de sesión:', error);
        showNotification('Error de inicio de sesión: ' + error.message, 'error');
        return false;
    }
}

export async function cerrarSesion() {
    try {
        await signOut(auth);
        showNotification('Has cerrado sesión correctamente', 'success');
        setTimeout(() => {
            window.location.href = './index.html';
        }, 1000); // Espera 1 segundo para mostrar la notificación antes de redirigir
        return true;
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        showNotification('Error al cerrar sesión: ' + error.message, 'error');
        return false;
    }
}

function updateUIForAuthState(user) {
    const currentPath = window.location.pathname;
    
    if (user) {
        if (currentPath.includes('inicioSesion.html')) {
            window.location.href = './perfilUsuario.html';
        }
    } else {
        if (currentPath.includes('perfilUsuario.html')) {
            window.location.href = './inicioSesion.html';
        }
    }
}

export function initAuth() {
    onAuthStateChanged(auth, (user) => {
        updateUIForAuthState(user);
    });
}

document.addEventListener('DOMContentLoaded', initAuth);