<script setup lang="ts">
const head = useLocaleHead({
  seo: true,
});
const htmlAttrs = computed(() => head.value.htmlAttrs!);
</script>

<template>
  <Html :lang="htmlAttrs.lang">
    <Body>
      <div class="min-h-screen flex flex-col">
        <Header />
        <main class="flex-grow">
          <NuxtPage />
        </main>
        <Footer />
      </div>
    </Body>
  </Html>
</template>
