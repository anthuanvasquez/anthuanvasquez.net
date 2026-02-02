<script setup lang="ts">
import type { Skill } from '~/types';

const {
  data: skills,
  error,
  pending,
} = await useGetFetch<Skill[]>('/api/skills');
</script>

<template>
  <div class="container mx-auto">
    <p class="mx-auto mb-12 max-w-lg text-center font-light text-slate-500">
      Over the years, I gained the skills and knowledge to be a successful
      software engineer whos continues to learn and grow.
    </p>

    <div v-if="skills" class="flex flex-wrap justify-center gap-2">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="hover:text-tertiary inline-flex rounded-lg border border-slate-800 bg-linear-to-b from-slate-900 to-black p-2 text-slate-500 transition-all hover:scale-105"
      >
        <div class="inline-flex items-center text-center text-sm font-light">
          <UIcon
            v-if="skill.icon"
            :name="skill.icon"
            class="me-2 inline-block h-5 w-5"
          />
          {{ skill.name }}
        </div>
      </div>
    </div>
  </div>
</template>
