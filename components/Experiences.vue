<script setup lang="ts">
import type { IconName } from '@/types';

export declare type IExperience = {
  name: string;
  description: string;
  position: string;
  date: string;
  devTime: string;
  country?: IconName;
};

const { supabase } = useSupabase();
const { data, error } = await supabase.from('experiences').select();
const experiences = ref([] as IExperience[]);

experiences.value = data as IExperience[];
</script>

<template>
  <div class="container mx-auto">
    <div v-if="!error" class="grid grid-cols-12 gap-8">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="col-span-4"
      >
        <div
          class="border border-slate-800 p-4 h-full rounded-lg relative flex flex-col"
        >
          <h2 class="text-2xl font-bold">
            {{ experience.name }}
          </h2>
          <p class="text-sm italic">
            {{ experience.position }}
          </p>
          <p class="text-md my-3">
            {{ experience.description }}
          </p>
          <p
            class="text-lg font-bold text-tertiary flex justify-between w-full mt-auto"
          >
            <span>{{ experience.date }}</span>
            <span>{{ experience.devTime }}</span>
          </p>
          <div v-if="experience?.country" class="absolute top-5 right-5">
            <Icon :name="experience.country" type="custom" class="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
