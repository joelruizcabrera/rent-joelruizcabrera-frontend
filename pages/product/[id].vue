<template>
  <div class="py-5 px-4 grid sm:grid-cols-2 grid-cols-1">
    <div class="sm:pe-2 self-center">
      <NuxtImg :src="product.getThumbnail()" class="w-full rounded-md"></NuxtImg>
    </div>
    <div class="sm:ps-2 sm:py-0 py-3 self-center">
      <h1 v-html="product.getName()" class="text-white font-black italic uppercase text-4xl sm:text-5xl md:text-6xl"></h1>
      <div
          class="md:max-h-full h-max overflow-hidden md:before:bg-none before:bg-linear-to-t before:from-stone-950 before:to-transparent before:transition-all before:duration-300 before:ease duration-400 ease before:w-full before:absolute before:left-0 before:bottom-0 relative transition-all md:pb-0 pb-4"
          :class="{'max-h-15 before:h-2/3': !openedDescription, 'max-h-full before:h-0': openedDescription}"
      >
        <button class="md:hidden flex mx-auto absolute w-full left-0 text-white z-2 -bottom-0.5 justify-center cursor-pointer pointer-events-all" @click="() => {openedDescription = (!openedDescription)}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" v-if="!openedDescription">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" v-else>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
        <p v-html="product.getDescription()" class="text-neutral-400 font-thin text-sm my-2 leading-[1.2]"></p>
      </div>
      <StockDisplay :active="product.isActive()"></StockDisplay>
      <Datepicker class="mt-2" ref="datepicker" @datecount="datesCount"></Datepicker>
      <div class="flex flex-row pb-3 py-2">
        <span class="bg-yellow-800 text-yellow-300 text-sm font-bold me-2 px-3 py-1 rounded-sm animate__animated animate__fadeInUp anim-delay-3">
          <i v-text="product.getPrices().perDay"></i>€
          <span class="ms-1 text-xs font-light">/ Tag</span>
        </span>
        <span class="bg-yellow-800 text-yellow-300 text-sm font-bold me-2 px-3 py-1 rounded-sm animate__animated animate__fadeInUp anim-delay-6">
          <i v-text="product.getPrices().perFullWeek"></i>€
          <span class="ms-1 text-xs font-light">/ Volle Woche</span>
        </span>
      </div>
      <div class="flex flex-row items-end gap-x-4 animate__animated animate__fadeInUp anim-delay-9">
        <div class="flex flex-col">
          <span class="text-white text-md font-light leading-none">Gesamt für <span v-html="(datesCount === 1 ? 'einen Tag' : datesCount + ' Tage')"></span></span>
          <span class="text-white text-4xl sm:text-5xl font-black italic leading-none" v-html="calculatedPrice().result.value + '€'"></span>
        </div>
        <div class="flex flex-row gap-x-1 items-center leading-none" v-if="calculatedPrice().result.value !== calculatedPrice().calcPerDay.value">
          <span class="text-neutral-500 text-sm line-through leading-none"
                v-html="calculatedPrice().calcPerDay.value + '€'"
          ></span>
          <div class="relative inline-block">
            <button class="text-neutral-500 transition-colors duration-200 focus:outline-none hover:text-yellow-500 cursor-pointer peer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </button>
            <p class="absolute items-center justify-start px-2 w-48 p-1 text-black bg-white rounded-sm shadow-lg -left-[9.75rem] -top-10 hidden peer-hover:flex">
              <span class="truncate text-sm z-1">Du sparst insgesamt <b>{{calculatedPrice().saved.value}}€</b></span>

              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 absolute rotate-45 right-4 bottom-0.5 -mb-3 transform text-white fill-current" stroke="currentColor" viewBox="0 0 24 24" >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Product} from '~/utils/Products'
const route = useRoute();
const product = new Product(route.params.id)
let openedDescription = ref(false)

const datesCount = 1

watch(datesCount, (newDays, oldDays) => {
  console.log(newDays, oldDays)
})

const calculatedPrice = () => {
  const result = ref(product.getPrices().perDay)
  const calcPerDay = ref(Math.abs(datesCount * product.getPrices().perDay))
  if(datesCount >= 7) {
    let fullDayPrices = Math.abs((datesCount % 7) * product.getPrices().perDay)
    let fullWeekPrices = Math.abs(((datesCount - (datesCount % 7)) / 7) * product.getPrices().perFullWeek)

    result.value = Math.abs(fullDayPrices + fullWeekPrices)
  } else {
    result.value = Math.abs(datesCount * product.getPrices().perDay)
  }
  const saved = ref(Math.abs(result.value - calcPerDay.value))
  return {result, calcPerDay, saved}
}
</script>