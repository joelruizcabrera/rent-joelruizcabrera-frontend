<template>
  <div class="flex justify-center py-3 flex-row items-center w-screen px-4 relative">
    <NuxtLink to="/">
      <NuxtImg src="/img/logo.png" class="h-15 sm:h-20 sm:w-min w-auto"></NuxtImg>
    </NuxtLink>
    <div class="text-white pe-3 absolute end-4">
      <NuxtLink to="/cart">
        <div class="relative">
          <ShoppingBagIcon class="sm:size-8 size-6"></ShoppingBagIcon>
          <span v-if="getProductLength > 0" class="animate__animated animate__fadeIn absolute top-0 end-0 inline-flex items-center sm:w-5 sm:h-5 w-4 h-4 justify-center rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-yellow-400 text-stone-950" v-html="getProductLength"></span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useCartStore} from "~/stores/cart";
import {ShoppingBagIcon} from "@heroicons/vue/24/outline";

const store = useCartStore()
const getProductLength = computed(() => store.getCartLength)
</script>