<template>
  <div class="w-full p-3 rounded-md shadow-lg border-1 animate__animated animate__fadeInUp anim-delay-4 backdrop-blur-xs flex flex-row sm:py-4 items-center gap-x-2" :class="{
    'bg-lime-800/50 border-lime-500 text-lime-400 shadow-lime-400/25': (colorMode === 'lime'),
    'bg-red-800/30 border-red-500 text-red-500 shadow-red-400/25': (colorMode === 'red'),
  }">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"  v-if="mode === 'error'">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" v-else-if="mode === 'success'">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>

    <p v-html="msg" class="font-light text-sm leading-none md:text-md"></p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  mode: string,
  msg: string
}>()

let colorMode = ""
switch (props.mode) {
  case "success":
    colorMode = "lime"
    break;
  case "error":
    colorMode = "red"
    break;
}

</script>