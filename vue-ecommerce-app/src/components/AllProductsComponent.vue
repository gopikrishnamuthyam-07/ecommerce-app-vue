<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="flex flex-wrap gap-5">
      <ProductCard
        v-for="product in productData"
        :key="product.id"
        :product="product"
        @add="clickMe"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Products from "../db.json";
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
import NavbarComponent from "./NavbarComponent.vue";
// import NavbarComponent from "./NavbarComponent.vue"

const productData = ref(Products.products);

//emitting the event form child i.e ProductCard.vue
function clickMe(product: Object) {
  // alert(productData);
}
</script>
