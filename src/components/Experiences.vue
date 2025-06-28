<script setup lang="ts">
import type { IconName, Experience } from '~/types';

const {
  data: experiences,
  error,
  pending,
} = await useGetFetch<Experience[]>('api/experiences');
</script>

<template>
  <div class="container mx-auto">
    <div v-if="experiences" class="flex flex-wrap gap-4">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="relative w-full cursor-pointer"
      >
        <Icon :name="'ArrowUpRightIcon'" class="inline-block h-4 w-4 absolute top-2/4 right-4 -translate-y-2/4" />

        <div
          class="grid grid-cols-12 gap-4 rounded-lg border border-slate-800 p-4 hover:bg-slate-100"
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

          <div class="col-span-6 flex items-center justify-start font-light">
            <span class="text-2xl">{{ experience.position }}</span> |
            <span class="font-firacode text-xl">{{
              experience.description
            }}</span>
          </div>

          <div v-if="experience?.projects" class="col-span-12 mt-4 hidden">
            <ul class="space-y-2">
              <li
                v-for="project in experience.projects"
                :key="project.name"
                class="rounded-lg border p-3"
              >
                <h4 class="font-firacode text-lg font-medium">
                  {{ project.name }}
                </h4>
                <p class="text-sm font-light">{{ project.description }}</p>
                <p class="text-sm font-light">
                  <span class="font-bold">SKILLS:</span>
                  <span class="text-primary">{{ project.skills }}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
