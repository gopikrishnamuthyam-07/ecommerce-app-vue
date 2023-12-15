<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="text-3xl font-semibold mb-4">{{ $t("Contact us") }}</div>
      <div class="flex items-center space-x-4">
        <svg
          class="w-10 h-10 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v18M5 9l7-7 7 7"
          ></path>
        </svg>
        <span class="text-xl text-gray-700 hover:cursor-pointer"
          >{{$t("Call Us")}}:
          <span @click="onNumClick" class="text-blue-500"
            >040-{{ randomNumber }}</span
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
import NavbarComponent from "./NavbarComponent.vue";

const randomNumber = ref("");

onMounted(() => {
  // Generate a random 10-digit number
  randomNumber.value = String(
    Math.floor(1000000000 + Math.random() * 9000000000)
  );
});

const onNumClick = () => {
  const confirmCall = confirm("Are you sure you want to call?");
  if (confirmCall) {
    toast.error("Sorry for the inconvenienc: This service is not Started Yet");
  }
};
</script>
