import { auth } from './firebase-config.js';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { cargarPerfilUsuario, cargarMascotas, cargarCitas } from '/scripts/userProfile.js';

export function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

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
        return true;
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        showNotification('Error al cerrar sesión: ' + error.message, 'error');
        return false;
    }
}

function updateUIForAuthState(user) {
    if (window.location.pathname.includes('inicioSesion.html')) {
        const loginSection = document.getElementById('login');
        const perfilSection = document.getElementById('perfil');
        
        if (user) {
            loginSection.style.display = 'none';
            perfilSection.style.display = 'block';
            cargarPerfilUsuario();
            cargarMascotas();
            cargarCitas();
        } else {
            loginSection.style.display = 'block';
            perfilSection.style.display = 'none';
        }
    }
}

export function initAuth() {
    onAuthStateChanged(auth, (user) => {
        updateUIForAuthState(user);
    });
}
document.addEventListener('DOMContentLoaded', initAuth);