<template>
  <div class="px-4 min-h-[50vh]">
    <Transition>
      <div v-if="!loadingRequest">
        <Transition>
          <div v-if="errorOnRequest">
            <Alert mode="error" msg="Etwas ist schiefgelaufen, bitte versuchen Sie es erneut."></Alert>
          </div>
        </Transition>
        <h1 class="font-black italic text-white text-4xl py-4 leading-none">ANFRAGE ABSCHICKEN</h1>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-x-6">
          <div>
            <Transition>
              <div v-if="cartIsFilled">
                <div class="text-white bg-linear-to-t from-neutral-950 to-neutral-900 p-3 rounded-lg inset-shadow-sm inset-shadow-neutral-900 border-neutral-800 border-2 shadow-neutral-900 shadow-lg group">
                  <div class="pb-3 flex flex-row justify-between items-baseline">
                    <h3 class="italic font-black text-lg uppercase">Warenkorb</h3>
                    <button type="button" @click="deleteCart" class="italic font-light text-neutral-500 text-xs underline uppercase cursor-pointer transition hover:text-red-500 hover:drop-shadow-[0_2px_8px_rgb(231,0,11,.7)]">Alles löschen</button>
                  </div>
                  <div class="flex flex-col">
                    <TransitionGroup name="list">
                      <div v-for="item in lineItems ?? []" :key="item.id" class="gap-x-2 w-full items-center flex flex-row justify-between py-2 first:pt-0 last:pb-0 border-b-neutral-700 last:border-b-0 border-b-1">
                        <div class="flex flex-row gap-x-4">
                          <NuxtImg :src="productInfo(item.id).getThumbnail() ?? ''" class="w-15 h-15 shadow-lg object-cover rounded"></NuxtImg>
                          <div class="flex flex-row items-center flex-wrap gap-x-6 gap-y-2">
                            <div class="flex flex-col">
                              <NuxtLink :to="'/product/' + item.id">
                                <p class="text-white text-md italic font-black hover:underline uppercase leading-none mb-1" v-html="item.name"></p>
                              </NuxtLink>
                              <div class="flex flex-row">
                                <span class="text-white text-xs font-bold" v-for="feature in productInfo(item.id).getFeatures() ?? []" v-html="feature" :key="feature"></span>
                              </div>
                              <span class="text-neutral-300 text-xs font-thin pt-0.5" v-html="'Zeitraum: ' + item.requestRange.fromStamp + ' - ' + item.requestRange.toStamp + ' (' + (item.requestRange.daysCount === 1 ? 'Ein Tag' : item.requestRange.daysCount + ' Tage') + ')'"></span>
                            </div>
                            <div class="flex flex-row gap-x-1 items-center">
                              <ArrowRightIcon class="size-4 visible "></ArrowRightIcon>
                              <span class="font-black text-xl leading-none" v-html="(item.netPrice ?? '') + '€'"></span>
                              <span class='font-thin text-xl self-start leading-none'>*</span>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-row gap-x-2">
                          <button @click="() => {console.log('ye')}" class="aspect-square shadow-md w-10 h-10 rounded transition-all text-yellow-400 bg-transparent hover:bg-yellow-400/10 shadow-yellow-500/30 border-1 border-yellow-400 hover:cursor-pointer hover:shadow-lg hover:inset-shadow-lg focus:outline-none transition flex justify-center items-center">
                            <PencilIcon class="size-4"></PencilIcon>
                          </button>
                          <button @click="removeProduct(item.id)" class="aspect-square inset-shadow-sm shadow-md w-10 h-10 rounded bg-linear-to-t from-yellow-300 via-yellow-400 to-yellow-600 hover:from-red-400 hover:via-red-500 hover:to-red-700 transition-all text-gray-900 hover:inset-shadow-red-200 hover:shadow-red-500/50 hover:text-white inset-shadow-yellow-200 shadow-yellow-500/50 hover:cursor-pointer hover:shadow-lg hover:inset-shadow-lg focus:outline-none transition flex justify-center items-center">
                            <XMarkIcon class="size-5"></XMarkIcon>
                          </button>
                        </div>
                      </div>
                    </TransitionGroup>
                  </div>
                </div>
                <p class="self-center text-neutral-500 font-thin text-[.75rem] mt-1 animate__animated animate__fadeInUp anim-delay-20">* Preise zzgl. MwSt. und Versicherung / Kaution</p>
              </div>
            </Transition>
            <div v-if="!cartIsFilled">
              <Alert mode="error" msg="Ihr Warenkorb ist leer."></Alert>
            </div>
          </div>
          <div>
            <div class="text-white bg-linear-to-t from-neutral-950 to-neutral-900 p-3 rounded-lg inset-shadow-sm inset-shadow-neutral-900 border-neutral-800 border-2 shadow-neutral-900 shadow-lg group sm:mt-0 mt-5">
              <RequestForm :ref="requestFormRef"></RequestForm>
            </div>
            <button @click="handleRequest()" class="mt-3 text-gray-900 font-black rounded-lg inset-shadow-sm shadow-md px-5 py-2.5 sm:w-max w-full bg-linear-to-t from-yellow-300 via-yellow-400 to-yellow-600 hover:from-lime-400 hover:via-lime-500 hover:to-lime-700 transition-all text-gray-900 hover:inset-shadow-lime-200 hover:shadow-lime-500/50 inset-shadow-yellow-200 shadow-yellow-500/50 hover:cursor-pointer hover:shadow-lg hover:inset-shadow-lg focus:outline-none transition">
              ANFRAGE ABSENDEN
            </button>
          </div>
        </div>
      </div>
      <div v-else class="flex justify-center items-center h-100">
        <div class="p-4">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="24px" height="30px" class="w-15 h-15 fill-yellow-400" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <rect x="0" y="10" width="4" height="10" fill="inherit" opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="8" y="10" width="4" height="10" fill="inherit"  opacity="0.2">
            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="16" y="10" width="4" height="10" fill="inherit"  opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { Product } from '~/utils/Products'
import { useCartStore } from '~/stores/cart'
import { ArrowRightIcon, XMarkIcon, PencilIcon } from '@heroicons/vue/24/outline'
import { RequestController } from '~/utils/RequestController'
import { ref as $ref } from 'vue'

const loadingRequest = ref(false)
const errorOnRequest = ref(false)


const store = useCartStore()

const getProductLength = computed(() => store.getCartLength)

const lineItems = computed(() => store.getProducts)
const cartIsFilled = ref(getProductLength.value > 0)

store.$subscribe((state) => {
  cartIsFilled.value = state.events.newValue.length > 0;
})

const productInfo = (id: number) => {
  return new Product(id)
}

let personalDetailsData = ref({})

useNuxtApp().hooks.hook('personalData:hook', (data) => {
  personalDetailsData.value = data
})

const handleRequest = async () => {
  //loadingRequest.value = true
  const request = new RequestController()
  if (getProductLength.value === 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    return
  }
  // move forward => check validation form
  await request.sendRequest(personalDetailsData.value.formRawData)
  /*if (result === true) {
    //await navigateTo('/order/success')
  } else {
    //loadingRequest.value = false
    //errorOnRequest.value = true
  }*/
}

const deleteCart = () => {
  store.removeCart()
  if (getProductLength.value === 0) {
    cartIsFilled.value = false
  }
}

const removeProduct = (id: number) => {
  store.removeProduct(id)
  if (getProductLength.value === 0) {
    cartIsFilled.value = false
  }
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>