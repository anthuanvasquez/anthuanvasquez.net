<script setup lang="ts">
const data: any = inject('data');
</script>

<template>
  <div class="mb-12">
    <p class="text-center text-2xl font-light">
      {{ data.subtitle }}
    </p>
    <h2 class="text-5xl mb-3 font-bold tracking-tight text-white text-center">
      {{ data.title }}
    </h2>

    <div class="block mx-auto h-0.5 w-20 gradient-bg"></div>
  </div>
</template>
