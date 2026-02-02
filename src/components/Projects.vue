<script setup lang="ts">
import type { Project } from '~/types';

const {
  data: projects,
  error,
  pending,
} = await useGetFetch<Project[]>('/api/projects');
</script>

<template>
  <div class="container mx-auto">
    <p class="mx-auto mb-12 max-w-lg text-center font-light text-slate-500">
      Bringing your ideas to life. Let's turn your vision into reality.
    </p>

    <div v-if="projects" class="grid grid-cols-12 gap-8">
      <div v-for="(project, index) in projects" :key="index" class="col-span-6">
        <div
          class="relative h-full rounded-lg border border-slate-800 bg-linear-to-b from-slate-900 to-black p-4 text-center"
        >
          <h2 class="font-firacode text-2xl font-medium">
            {{ project.name }}
          </h2>
          <p class="my-3 font-light">
            {{ project.description }}
          </p>
          <p class="my-3 font-light text-slate-500">
            {{ project.skills }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
