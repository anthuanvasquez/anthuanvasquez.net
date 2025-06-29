<script setup lang="ts">
interface Project {
  name: string;
  description: string;
  skills: string;
}

interface Props {
  projects: Project[];
  isExpanded: boolean;
}

const projectsContainer = ref<HTMLElement>();

defineProps<Props>();
</script>

<template>
  <div
    class="col-span-12 transition-all duration-300 ease-in-out"
    ref="projectsContainer"
    :class="{
      'h-0 overflow-hidden': !isExpanded,
      'mt-4 h-full': isExpanded,
    }"
  >
    <h2 class="font-firacode text-2xl mb-4">Projects</h2>

    <ul v-if="isExpanded" class="grid grid-cols-3 gap-3">
      <li
        v-for="project in projects"
        :key="project.name"
        class="rounded-lg gradient-bg p-0.5"
      >
        <div class="space-y-2 rounded-lg bg-gradient-to-b from-slate-900 to-black p-3 h-full">
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
