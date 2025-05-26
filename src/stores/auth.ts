// src/stores/auth.ts
import { defineStore } from 'pinia';
import api from '@/plugins/axios'; // Nuestra instancia configurada de Axios
import router from '@/router'; // Importamos el router para redirecciones
import { useModelAlertPersistentStore } from '@/stores/modelAlertPersistent';
import { useModelProgressStore } from '@/stores/modelProgress';
const modelProgress = useModelProgressStore();
const modelAlertPersistent = useModelAlertPersistentStore();

// VARIABLES DE ENTORNO

interface User {
  id: string;
  name: string;
  email: string;
  // Añade más propiedades de usuario si las tienes
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  error: string | null; // Para mensajes de error
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: localStorage.getItem('authToken') || null, // Intenta cargar el token del localStorage
    isLoggedIn: !!localStorage.getItem('authToken'), // Basado en la existencia del token
    error: null,
  }),

  getters: {
    isAuthenticated: (state) => state.isLoggedIn,
    currentUser: (state) => state.user,
    authToken: (state) => state.token,
    authError: (state) => state.error,
  },

  actions: {
    async login(credentials: { username: string; password: string }) {
      this.error = null;
      try {
        modelProgress.actionActiveProgress(
            true,
            'indigo'
        )
        // Simulación de la llamada a la API de login
        // Reemplaza esto con tu endpoint real y estructura de respuesta
        const response = await api.post('/Auth/Login', {
          Username: credentials.username,
          Password: credentials.password,
          reCAPTCH:"sss"
        });

        // Asumiendo que tu API devuelve el token y los datos del usuario así:
        // const { token, dataUser } = response.data.value[0]; // Ajusta según tu estructura de respuesta
        const token = response.data.value[0]; // Ajusta según tu estructura de respuesta


        this.token = token;
        // this.user = {
        //   id: dataUser.numberId,
        //   name: dataUser.name,
        //   email: dataUser.email,
        //   // Mapea otras propiedades de dataUser a tu User interface
        // };
        this.isLoggedIn = true;

        // Guarda el token en localStorage para persistencia
        // localStorage.setItem('authToken', token);
        // localStorage.setItem('userData', JSON.stringify(this.user)); // Guarda también los datos del usuario si son pequeños

        // Redirige al dashboard después del login exitoso
        router.push('/dashboard'); // Usamos el router importado

      } catch (error: any) {
        modelAlertPersistent.actionActiveDialog(
            false,
            true,
            'Erro al iniciar sesion',
            'Error',
            'error',
            '$error' // Ejemplo de ícono de MDI
        );
        // this.error = error.response?.data?.message || 'Error al iniciar sesión.';
        // this.isLoggedIn = false;
        this.token = null;
        // this.user = null;
        // console.error('Login error:', error);
      } finally {
        modelProgress.closeProgress()
      }
    },

    logout() {
    //   this.user = null;
      this.token = null;
    //   this.isLoggedIn = false;
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      // Redirige a la página de login
      router.push('/auth/login');
    },

    // Opcional: Acción para verificar el token al cargar la app
    async checkAuth() {
      if (this.token) {
        // Si hay token pero no datos de usuario (ej. refresco de página)
        // Podrías intentar obtener los datos del usuario con una llamada a la API
        try {
          const response = await api.get('/user/profile'); // O tu endpoint para obtener perfil
        //   this.user = response.data.data; // Asume que devuelve los datos del usuario
        //   this.isLoggedIn = true;
        } catch (error) {
        //   console.error("Failed to re-authenticate or fetch user data", error);
          this.logout(); // Si falla, invalida la sesión
        }
      }
    }
  },
});