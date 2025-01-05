import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

export function initializeMenu() {
    const authMenuItem = document.getElementById('authMenuItem');
    
    onAuthStateChanged(auth, (user) => {
        if (authMenuItem) {
            if (user) {
                authMenuItem.innerHTML = '<a href="/perfilUsuario.html">Perfil</a>';
            } else {
                authMenuItem.innerHTML = '<a href="./inicioSesion.html">Iniciar Sesión</a>';
            }
        }
    });
}