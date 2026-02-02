<script setup lang="ts">
import type { Experience } from '~/types';

const openStates = ref<boolean[]>([]);
const {
  data: experiences,
  error,
  pending,
} = await useGetFetch<Experience[]>('api/experiences');

watch(experiences, (val) => {
  if (val) {
    openStates.value = val.map(() => false);
  }
});
</script>

<template>
  <div class="container mx-auto">
    <p class="mx-auto mb-12 max-w-lg text-center font-light text-slate-500">
      Over the past 10+ years. I've the oportunity to work with wide range of
      ecommerce, web apps and websites projects, collaborating with diverse
      teams and clients.
    </p>

    <div v-if="experiences" class="flex flex-wrap gap-4">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="relative flex w-full flex-col"
      >
        <UButton
          color="neutral"
          variant="link"
          trailing-icon="i-lucide-chevron-down"
          class="absolute top-5 right-5 z-10 cursor-pointer transition-transform duration-200"
          :class="{ 'rotate-180': openStates[index] }"
          @click="openStates[index] = !openStates[index]"
        />

        <div
          class="grid grid-cols-12 gap-x-4 rounded-lg border border-slate-800 bg-linear-to-b from-slate-900 to-black p-4"
        >
          <div
            class="col-span-3 flex flex-col justify-start text-3xl font-semibold"
          >
            {{ experience.date }}
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

          <UCollapsible
            v-if="experience?.projects"
            v-model:open="openStates[index]"
            class="col-span-12 flex flex-col gap-2"
          >
            <template #content>
              <ExperienceProject :projects="experience.projects" />
            </template>
          </UCollapsible>
        </div>
      </div>
    </div>
  </div>
</template>
