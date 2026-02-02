<script setup lang="ts">
const data: any = inject('data');
</script>

<template>
  <div class="mb-6 text-center">
    <p class="text-2xl font-light">
      {{ data.subtitle }}
    </p>

    <h2
      class="mb-3 font-firacode text-5xl font-bold tracking-tight text-white"
    >
      {{ data.title }}
    </h2>

    <div class="gradient-bg mx-auto block h-0.5 w-20"></div>
  </div>
</template>
