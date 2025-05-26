// src/plugins/axios.ts
import axios from 'axios';
import { useAuthStore } from '@/stores/auth'; // Importamos el store de autenticación

// Usamos import.meta.env para variables de entorno de Vite
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://localhost:44362/1.0';

const api = axios.create({
  baseURL: API_BASE_URL,
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Interceptor para añadir el token de autenticación a cada solicitud
api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore(); // Accede al store de Pinia
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta (ej. 401 Unauthorized)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const authStore = useAuthStore();
      authStore.logout(); // Cierra sesión si el token no es válido o ha expirado
      // Opcional: Redirigir a la página de login
      // router.push('/login'); // Necesitarías inyectar el router aquí o usar un guard en main.ts
    }
    return Promise.reject(error);
  }
);

export default api;