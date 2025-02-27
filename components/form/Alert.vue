<template>
  <div class="w-full p-3 rounded-md shadow-lg border-1 animate__animated animate__fadeInUp anim-delay-4 backdrop-blur-xs flex flex-row sm:py-4 items-center gap-x-2" :class="{
    'bg-lime-800/50 border-lime-500 text-lime-400 shadow-lime-400/25': (colorMode === 'lime'),
    'bg-red-800/30 border-red-500 text-red-500 shadow-red-400/25': (colorMode === 'red'),
  }">
    <ExclamationTriangleIcon v-if="mode === 'error'" class="size-5"></ExclamationTriangleIcon>
    <CheckIcon v-else-if="mode === 'success'" class="size-5"></CheckIcon>

    <p v-html="msg" class="font-light text-sm leading-none md:text-md"></p>
  </div>
</template>

<script setup lang="ts">
import {ExclamationTriangleIcon, CheckIcon} from '@heroicons/vue/24/outline'
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