import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayoutVue from '@/layouts/DefaultLayout.vue'
import DefaultNotLoginLayout from '@/layouts/DefaultNotLoginLayout.vue'
import BlankLayoutVue from '@/layouts/BlankLayout.vue'
// import { useMainStore } from '@/stores/main'
// const mainStore = useMainStore()

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: HomeView,
    meta: {
      layout: DefaultLayoutVue,
      requiereAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      layout: DefaultLayoutVue
      // layout: BlankLayoutVue
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      layout: DefaultNotLoginLayout
      // layout: BlankLayoutVue
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



router.beforeEach((to, from, next) => {
  const isAuthenticated = /* Lógica para verificar si el usuario está autenticado (ej. de tu store de Pinia) */ true; // Reemplaza con tu lógica real
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' }); // Redirige al login si requiere auth y no está autenticado
  } else {
    next(); // Continúa normalmente
  }
});

export default router



// 

// router.beforeEach(async (to, from) => {
//     const store = mainStore
//     if (to.name != 'login' && to.name != 'register') {
//         var auth = store.loginState
//         if (!auth) {
//             return { name: 'login' }
//         }
//     }
// })





// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//       meta:{
//         layout: mainVue
//       }
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue'),
//       meta:{
//         layout: mainVue
//       }
//     }
//   ]
// })
// export default router


// src/router/index.ts

// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// // Importa tus layouts
// import DefaultLayout from '@/layouts/DefaultLayout.vue'; // Asegúrate de crear esta carpeta
// import AuthLayout from '@/layouts/AuthLayout.vue';
// import BlankLayout from '@/layouts/BlankLayout.vue';

// // Define tus rutas
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     component: DefaultLayout, // Asigna un layout a esta ruta raíz
//     children: [
//       {
//         path: '', // Ruta vacía para ser el componente principal de la ruta '/'
//         name: 'home',
//         component: () => import('@/pages/HomePage.vue'), // Importa dinámicamente tu página
//         meta: {
//           title: 'Inicio', // Opcional: metadatos para la página
//           requiresAuth: true // Ejemplo de meta para protección de rutas
//         }
//       },
//       {
//         path: 'dashboard',
//         name: 'dashboard',
//         component: () => import('@/pages/DashboardPage.vue'),
//         meta: {
//           title: 'Dashboard',
//           requiresAuth: true
//         }
//       },
//       // ... más rutas que usen DefaultLayout
//     ],
//   },
//   {
//     path: '/auth',
//     component: AuthLayout, // Layout para rutas de autenticación
//     children: [
//       {
//         path: 'login',
//         name: 'login',
//         component: () => import('@/pages/auth/LoginPage.vue'), // Páginas de autenticación
//         meta: {
//           title: 'Iniciar Sesión',
//           requiresAuth: false // No requiere autenticación
//         }
//       },
//       {
//         path: 'register',
//         name: 'register',
//         component: () => import('@/pages/auth/RegisterPage.vue'),
//         meta: {
//           title: 'Registro',
//           requiresAuth: false
//         }
//       }
//     ]
//   },
//   {
//     path: '/:pathMatch(.*)*', // Catch-all route para 404
//     name: 'NotFound',
//     component: BlankLayout, // Un layout simple para el 404
//     children: [
//       {
//         path: '',
//         component: () => import('@/pages/NotFoundPage.vue'),
//         meta: { title: 'Página no encontrada' }
//       }
//     ]
//   }
// ];

// const router = createRouter({
//   history: createWebHistory(), // Para usar historial HTML5 (URLs limpias)
//   routes,
// });

// // Opcional: Guardianes de ruta (Guards) para lógica de autenticación
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = /* Lógica para verificar si el usuario está autenticado (ej. de tu store de Pinia) */ true; // Reemplaza con tu lógica real

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next({ name: 'login' }); // Redirige al login si requiere auth y no está autenticado
//   } else {
//     next(); // Continúa normalmente
//   }
// });

// export default router;