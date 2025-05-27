<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card class="elevation-1 pa-3">
          <v-card-text>
            <div class="d-flex flex-column align-center">
              <h3>LOGIN</h3>
            </div>
            <div class="d-flex flex-column align-center mt-3 mb-5">
              <!-- <img
                src="/LOGO_SmartBootGROUP.png"
                alt="Logo SmartBoot"
                width="50%"
                height="50%"
              /> -->
            </div>
            <v-form ref="loginForm" v-model="formValid">
              <v-text-field
                prepend-inner-icon="mdi-account"
                label="Usuario"
                type="text"
                v-model="username"
                :rules="[rules.required, rules.minLength(3)]"
                required
              ></v-text-field>
              <v-text-field
                prepend-inner-icon="mdi-lock"
                label="Contraseña"
                type="password"
                v-model="password"
                :rules="[rules.required, rules.minLength(6)]"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
              block
              color="primary"
              @click="handleLogin"
              :loading="false"
              :disabled="!formValid || false"
            >
              Login
            </v-btn>
          </v-card-actions>
          <v-card-actions class="d-flex justify-center mt-2">
            <v-btn
              block
              color="success"
              @click="routerRegisterUser"
              :loading="false"
              :disabled="false"
            >
              Registrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="snackbarTimeout"
      :color="snackbarColor"
      location="top right"
    >
      {{ snackbarText }}
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="snackbar = false"
          icon
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'; // Importamos el store de Pinia

const router = useRouter();
const authStore = useAuthStore(); // Instanciamos el store

// Estado del formulario
const username = ref('');
const password = ref('');
const loginForm = ref<HTMLFormElement | null>(null); // Referencia al formulario
const formValid = ref(false); // Estado de validez del formulario

// Validaciones para los campos (Vuetify rules)
const rules = {
  required: (value: string) => !!value || 'Campo requerido.',
  minLength: (len: number) => (value: string) => value.length >= len || `Debe tener al menos ${len} caracteres.`,
  email: (value: string) => /.+@.+\..+/.test(value) || 'Email no válido.',
};

// Estado del Snackbar
const snackbar = ref(false);
const snackbarText = ref('');
const snackbarColor = ref('');
const snackbarTimeout = ref(6000);

// Watcher para mostrar el snackbar cuando hay un error en el store
watch(() => authStore.authError, (newError) => {
  if (newError) {
    showSnackbar(newError, 'error');
  }
});

// Función para mostrar el snackbar
const showSnackbar = (text: string, color: string = 'info', timeout: number = 6000) => {
  snackbarText.value = text;
  snackbarColor.value = color;
  snackbarTimeout.value = timeout;
  snackbar.value = true;
};

// Manejador del botón de Login
const handleLogin = async () => {
  // Asegurarse de que el formulario es válido antes de enviar
  // `loginForm.value?.validate()` es un método de los componentes `v-form` de Vuetify
  const { valid } = await (loginForm.value as any).validate();

  if (valid) {
    await authStore.login({ username: username.value, password: password.value });
    // El store maneja la redirección. Si hay error, el watcher lo mostrará.
  } else {
    showSnackbar('Por favor, corrige los errores del formulario.', 'warning');
  }
};

// Redirección al registro
const routerRegisterUser = () => {
  router.push('/auth/registerUser');
};
</script>

<style scoped>
#login {
  background-color: var(--v-theme-primary); /* Usa la variable CSS de Vuetify para el color primario */
  height: 100vh; /* Ocupa toda la altura de la ventana */
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>