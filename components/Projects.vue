<script setup lang="ts">
const projects = [
  {
    name: 'Oido Perfecto Studio',
    description: 'A beat store for selling music licenses.',
  },
  {
    name: 'und3fined.dev',
    description: 'A dev company for building web apps.',
  },
];
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-12 gap-8">
      <div v-for="(project, index) in projects" :key="index" class="col-span-6">
        <div
          class="border border-slate-800 p-4 h-full rounded-lg relative text-center"
        >
          <h2 class="text-2xl font-bold">
            {{ project.name }}
          </h2>
          <p class="text-md my-3">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
