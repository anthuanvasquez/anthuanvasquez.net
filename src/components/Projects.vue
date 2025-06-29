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
    <div v-if="projects" class="grid grid-cols-12 gap-8">
      <div v-for="(project, index) in projects" :key="index" class="col-span-6">
        <div
          class="relative h-full rounded-lg border border-slate-800 p-4 text-center"
        >
          <h2 class="font-firacode text-2xl font-medium">
            {{ project.name }}
          </h2>
          <p class="my-3 font-light">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
