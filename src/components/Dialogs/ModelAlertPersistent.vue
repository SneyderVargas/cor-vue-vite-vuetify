<template>
  <div class="text-center pa-4">
    <v-dialog v-model="isDialogOpen" max-width="400" persistent>
      <v-alert
        :text="modelAlertPersistent.Dialog.text"
        :title="modelAlertPersistent.Dialog.text_title"
        :type="modelAlertPersistent.Dialog.type"
        :icon="modelAlertPersistent.Dialog.icon"
        :closable="modelAlertPersistent.Dialog.active_closable"
      >
        </v-alert>
      <v-btn class="mt-3" :color="modelAlertPersistent.Dialog.type" block @click="closeModal">
        Ok
      </v-btn>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useModelAlertPersistentStore } from '@/stores/modelAlertPersistent';
import { storeToRefs } from 'pinia'; // Importa storeToRefs

const modelAlertPersistent = useModelAlertPersistentStore();

// Utiliza storeToRefs para desestructurar propiedades reactivas del store
// Esto mantiene la reactividad cuando usas las propiedades directamente en el template
const { Dialog } = storeToRefs(modelAlertPersistent);

// Computed para la visibilidad del diálogo (v-model)
const isDialogOpen = computed({
  get() {
    return Dialog.value.active;
  },
  set(newValue: boolean) {
    // Si el diálogo se cierra (newValue es false), llama a la acción para cerrar
    if (!newValue) {
      modelAlertPersistent.closeDialog();
    }
  },
});

// Función para manejar el clic en el botón "Ok"
const closeModal = () => {
  isDialogOpen.value = false; // Esto activará el setter de isDialogOpen y llamará a closeDialog
};

// Si necesitas un ejemplo de cómo "abrir" el diálogo desde otro componente:
// const showMyAlert = () => {
//   modelAlertPersistent.actionActiveDialog(
//     true,
//     'Este es el texto del mensaje de alerta.',
//     'Título de la Alerta',
//     'error',
//     'mdi-alert' // Ejemplo de ícono de MDI
//   );
// };
</script>

<style scoped>
/* No hay estilos específicos necesarios aquí, ya que el v-dialog y v-alert son componentes de Vuetify */
</style>


<!-- <script setup lang="ts">
import { useModelAlertPersistentStore } from '@/stores/modelAlertPersistent';
const modelAlertPersistent = useModelAlertPersistentStore();
import { ref, watch, computed } from 'vue';

const computedActiveDialog = computed({
    get() {
        return modelAlertPersistent.Dialog.active
    },
    set(newVal: boolean) {
        modelAlertPersistent.actionActiveDialog(newVal, "", "", "")
    }
})
const computedDataDialog = computed({
    get() {
        return modelAlertPersistent.Dialog
    },

    set() {

    }

})
// export default {
//     data() {
//         return {
//             dialog: false,
//         }
//     },
// }
</script>
<template>
    <div class="text-center pa-4">
        <v-dialog v-model="computedActiveDialog" max-width="400" persistent>
            <v-alert
            :text="computedDataDialog.text"
            :title=computedDataDialog.text_title 
            :type="computedDataDialog.type">
            </v-alert>
            <v-btn @click="computedActiveDialog = !computedActiveDialog">
                Ok
            </v-btn>
             mdi-map-marker -->
            <!-- <v-card :prepend-icon="computedDataDialog.icon" :text="computedDataDialog.text"
                :title=computedDataDialog.text_title>
                <template v-slot:actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="computedActiveDialog = !computedActiveDialog">
                        Disagree
                    </v-btn>

                </template>
            </v-card> 
        </v-dialog>
    </div>
</template> -->