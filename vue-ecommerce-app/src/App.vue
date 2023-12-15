<template>
  <div>
    <div v-if="cartStore.isAuthenticated">
      <router-view></router-view>
    </div>
    <div v-else>
      <LoginPage></LoginPage>
    </div>
  </div>
</template>

<script setup lang="ts">
// import NavbarComponent from './components/NavbarComponent.vue';
import { useCartStore } from "./store/CartStore.store";
import LoginPage from "./components/LoginPage.vue";
const cartStore = useCartStore();
</script>
