import { defineStore } from "pinia";
import { ref } from "vue";

interface Product {
  id: number;
  name: String;
  quantity: number;
  price: number;
  image: string;
}

export const useCartStore = defineStore("cartStore", () => {
  const itemsInCart = ref<Product[]>([]);
  const isAuthenticated = ref(false);
  const image = ref("");
  const wishList = ref<Product[]>([]);

  const addItemToCart = (product: Product) => {
    // console.log('product', product.name)
    itemsInCart.value.push(product);
  };

  const removeItemFromCart = (product: Object) => {
    const index = itemsInCart.value.findIndex((item) => item === product);
    if (index !== -1) {
      itemsInCart.value.splice(index, 1);
    }
  };

  const addToWishlist = (product: Product) => {
    if (!wishList.value.some((item) => item.id === product.id)) {
      wishList.value.push(product);
    }
  };
  const removeFromWishlist = (product: Product) => {
    const index = wishList.value.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      wishList.value.splice(index, 1);
    }
  };

  function $reset() {
    itemsInCart.value = [];
  }

  return {
    itemsInCart,
    addItemToCart,
    removeItemFromCart,
    wishList,
    addToWishlist,
    removeFromWishlist,
    isAuthenticated,
    image,
    $reset,
  };
});
