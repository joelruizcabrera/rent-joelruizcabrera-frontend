<template>
<div class="flex items-center gap-x-3 py-2">
  <span class="relative flex size-3">
    <span
      class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
      :class="{'bg-lime-600': active, 'bg-red-500': !active}"
    ></span>
    <span
      class="relative inline-flex size-3 rounded-full"
      :class="{'bg-lime-400': active, 'bg-red-600': !active}"
    ></span>
  </span>
  <span
    class="text-sm"
    v-text="(active ? 'Zur Zeit Verfügbar' : 'Nicht mehr Verfügbar')"
    :class="{'text-lime-400': active, 'text-red-600': !active}"
  ></span>
</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  active: {
    required: true,
    type: Boolean
  }
});

const {active} = props
</script>