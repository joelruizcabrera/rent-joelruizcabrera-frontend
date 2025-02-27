<template>
  <div class="flex row bg-linear-to-t from-neutral-950 to-neutral-900 p-3 rounded-lg inset-shadow-sm inset-shadow-neutral-900 border-neutral-800 border-2 shadow-neutral-900 shadow-lg group">
    <div class="rounded-md lg:w-50 lg:min-w-50 lg:h-full w-full md:max-w-50 sm:max-w-40 max-w-30 min-w-30 h-max overflow-hidden">
      <NuxtLink
          :to="(product.active ? '/product/' + product.id : '#')"
          :aria-disabled="!product.active"
          :class="{'pointer-events-none': !product.active}"
          class="before:inset-shadow-lg relative before:absolute before:w-full before:h-full before:left-0 before:top-0"
          prefetch-on="interaction"
      >
        <NuxtImg
            :src="product.productTeaserCover"
            class="object-cover md:h-full aspect-square w-full shadow-md group-hover:scale-110 transition-all duration-300 ease">
        </NuxtImg>
      </NuxtLink>
    </div>
    <div class="h-full flex flex-col ps-4 justify-between py-1">
      <div>
        <h1 v-html="product.productName"
            class="text-white font-black italic uppercase sm:text-2xl text-xl leading-none">
        </h1>
        <p v-if="product.features?.length >= 1" class="leading-none">
          <span
              v-for="feature in product.features"
              :key="feature"
              v-text="feature"
              class="text-white text-xs font-light"
          ></span>
        </p>
        <StockDisplay :active="product.active"></StockDisplay>
      </div>
      <div>
        <div class="flex items-baseline gap-x-2">
          <span class="text-white md:text-md text-lg italic font-black leading-none"><span v-text="product.prices.perDay"></span>€</span>
          <span class="text-white text-xs font-light">/ pro Tag</span>
        </div>
        <NuxtLink
            :to="(product.active ? '/product/' + product.id : '#')"
            :aria-disabled="!product.active"
            :class="{'pointer-events-none': !product.active}"
            prefetch-on="interaction"
        >
          <button type="button"
                  class="text-gray-900 bg-gradient-to-t inset-shadow-sm shadow-md font-black rounded-lg text-sm px-5 py-2.5 text-center mt-2 transition duration-300 ease-[cubic-bezier(0.87, 0, 0.03, 0.97)] w-max"
                  :class="{
                    'from-yellow-300 via-yellow-400 to-yellow-600 inset-shadow-yellow-200 shadow-yellow-500/50 hover:cursor-pointer hover:shadow-lg hover:inset-shadow-lg focus:outline-none': product.active,
                    'from-stone-300 via-stone-400 to-stone-500 inset-shadow-stone-200 focus:ring-stone-300 shadow-stone-500/50': !product.active
                  }"
                  :disabled="!product.active"
                  v-text="(product.active ? 'JETZT ANFRAGEN' : 'NICHT VERFÜGBAR')"
          ></button>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  product: {
    active: {
      required: true,
      type: Boolean
    }
    id: {
      type: number,
      required: true
    },
    productTeaserCover: {
      type: string,
      required: true
    },
    productName: {
      type: string,
      required: true
    },
    prices: {
      perDay: {
        type: number,
        required: true
      }
    },
    features?: [string]
  }
}>()
</script>