<template>
  <form action="">
    <h3 class="italic font-black text-lg uppercase pb-3">Persöhnliche Angaben</h3>
    <div class="items-baseline flex flex-col sm:flex-row lg:flex-row md:flex-col gap-x-4 gap-y-2 py-1">
      <div class="w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          Vorname <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
               v-model="formRawData.firstName"
               type="text"
               placeholder="Max"
        >
      </div>
      <div class="w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          Nachname <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
               v-model="formRawData.lastName"
               type="text"
               placeholder="Mustermann"
        >
      </div>
    </div>
    <div class="items-baseline flex flex-col sm:flex-row lg:flex-row md:flex-col gap-x-4 gap-y-2 py-1">
      <div class="w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          E-Mail <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
               v-model="formRawData.email"
               type="email"
               placeholder=""
        >
      </div>
      <div class="w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          Telefon
        </label>
        <input :class="formClasses.input"
               v-model="formRawData.phone"
               type="text"
               placeholder=""
        >
      </div>
    </div>
    <h3 class="italic font-black text-lg uppercase py-3">Rechnungsadresse</h3>
    <div class="items-baseline flex sm:flex-row lg:flex-row gap-x-4 gap-y-2 py-1">
      <div class="w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          Straße <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
               v-model="formRawData.street"
               type="text"
               placeholder=""
        >
      </div>
      <div class="sm:w-50 w-30">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          Nr. <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
               v-model="formRawData.houseNr"
               type="text"
        >
      </div>
    </div>
    <div class="items-baseline flex flex-col sm:flex-row lg:flex-row gap-x-4 gap-y-2 py-1">
      <div class="lg:w-50 md:w-50 sm:w-1/2 w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          PLZ <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
               v-model="formRawData.postalCode"
               type="text"
               placeholder=""
        >
      </div>
      <div class="w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          Stadt <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
               v-model="formRawData.city"
               type="text"
               placeholder=""
        >
      </div>
    </div>
    <!-- CTO -->
    <div class="items-baseline flex flex-col sm:flex-row lg:flex-row md:flex-col gap-x-4 gap-y-2 py-6 pb-1">
      <div class="w-full flex flex-row-reverse gap-x-2 justify-end items-start">
        <label class="block tracking-wide text-neutral-400 text-xs font-light" for="grid-first-name">
          Ich bestätige hiermit, die AGB's und die Datenschutzerklärung gelesen zu haben und akzeptiere diese.  <span class="font-light text-xs leading-none">*</span>
        </label>
        <div class="group w-5 h-5 relative sm:-mt-0.5 cursor-pointer">
          <input :class="formClasses.checkbox"
                 v-model="formRawData.cto"
                 :checked="formRawData.cto"
                 type="checkbox"
                 class="w-full h-full cursor-pointer"
          >
          <div class="absolute z-2 top-0 pointer-events-none flex items-center justify-center w-full h-full cursor-pointer">
            <CheckIcon class="text-neutral-950 pointer-events-none size-4"></CheckIcon>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import {CheckIcon} from '@heroicons/vue/24/outline'
import {watch} from "vue";
import {PersonalDetails} from "~/utils/Personal";

const formRawData = reactive({
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  street: null,
  houseNr: null,
  postalCode: null,
  city: null,
  cto: false
})

watch(formRawData, (newObj, oldObj) => {
  if (
      newObj.cto &&
      newObj.firstName &&
      newObj.lastName &&
      newObj.email &&
      newObj.street &&
      newObj.houseNr &&
      newObj.postalCode &&
      newObj.city
  ) {
    useNuxtApp().callHook("personalData:hook", {
      formRawData
    })
  }
}, {deep: true})

const formClasses = {
  input: "ease appearance-none block w-full bg-transparent text-white border-b shadow-xs shadow-black border-white focus:border-yellow-400 hover:border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-lg hover:shadow-lg hover:shadow-yellow-400/20 focus:shadow-yellow-400/20 transition font-thin placeholder:text-neutral-500",
  checkbox: "ease appearance-none block bg-transparent text-white border aspect-square shadow-xs shadow-black border-white checked:border-yellow-400 focus:border-yellow-400 hover:border-yellow-400 rounded leading-tight focus:outline-none checked:shadow-lg focus:shadow-lg hover:shadow-lg checked:shadow-yellow-400/20 hover:shadow-yellow-400/20 focus:shadow-yellow-400/20 transition checked:bg-linear-to-b checked:from-yellow-400 checked:to-yellow-700",
}
</script>