<script setup lang="ts">
const route = useRoute();
const { data: post } = await useAsyncData(`content-${route.path}`, () => {
  return queryCollection('blog').path(route.path).first();
});

useHead({
  title: computed(() => `${post.value?.title} | Anthuan Vásquez`),
  meta: [
    {
      name: 'description',
      content: computed(() => post.value?.description),
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] px-4 py-16 font-sans text-white">
    <main class="animate-fade-in relative mx-auto max-w-3xl">
      <!-- Back Link -->
      <NuxtLink
        to="/blog"
        class="group mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="h-4 w-4 transition-transform group-hover:-translate-x-1"
        />
        Back to Blog
      </NuxtLink>

      <article v-if="post">
        <!-- Header -->
        <header class="mb-10 space-y-4">
          <div
            class="flex items-center gap-3 text-sm font-medium text-gray-500"
          >
            <time :datetime="post.date">{{
              new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })
            }}</time>
            <span v-if="post.duration">&middot; {{ post.duration }}</span>
          </div>
          <h1
            class="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl"
          >
            {{ post.title }}
          </h1>
        </header>

        <!-- Content -->
        <!-- Using @tailwindcss/typography (prose) for formatting Markdown -->
        <div
          class="prose prose-invert prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline prose-code:text-pink-300 prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#111] prose-pre:border prose-pre:border-white/10 max-w-none"
        >
          <ContentRenderer :value="post" />
        </div>
      </article>

      <!-- Not Found -->
      <div v-else class="py-20 text-center">
        <h1 class="text-2xl font-bold text-gray-300">Post not found</h1>
        <NuxtLink
          to="/blog"
          class="mt-4 inline-block text-blue-400 hover:underline"
          >Return to Blog</NuxtLink
        >
      </div>
    </main>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
