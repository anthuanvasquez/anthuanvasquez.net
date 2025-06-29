<script setup lang="ts">
import type { IconName, Service } from '~/types';

const {
  data: services,
  error,
  pending,
} = await useGetFetch<Service[]>('api/services');
</script>

<template>
  <div class="container mx-auto px-4">
    <div v-if="services" class="grid grid-cols-6 gap-8 sm:grid-cols-12">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="gradient-bg col-span-6 rounded-lg p-0.5 lg:col-span-4"
      >
        <div
          class="h-full rounded-lg bg-gradient-to-b from-slate-900 to-black p-6"
        >
          <Icon
            v-if="service?.icon"
            :name="service.icon"
            type="outline"
            class="m-auto block size-12 text-white"
          />

          <p
            class="my-3 text-center font-firacode text-2xl font-medium leading-tight"
          >
            {{ service.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
