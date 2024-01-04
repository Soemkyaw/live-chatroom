import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome.vue"
import LiveChatroom from "../views/LiveChatroom"
import {auth} from "../firebase/config"

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if (!user) {
        next();
      } else {
        next({ name: "LiveChatroom" });
      }
    },
  },
  {
    path: "/liveChat",
    name: "LiveChatroom",
    component: LiveChatroom,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if (user) {
        next();
      } else {
        next({ name: "Welcome" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
