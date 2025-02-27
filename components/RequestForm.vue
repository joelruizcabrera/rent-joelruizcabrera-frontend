<template>
  <form action="">
    <h3 class="italic font-black text-lg uppercase pb-3">Persöhnliche Angaben</h3>
    <div class="items-baseline flex flex-col sm:flex-row lg:flex-row md:flex-col gap-x-4 gap-y-2 py-1">
      <div class="w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          Vorname <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
               type="text"
               placeholder="Max"
        >
      </div>
      <div class="w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          Nachname <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
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
               type="email"
               placeholder=""
        >
      </div>
      <div class="w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          Telefon
        </label>
        <input :class="formClasses.input"
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
               type="text"
               placeholder=""
        >
      </div>
      <div class="sm:w-50 w-30">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          Nr. <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
               type="text"
        >
      </div>
    </div>
    <div class="items-baseline flex flex-col sm:flex-row lg:flex-row gap-x-4 gap-y-2 py-1">
      <div class="lg:w-2/3 md:w-50 sm:w-1/2 w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          PLZ <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
               type="text"
               placeholder=""
        >
      </div>
      <div class="w-full">
        <label class="block uppercase tracking-wide text-neutral-500 text-xs font-bold mb-1" for="grid-first-name">
          Stadt <span class="font-light text-sm">*</span>
        </label>
        <input :class="formClasses.input"
               type="text"
               placeholder=""
        >
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
const formClasses = {
  input: "appearance-none block w-full bg-transparent text-white border-b shadow-sm shadow-black border-white focus:border-yellow-400 hover:border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-lg hover:shadow-lg hover:shadow-yellow-400/20 focus:shadow-yellow-400/20 transition font-thin placeholder:text-neutral-500"
}
</script>