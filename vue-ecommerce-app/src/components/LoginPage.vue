<template>
  <div
    class="flex justify-center items-center h-screen main-container relative"
  >
    <div class="text-center p-16">
      <button
        class="relative bg bg-slate-600 rounded px-10 py-5 text-white font-bold hover:bg-black text-3xl uppercase z-10"
        @click="login"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createRouter, createWebHistory } from "vue-router";
import { myMSALObj, graphScopes } from "../store/AuthStore";
import { useCartStore } from "../store/CartStore.store";

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

const cartStore = useCartStore();
const login = async () => {
  try {
    await myMSALObj.loginPopup(graphScopes);
    localStorage.setItem("clientId", myMSALObj.clientId);
    cartStore.isAuthenticated = true; // Set isSuccessAuthenticated to true
    router.push("/home");
  } catch (err) {
    console.error(err);
  }
};
</script>

<style scoped>
.main-container {
  /* background-image: url('https://as1.ftcdn.net/v2/jpg/06/23/78/54/1000_F_623785447_u9278R87srMPRVxFlcZbyRijTLswyqQM.jpg'); */
  background-image: url("https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?size=626&ext=jpg&uid=R114168890&ga=GA1.2.574927477.1681384381&semt=sph8890&ga=GA1.2.54927477.1681384381&semt=sph");
  height: 100vh;
  width: 100vw;
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
