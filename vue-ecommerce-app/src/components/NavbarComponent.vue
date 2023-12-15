<template>
  <div>
    <nav class="flex justify-between bg-slate-700 p-1">
      <div class="flex items-center">
        <span
          class="p-4 font-bold uppercase text-white text-3xl lg:text-3xl xl:text-5xl"
        >
          e-commerce
        </span>
      </div>
      <div class="flex items-center space-x-4 text-white">
        <router-link
          to="/"
          :class="{
            'bg-white text-black': $route.path === '/',
            'text-gray-300 ': $route.path !== '/',
          }"
          class="p-1 rounded-md text-sm font-medium group inline-block relative hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <div
            class="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 bg-gray-200"
          >
            <p class="font-semibold mt-2">{{$t("Home")}}</p>
          </div>
        </router-link>

        <router-link
          to="/allProducts"
          :class="{
            'bg-white text-black': $route.path === '/allProducts',
            'text-gray-300 hover:text-white': $route.path !== '/allProducts',
          }"
          class="px-3 py-2 rounded-md text-sm font-medium uppercase"
        >
          {{$t("Products")}}
        </router-link>

        <router-link
          to="/contactus"
          :class="{
            'bg-white text-black': $route.path === '/contactus',
            'text-gray-300 ': $route.path !== '/contactus',
          }"
          class="p-1 rounded-md text-sm font-medium group inline-block relative hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
            />
          </svg>

          <div
            class="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 bg-gray-200"
          >
            <p class="font-semibold mt-2">{{$t("support")}}</p>
          </div>
        </router-link>

        <router-link
          to="/cart"
          :class="{
            'bg-white text-black': $route.path === '/cart',
            'text-gray-300 ': $route.path !== '/cart',
          }"
          class="p-1 rounded-md text-sm font-medium group inline-block relative hover:text-black"
        >
          <span
            v-if="totalCartQuantity > 0"
            class="absolute right-0 bg-red-600 text-white px-2 py-1 rounded-full text-xs"
          >
            {{ totalCartQuantity }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="file: mt-4 h-10 w-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <div
            class="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 bg-gray-200"
          >
            <p class="font-semibold px-1">{{$t("cart")}}</p>
          </div>
        </router-link>

        <router-link
          to="/wishlist"
          :class="{
            'bg-white text-black': $route.path === '/wishlist',
            'text-gray-300 ': $route.path !== '/wishlist',
          }"
          class="p-1 rounded-md text-sm font-medium group inline-block relative hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-9 h-9"
          >
            <path
              fill-rule="evenodd"
              d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            />
          </svg>

          <div
            class="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 bg-gray-200"
          >
            <p class="font-semibold mt-2">{{$t("wishlist")}}</p>
          </div>
        </router-link>
        <Languages></Languages>

        <div>
          <button
            class="text-gray-300 p-1 rounded-md text-sm font-medium group inline-block relative hover:text-black"
            @click="logout"
          >
            <img
              v-if="cartStore.isAuthenticated && cartStore.image"
              :src="userImage"
              alt="userImage"
            />

            <span>{{ userName }}</span>
            <!-- <p>{{ userMail }}</p> -->
            <div
              class="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 bg-gray-200"
            >
              ..
              <p class="font-semibold mt-1">{{$t("signout")}}</p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, reactive } from "vue";
import Languages from "./Languages.vue";
import { createRouter, createWebHistory } from "vue-router";
import { useCartStore } from "../store/CartStore.store";
import { myMSALObj, graphScopes } from "../store/AuthStore";
import axios from "axios";

const image = ref<string | null>(null);
const userName = ref("");
const userImage = ref("");
const userMail = ref("");

const cartStore = useCartStore();
const itemsInCart = cartStore.itemsInCart;

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

let accessToken = ref("");

let account: Object = reactive({
  name: "",
  username: "",
  profileImageUrl: "",
});

const totalCartQuantity = computed(() => {
  return itemsInCart.reduce((total, item) => total + item.quantity, 0);
});

const logout = async (): Promise<void> => {
  const confirmLogoutMessage = confirm("Are you sure you want to Logout?");
  if (confirmLogoutMessage) {
    try {
      await myMSALObj.logout();
      localStorage.clear();
      localStorage.removeItem("clientId");
      cartStore.isAuthenticated = false;
      account = { name: "", username: "" };
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  }
};

const fetchUserProfileImage = async () => {
  try {
    const user = myMSALObj.getAccount();
    userName.value = user.name;
    userMail.value = user.userName;
    console.log(userName.value);
    // console.log("before image", userImage)
    if (user && user.idTokenClaims && user.idTokenClaims.picture) {
      userImage.value = user.idTokenClaims.picture; // Set the userImage to the profile image URL
      console.log(userImage.value);
    }
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  fetchUserProfileImage();
});

const getProfileImage = async (accessToken: string) => {
  try {
    const headers = { Authorization: `Bearer ${accessToken}` };
    const response = await axios.get(
      "https://graph.microsoft.com/v1.0/me/photo/$value",
      { headers, responseType: "arraybuffer" }
    );
    const blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });
    const imageUrl = URL.createObjectURL(blob);
    cartStore.image = imageUrl;
    return imageUrl;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const data = reactive({
  name: "",
  username: "",
  profileImageUrl: "",
});
</script>
