import { createRouter, createWebHistory } from 'vue-router'
import Home from "./pages/Home/Home.vue";
import Optika from "./pages/Optika/Optika.vue";
import Binokl from "./pages/Binokl/Binokl.vue";
import BinoklAbout from "./pages/BinoklAbout/BinoklAbout.vue"
import Kontakt from "./pages/Kontakt/Kontakt.vue"
import registratsiya from "./pages/registratsiya/registratsiya.vue"
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/registratsiya",
      name: "RegisterUser",
      component: registratsiya,
    },
    {
      path: "/optika",
      name: "Optika",
      component: Optika,
    },
    {
      path: "/binokl",
      name: "Binokl",
      component: Binokl,
    },
    {
      path: "/binokl_about",
      name: "BinoklAbout",
      component: BinoklAbout,
    },
    {
      path: "/kontakt",
      name: "Kontakt",
      component: Kontakt,
    }
  ]
})

export default router
