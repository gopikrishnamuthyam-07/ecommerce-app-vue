<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="relative">
      <img
        class="back-image"
        src="https://img.freepik.com/free-vector/modern-sale-banner-with-text-space-area_1017-27331.jpg?w=1060&t=st=1693399489~exp=1693400089~hmac=89fa06d0917a9ea0e335029d1e77796adc5981b0bcef3550cdb0c21a90f7e075"
        alt=""
      />
      <div>
        <h1
          class="text-white md:text-1xl lg:text-2xl xl:text-3xl font-bold absolute top-1/3 left-1/4 transform -translate-x-1/2 uppercase"
        >
          {{$t("Best Deals for you") }}🎉🎉
        </h1>

        <router-link
          to="/allProducts"
          class="absolute top-1/3 mt-16 xl:left-72"
        >
          <button
            class="bg-black hover:bg-white hover:text-black text-white px-16 py-6 text-3xl rounded-full uppercase font-bold"
          >
           {{ $t("check here")}}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from "./NavbarComponent.vue";
</script>

<style scoped>
.back-image {
  height: 91vh;
  width: 100vw;
  background-size: 100%;
  background-repeat: no-repeat;
  /* background-image: url(D:\Interns-FE\Interns-FE\E-COMMERCE-APP\vue-ecommerce-app\src\assets\27331.jpg); */
}

</style>
