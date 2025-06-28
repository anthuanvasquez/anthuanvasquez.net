<script setup lang="ts">
import type { Skill } from '~/types';

const {
  data: skills,
  error,
  pending,
} = await useGetFetch<Skill[]>('/api/skills');
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="md:grid md:grid-cols-2">
      <div>
        <h2 class="mb-4 text-center text-2xl font-bold">Proficient</h2>

        <div
          v-if="skills"
          class="mx-auto flex max-w-4xl flex-wrap justify-center gap-2"
        >
          <div
            v-for="(skill, index) in skills.filter(
              (skill) => skill.category === 'Proficient'
            )"
            :key="index"
            class="inline-flex rounded-lg border border-slate-800 bg-gradient-to-b from-slate-900 to-black p-2"
          >
            <div class="text-center text-sm font-light text-slate-500">
              {{ skill.name }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="my-4 text-center text-2xl font-bold">Experienced</h2>

        <div v-if="skills" class="flex flex-wrap justify-center gap-2">
          <div
            v-for="(skill, index) in skills.filter(
              (skill) => skill.category === 'Experienced'
            )"
            :key="index"
            class="rounded-lg border border-slate-800 bg-gradient-to-b from-slate-900 to-black p-2"
          >
            <div class="text-center text-sm font-light text-slate-500">
              {{ skill.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
