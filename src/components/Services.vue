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
    <div v-if="services" class="grid grid-cols-6 sm:grid-cols-12 gap-8">
      <div
        v-for="(service, index) in services"
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
            class="block text-white h-12 w-12 m-auto"
          />

          <p class="text-2xl font-medium font-firacode my-3 leading-tight text-center">
            {{ service.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
