<template>
  <div>
    <div class="pb-3 px-4">
      <h1 class="text-white font-black italic uppercase text-4xl mt-3 mb-0 text-center">Renting Cameras and Equipment</h1>
      <p class="text-white font-thin italic text-xl mt-0 text-center">Select your items you might need, select a date and request it</p>
    </div>
    <HeroSection :product="products[0]"></HeroSection>
    <div class="py-6 px-4 flex justify-center">
      <h1 class="text-white font-black italic uppercase text-6xl mt-0 mb-0 text-start">Alle Produkte</h1>
    </div>
    <div class="px-4 pb-6 grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-3">
      <ProductCard :product="productItem" v-for="productItem in products" :key="productItem"></ProductCard>
    </div>
  </div>
</template>
<script setup lang="ts">
/*import {OdooHandler} from '~/utils/OdooHandler'
const Odoo = new OdooHandler();

const res = await Odoo.example()
console.log(res)
*/

import {Products} from "~/utils/Products";

const products = new Products().getAll()

console.log(products[3])

</script>