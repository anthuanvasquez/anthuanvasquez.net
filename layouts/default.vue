<script setup lang="ts">
const head = useLocaleHead({
  addSeoAttributes: true,
});
const htmlAttrs = computed(() => head.value.htmlAttrs!);
</script>

<template>
  <Html :lang="htmlAttrs.lang">
    <Body>
      <Header />
      <main>
        <NuxtPage />
      </main>
      <Footer />
    </Body>
  </Html>
</template>
