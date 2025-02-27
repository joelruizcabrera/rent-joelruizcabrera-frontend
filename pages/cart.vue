<template>
  <div class="px-4">
    <h1 class="font-black italic text-white text-4xl py-4">ANFRAGE</h1>
    <div class="grid md:grid-cols-2 grid-cols-1">
      <div class="">
        <div class="text-white bg-linear-to-t from-neutral-950 to-neutral-900 p-3 rounded-lg inset-shadow-sm inset-shadow-neutral-900 border-neutral-800 border-2 shadow-neutral-900 shadow-lg group">
          <div class="flex flex-col">
            <div v-for="item in lineItems" :key="item.id" class="gap-x-2 w-full items-center flex flex-row justify-between py-2 first:pt-0 last:pb-0 border-b-neutral-700 last:border-b-0 border-b-1">
              <div class="flex flex-row gap-x-4">
                <NuxtImg :src="productInfo(item.id).getThumbnail()" class="w-15 h-15 shadow-lg object-cover rounded"></NuxtImg>
                <div class="flex flex-col">
                  <NuxtLink :to="'/product/' + item.id">
                    <span class="text-white text-md italic font-black hover:underline uppercase leading-none" v-html="item.name"></span>
                  </NuxtLink>
                  <div class="flex flex-row">
                    <span class="text-white text-xs font-bold" v-for="feature in productInfo(item.id).getFeatures()" v-html="feature" :key="feature"></span>
                  </div>
                  <span class="text-neutral-300 text-xs font-thin pt-0.5" v-html="'Zeitraum: ' + item.requestRange.fromStamp + ' - ' + item.requestRange.toStamp + ' (' + (item.requestRange.daysCount === 1 ? 'Ein Tag' : item.requestRange.daysCount + ' Tage') + ')'"></span>
                  <div class="flex flex-row gap-x-1 pt-2">
                    <span class="font-black text-xl leading-none" v-html="item.netPrice + '€'"></span>
                    <span class='font-thin text-xl self-start leading-none'>*</span>
                  </div>
                </div>
              </div>
              <button @click="removeProduct(item.id)" class="aspect-square inset-shadow-sm shadow-md w-10 h-10 rounded bg-linear-to-t from-yellow-300 via-yellow-400 to-yellow-600 hover:from-red-400 hover:via-red-500 hover:to-red-700 transition-all text-gray-900 hover:inset-shadow-red-200 hover:shadow-red-500/50 hover:text-white inset-shadow-yellow-200 shadow-yellow-500/50 hover:cursor-pointer hover:shadow-lg hover:inset-shadow-lg focus:outline-none transition flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <p class="self-center text-neutral-500 font-thin text-[.75rem] mt-1 animate__animated animate__fadeInUp anim-delay-20">* Preise exkl. MwSt. und Kaution</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Product} from '~/utils/Products'
import { useCartStore } from '~/stores/cart'
const store = useCartStore()
const lineItems = computed(() => store.getProducts)

const productInfo = (id: number) => {
  return new Product(id)
}

const removeProduct = (id: number) => {
  store.removeProduct(id)
}
</script>