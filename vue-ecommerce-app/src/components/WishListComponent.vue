<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="mt-8 pl-40">
      <h2
        class="text-2xl font-semibold mb-4 p-3 italic mt-2 rounded-tl-3xl rounded-br-3xl bg-slate-400 inline-block"
      >
        Wish List
      </h2>
      <table class="min-w-full border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th v-for="rowName in tableNames" :key="rowName" class="py-2 px-4 text-left uppercase">{{$t(rowName)}}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in wishList"
            :key="item.id"
            class="border-b border-gray-300"
          >
            <td class="py-2 px-4">{{ $t(item.name) }}</td>
            <td class="py-2 px-4">
              <img
                :src="item.image"
                alt="Product"
                class="w-10 h-10 object-contain"
              />
            </td>
            <td class="py-2 px-4">{{ item.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "../store/CartStore.store";
import NavbarComponent from "./NavbarComponent.vue";

const tableNames = ["NAME", "PRODUCT", "QUANTITY"]

const cartStore = useCartStore();
const wishList = cartStore.wishList;
</script>
