<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg md:w-1/4">
      <img
        :src="product.image"
        :alt="product.name"
        class="object-cover w-full mb-4"
      />
      <h2 class="text-xl font-semibold">{{ $t(product.name) }}</h2>
      <p class="text-gray-600 mb-2">Rs: {{ product.price }}</p>
      <div class="flex">
      <button
        @click="addToCart"
        class="bg-blue-500 rounded text-white px-1 font-bold hover:bg-blue-800"
      >
        {{$t("Add To Cart")}}
      </button>
      <button
        @click="$emit('closeModal')"
        class="bg-gray-300 rounded px-4 py-2 ml-2 font-bold hover:bg-gray-400"
      >
        {{$t("Close")}}
      </button>

      <router-link
        to="/cart"
        class="bg bg-red-400 rounded p-2 text-white ml-2 font-semibold"
        >{{$t("Open Cart")}}</router-link
      >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "../store/CartStore.store";
import { useToast } from "vue-toastification";
import { ref } from "vue";

const isOpen = ref(true);

const props = defineProps(["product", "isModalOpen"]);
const cartStore = useCartStore();
const toast = useToast();

const addToCart = () => {
  const addItemConfirmation = confirm(
    `Are you sure you want ${props.product.name} to cart`
  );
  if (addItemConfirmation) {
    toast.success(`${props.product.name} Added to Cart Successfully 🎉`);
    const existingItem = cartStore.itemsInCart.find(
      (item) => item.id === props.product.id
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem = { ...props.product, quantity: 1 };
      cartStore.addItemToCart(newItem);
    }
  }
  isOpen.value = false;
};
</script>
