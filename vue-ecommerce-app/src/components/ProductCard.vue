<template>
  <div class="text-center p-2 shadow-xl">
    <div class="flex flex-col hover:cursor-pointer" @click="openModal">
      <img
        :src="product.image"
        alt="Product"
        style="object-fit: cover; width: 250px; height: 100%"
        class="cursor-pointer"
      />
      <h2 class="text-xl font-semibold pt-2">{{$t(product.name)}}</h2>
      <p class="text-gray-600 mb-2">Rs: {{ product.price }}</p>
    </div>
    <ProductModal
      v-if="isModalOpen"
      @closeModal="closeModal"
      :product="product"
      :isModalOpen="isModalOpen"
      @click="buttonClick"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "../store/CartStore.store";
import ProductModal from "./ProductModal.vue";

///emitting a event name called add from the child Product card component to All Products component
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["add"]);

function buttonClick() {
  emit("add");
}

const cartStore = useCartStore();
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>
