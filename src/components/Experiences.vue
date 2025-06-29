<script setup lang="ts">
import type { Experience } from '~/types';

const {
  data: experiences,
  error,
  pending,
} = await useGetFetch<Experience[]>('api/experiences');

const expandedExperience = ref<number | null>(null);
const toggleExperience = (index: number) => {
  expandedExperience.value = expandedExperience.value === index ? null : index;
};
</script>

<template>
  <div class="container mx-auto">
    <div v-if="experiences" class="flex flex-wrap gap-4">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="relative w-full cursor-pointer"
        @click="toggleExperience(index)"
      >
        <div
          class="absolute right-4 top-2/4 inline-block -translate-y-2/4 transition-transform"
          :class="{ hidden: expandedExperience === index }"
        >
          <Icon :name="'ArrowUpRightIcon'" class="size-4" />
        </div>

        <div
          class="grid grid-cols-12 gap-4 rounded-lg border border-slate-800 bg-gradient-to-b from-slate-900 to-black p-4"
        >
          <div class="col-span-3 flex flex-col justify-start">
            <div class="text-lg">
              {{ experience.date }}
            </div>
            <div class="font-firacode text-sm text-slate-500">
              {{ experience.coding }}
            </div>
          </div>

          <div
            class="col-span-3 flex items-center justify-start text-2xl font-light uppercase"
          >
            {{ experience.name }}
          </div>

          <div
            class="col-span-6 flex items-center justify-start space-x-2 text-xl font-light"
          >
            <span class="">{{ experience.position }}</span>
            <span class="text-slate-500">|</span>
            <span class="font-firacode">
              {{ experience.description }}
            </span>
          </div>

          <ExperienceProject
            v-if="experience?.projects"
            :projects="experience.projects"
            :is-expanded="expandedExperience === index"
          />
        </div>
      </div>
    </div>
  </div>
</template>
