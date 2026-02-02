<script setup lang="ts">
const head = useLocaleHead({
  seo: true,
});
const htmlAttrs = computed(() => head.value.htmlAttrs!);
</script>

<template>
  <Html :lang="htmlAttrs.lang">
    <Body>
      <Header />
      <main class="min-h-screen">
        <NuxtPage />
        <Chatbot />
      </main>
      <Footer />
    </Body>
  </Html>
</template>
