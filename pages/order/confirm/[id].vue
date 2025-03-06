<template>
  <div>
    <h1 class="text-white text-md" v-text="route.params.id"></h1>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>