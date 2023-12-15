<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="container mx-auto">
      <span
        class="text-2xl font-semibold mb-4 p-1 italic mt-2 rounded-tl-3xl rounded-br-3xl bg-slate-400 inline-block"
        >{{$t("Shopping Cart")}}</span
      >
      <table class="min-w-full border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <!-- Can be used via v-for  -->
            <th
              v-for="tableRow in tableRows"
              :key="tableRow"
              class="py-2 px-4 text-left uppercase"
            >
              {{$t(tableRow)}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in itemsInCart"
            :key="item.id"
            class="border-b border-gray-300 italic"
          >
            <td class="py-2 px-4">{{ $t(item.name) }}</td>
            <td class="py-2 px-4">
              <img
                :src="item.image"
                alt="Product"
                class="w-16 h-16 object-contain"
              />
            </td>
            <td class="py-2 px-4">
              <div class="h-16 w-1/4 flex items-center justify-items-stretch">
                <div class="flex">
                  <button
                    class="bg bg-slate-500 px-2 m-2 rounded text-white"
                    @click="decreaseQuantity(item)"
                  >
                    -
                  </button>
                  <strong class="m-2">{{ item.quantity }}</strong>

                  <button
                    class="bg bg-slate-500 px-2 m-2 rounded text-white"
                    @click="increaseQuantity(item)"
                  >
                    +
                  </button>
                </div>
              </div>
            </td>

            <td class="py-2 px-4">Rs: {{ item.price * item.quantity }}</td>
            <td class="py-2 px-4">
              <div class="flex space-x-8">
                <div class="group inline-block relative">
                  <svg
                    @click="removeItem(item)"
                    class="w-6 h-6 text-gray-800 dark:text-white hover:cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path
                      d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z"
                    />
                  </svg>

                  <div
                    class="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 bg-gray-200"
                  >
                    <p class="font-semibold">{{$t("Delete")}}</p>
                  </div>
                </div>

                <div class="group inline-block relative hover:cursor-pointer">
                  <svg
                    @click="onAddToWishlist(item)"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>

                  <div
                    class="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 bg-gray-200"
                  >
                    <p class="font-semibold">{{$t("Add to Wishlist")}}.</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mt-8 text-center">
        <button
          @click="getTotalPrice"
          v-if="!showTotal"
          class="font-bold text-right p-1 bg bg-yellow-500 hover:bg-yellow-700 rounded text-white"
        >
          {{$t("Get Total Price")}}
        </button>
        <div class="flex justify-end">
          <p v-if="showTotal" class="text-5xl font-bold pr-12 italic">
            {{$t("Total")}}: INR {{ calculateTotalPrice() }}
          </p>
        </div>
      </div>
      <div class="text-end mt-5">
        <button
          @click="checkout"
          class="bg bg-blue-400 hover:bg-blue-700 text-white text-2xl rounded p-2 font-semibold"
        >
          {{ $t("Check out") }}
        </button>
      </div>
      <hr class="border-red-900 mt-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from "./NavbarComponent.vue";
import { useCartStore } from "../store/CartStore.store";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();

interface Product {
  id: number;
  name: String;
  quantity: number;
  price: number;
  image: string;
}

const cartStore = useCartStore();
const itemsInCart = cartStore.itemsInCart;

const increaseQuantity = (item: Product) => {
  item.quantity++;
};

const decreaseQuantity = (item: Product) => {
  if (item.quantity > 1) {
    item.quantity--;
  }
};

const removeItem = (item: Product) => {
  const confirmRemove = confirm(
    `Are you sure you want to remove ${item.name} from the cart ?`
  );
  if (confirmRemove) {
    toast.warning(`${item.name} Removed from the Cart Successfully 🎉`);
    cartStore.removeItemFromCart(item);
  }
};

const onAddToWishlist = (item: Product) => {
  const addWishListConfirmMessage = confirm(
    `Are you sure you want add ${item.name} to wishlist?`
  );
  if (addWishListConfirmMessage) {
    cartStore.removeItemFromCart(item); // Remove from itemsInCart
    cartStore.addToWishlist(item); // Add to wishlist
    toast.success(`${item.name} Added to Wishlist  Successfully 🎉`);
  }
};

const tableRows = ["NAME", "PRODUCT", "QUANTITY", "PRICE", "ACTION"];

const calculateTotalPrice = () => {
  return itemsInCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};
const showTotal = ref(false);
const getTotalPrice = () => {
  showTotal.value = true;
};

function checkout() {
  if (itemsInCart.length === 0) {
    toast.warning("Your cart is empty. Add some products before checking out.");
  } else {
    cartStore.$reset();
    toast.success("Checked out Successfully!");
  }
}
</script>
