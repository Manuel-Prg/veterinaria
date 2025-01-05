import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";

// Exportar la configuración
export const firebaseConfig = {
  apiKey: "AIzaSyDanIV08JWiadiZd_PlwoSnzbw1aYdGe8s",
  authDomain: "veterinaria-petcare-8d11d.firebaseapp.com",
  projectId: "veterinaria-petcare-8d11d",
  storageBucket: "veterinaria-petcare-8d11d.firebasestorage.app",
  messagingSenderId: "395391207762",
  appId: "1:395391207762:web:8c48aba5ab7bfa6b4dd28b",
  measurementId: "G-RC2PRQPDBX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);