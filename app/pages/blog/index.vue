<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').order('date', 'DESC').all();
});

useHead({
  title: 'Blog | Anthuan Vásquez',
  meta: [
    {
      name: 'description',
      content: 'Thoughts on software development, architecture, and design.',
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] px-4 py-16 font-sans text-white">
    <div class="animate-fade-in mx-auto max-w-3xl space-y-12">
      <!-- Header -->
      <header class="space-y-4 text-center sm:text-left">
        <h1
          class="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent"
        >
          Blog
        </h1>
        <p class="max-w-xl text-gray-400">
          Sharing my journey and experiences in full-stack development, design
          systems, and modern web architecture.
        </p>
      </header>

      <!-- Post List -->
      <div class="space-y-8">
        <article
          v-for="post in posts"
          :key="post.path"
          class="group relative -mx-6 flex flex-col items-start gap-3 rounded-2xl p-6 transition-colors duration-300 hover:bg-white/5"
        >
          <NuxtLink :to="post.path" class="absolute inset-0 z-0"></NuxtLink>

          <div
            class="z-10 flex items-center gap-3 text-xs font-medium tracking-wide text-gray-500 uppercase"
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

          <h2
            class="z-10 text-2xl font-semibold text-gray-100 transition-colors group-hover:text-blue-400"
          >
            {{ post.title }}
          </h2>

          <p class="z-10 line-clamp-2 leading-relaxed text-gray-400">
            {{ post.description }}
          </p>

          <div
            class="z-10 mt-2 text-sm font-medium text-blue-400 transition-transform group-hover:translate-x-1"
          >
            Read more &rarr;
          </div>
        </article>
      </div>
    </div>
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
