import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AllProductsComponent from "@/components/AllProductsComponent.vue";
import CartComponent from "@/components/CartComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import WishListComponent from "@/components/WishListComponent.vue";
import LoginPageVue from "@/components/LoginPage.vue";
import NotFound from "../components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPageVue,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/allProducts",
      component: AllProductsComponent,
    },
    { path: "/cart", component: CartComponent },
    {
      path: "/contactus",
      component: ContactComponent,
    },
    {
      path: "/wishlist",
      component: WishListComponent,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("clientId");
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
