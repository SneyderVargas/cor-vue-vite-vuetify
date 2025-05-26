import { defineStore } from 'pinia';
import { ref } from 'vue';

// Define la interfaz para el estado del diálogo
interface DialogState {
    active_closable: boolean;// activa x de cerrar
    active: boolean;
    text: string;
    text_title: string;
    type: 'success' | 'info' | 'warning' | 'error' | undefined; // Tipos de Vuetify VAlert
    icon?: string; // Opcional, si usas íconos en el diálogo
}


export const useModelAlertPersistentStore = defineStore('modelAlertPersistent', () => {
  // Estado reactivo para el diálogo
  const Dialog = ref<DialogState>({
    active_closable: true,
    active: false,
    text: '',
    text_title: '',
    type: undefined,
    icon: undefined,
  });

  /**
   * Acción para activar o desactivar el diálogo de alerta.
   * @param active_closable Indica si el diálogo puede quitarce.
   * @param active Indica si el diálogo debe estar activo.
   * @param text El texto principal del mensaje.
   * @param title El título del mensaje.
   * @param type El tipo de alerta (success, info, warning, error).
   * @param icon Opcional: el ícono de la alerta (ej. 'mdi-information').
   */
  function actionActiveDialog(
    active_closable: boolean,
    active: boolean,
    text: string = '',
    title: string = '',
    type: DialogState['type'] = undefined,
    icon: string = ''
  ) {
    Dialog.value.active_closable = active_closable;
    Dialog.value.active = active;
    Dialog.value.text = text;
    Dialog.value.text_title = title;
    Dialog.value.type = type;
    Dialog.value.icon = icon;
  }

  /**
   * Acción para simplemente cerrar el diálogo (resetear sus propiedades).
   */
  function closeDialog() {
    Dialog.value.active_closable = true;
    Dialog.value.active = false;
    Dialog.value.text = '';
    Dialog.value.text_title = '';
    Dialog.value.type = undefined;
    Dialog.value.icon = undefined;
  }

  return {
    Dialog,
    actionActiveDialog,
    closeDialog,
  };
});

// export const useModelAlertPersistentStore = defineStore('modelAlertPersistent',{

//     state: () => ({
//         //model dialog persisten
//         Dialog: {
//             active: false,
//             text_title: "",
//             text: "",
//             type: "" // success, info, warning, error
//         },
//     }),
//     actions: {
//         actionActiveDialog(val: boolean, title: string, text: string, type: string){
//             this.Dialog.active = val
//             this.Dialog.text_title = title
//             this.Dialog.text = text
//             this.Dialog.type = type
//         },
//     }
// })