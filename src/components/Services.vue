<script setup lang="ts">
import type { IconName } from '~/src/types';

export declare type IServiceItem = {
  title: string;
  description: string;
  icon: IconName;
  current?: boolean;
};

const servicesList = ref([] as IServiceItem[]);
const { supabase } = useSupabase();

try {
  const { data, error } = await supabase.from('services').select();

  servicesList.value = data as IServiceItem[];
} catch (error) {
  error.value = true;
  servicesList.value = [];
}
</script>

<template>
  <div class="container mx-auto px-4">
    <div v-if="!error" class="grid grid-cols-6 sm:grid-cols-12 gap-8">
      <div
        v-for="(service, index) in servicesList"
        :key="index"
        class="col-span-6 lg:col-span-4 gradient-bg rounded-lg p-0.5"
      >
        <div
          class="rounded-lg p-6 h-full bg-gradient-to-b from-slate-900 to-black"
        >
          <Icon
            v-if="service?.icon"
            :name="service.icon"
            type="outline"
            class="text-white h-12 w-12"
          />

          <p class="text-2xl font-bold my-3 leading-tight">
            {{ service.title }}
          </p>
          <p class="text-lg">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
