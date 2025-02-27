<template>
  <div class="flex justify-between py-3 flex-row items-center w-screen px-4">
    <div></div>
    <NuxtLink to="/">
      <NuxtImg src="/img/logo.png" class="h-15 sm:h-20 sm:w-min w-auto"></NuxtImg>
    </NuxtLink>
    <div class="text-white">
      <NuxtLink to="/cart" class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sm:size-8 size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <span v-if="getProductLength > 0" class="animate__animated animate__fadeIn absolute top-0 end-0 inline-flex items-center sm:w-5 sm:h-5 w-4 h-4 justify-center rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-yellow-400 text-stone-950" v-html="getProductLength"></span>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useCartStore} from "~/stores/cart";

const store = useCartStore()
const getProductLength = computed(() => store.getCartLength)
</script>