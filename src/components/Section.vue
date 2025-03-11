<script setup lang="ts">
import Heading from './Heading.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});

provide('data', {
  title: props.title,
  subtitle: props.subtitle,
});
</script>

<template>
  <section class="py-12">
    <Heading />
    <slot />
  </section>
</template>
