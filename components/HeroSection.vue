<template>
  <div class="relative overflow-hidden pt-10 before:bg-linear-to-b before:from-stone-950 before:to-transparent before:absolute before:w-full before:h-1/2 sm:after:bg-linear-to-r after:bg-linear-to-t after:from-stone-950 after:to-transparent after:absolute sm:after:w-1/2 after:w-full sm:after:h-full after:h-2/3 sm:after:top-0 after:bottom-0">
    <div class="absolute sm:px-8 px-4 z-2 max-w-150 sm:top-0 bottom-0 my-6 pt-10">
      <h3 class="text-stone-950 font-medium italic uppercase text-1xl text-start px-2 py-0.5 mb-1 bg-yellow-400 w-max rounded flex row animate__animated animate__fadeIn anim-delay-16">NUR FÜR KURZE ZEIT</h3>
      <h1 class="text-white font-black italic uppercase text-6xl mt-0 mb-0 text-start animate__animated animate__fadeInUp" v-html="product.productName"></h1>
      <div class="flex row mt-3">
        <span class="bg-yellow-800 text-yellow-300 text-sm font-bold me-2 px-3 py-1 rounded-sm animate__animated animate__fadeInUp anim-delay-3">
          <i v-text="product.prices.perDay"></i>€
          <span class="ms-1 text-xs font-light">/ Tag</span>
        </span>
        <span class="bg-yellow-800 text-yellow-300 text-sm font-bold me-2 px-3 py-1 rounded-sm animate__animated animate__fadeInUp anim-delay-6">
          <i v-text="product.prices.perFullWeek"></i>€
          <span class="ms-1 text-xs font-light">/ Woche</span>
        </span>
      </div>
      <p class="text-white font-light text-sm mt-4 animate__animated animate__fadeInUp anim-delay-8" v-html="product.description"></p>
      <p class="text-white font-light text-sm mt-2 animate__animated animate__fadeInUp anim-delay-10" v-if="product.features.length >= 1">
        <span v-for="feature in product.features" :key="feature" v-text="feature"></span>
      </p>
      <NuxtLink
          :to="(product.active ? 'product/' + product.id : '#')"
          :aria-disabled="!product.active"
          :class="{'pointer-events-none': !product.active}"
      >

        <button type="button"
                class="mt-4 animate__animated animate__fadeInUp anim-delay-12 text-gray-900 bg-gradient-to-t inset-shadow-sm shadow-md font-black rounded-lg text-sm px-5 py-2.5 text-center mt-2 transition duration-300 ease-[cubic-bezier(0.87, 0, 0.03, 0.97)] w-max"
                :class="{
                    'from-yellow-300 via-yellow-400 to-yellow-600 inset-shadow-yellow-200 shadow-yellow-500/50 hover:cursor-pointer hover:shadow-lg hover:inset-shadow-lg focus:outline-none': product.active,
                    'from-stone-300 via-stone-400 to-stone-500 inset-shadow-stone-200 focus:ring-stone-300 shadow-stone-500/50': !product.active
                  }"
                :disabled="!product.active"
                v-text="(product.active ? 'JETZT ANFRAGEN' : 'NICHT VERFÜGBAR')"
        ></button>
      </NuxtLink>
    </div>
    <NuxtImg :src="product.productTeaserCover" class="w-screen object-cover sm:object-center object-top h-150"></NuxtImg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true,
    id: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true
    },
    prices: {
      type: Object,
      required: true,
      perDay: {
        type: Number,
        required: true
      },
      perFullWeek: {
        type: Number,
        required: false
      }
    },
    description: {
      type: String,
      required: true
    },
    features: {
      type: Array,
      required: false
    },
    productTeaserCover: {
      type: String,
      required: true
    }
  },
});
const { product } = props
</script>