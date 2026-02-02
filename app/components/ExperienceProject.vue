<script setup lang="ts">
interface Project {
  name: string;
  description: string;
  skills: string;
}

interface Props {
  projects: Project[];
}

defineProps<Props>();
</script>

<template>
  <div class="col-span-12 mt-6 space-y-4">
    <h2 class="font-firacode text-xl">Showcase Projects</h2>

    <ul class="grid grid-cols-3 gap-3">
      <li
        v-for="project in projects"
        :key="project.name"
        class="gradient-bg rounded-lg p-0.5"
      >
        <div
          class="h-full space-y-2 rounded-lg bg-linear-to-b from-slate-900 to-black p-3"
        >
          <h4 class="font-firacode text-lg font-medium">
            {{ project.name }}
          </h4>
          <p class="text-sm font-light">{{ project.description }}</p>
          <p class="text-sm font-light">
            <span class="me-2 font-bold">Skills:</span>
            <span class="font-firacode text-slate-500">{{
              project.skills
            }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.transition-all {
  interpolate-size: allow-keywords;
  transition-property: max-height, opacity;
}
</style>
