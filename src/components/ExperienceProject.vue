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
  <div
    class="col-span-12 space-y-4 mt-6"
  >
    <h2 class="font-firacode text-xl">Showcase Projects</h2>

    <ul class="grid grid-cols-3 gap-3">
      <li
        v-for="project in projects"
        :key="project.name"
        class="rounded-lg gradient-bg p-0.5"
      >
        <div class="space-y-2 rounded-lg bg-linear-to-b from-slate-900 to-black p-3 h-full">
          <h4 class="font-firacode text-lg font-medium">
            {{ project.name }}
          </h4>
          <p class="text-sm font-light">{{ project.description }}</p>
          <p class="text-sm font-light">
            <span class="font-bold me-2">Skills:</span>
            <span class="text-slate-500 font-firacode">{{ project.skills }}</span>
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
