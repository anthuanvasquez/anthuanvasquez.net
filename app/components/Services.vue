<script setup lang="ts">
import type { Service } from '../types';

const {
  data: services,
  error,
  pending,
} = await useGetFetch<Service[]>('api/services');
</script>

<template>
  <div class="container mx-auto">
    <div v-if="services" class="grid grid-cols-6 gap-8 sm:grid-cols-12">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="col-span-6 rounded-lg border border-slate-800 bg-linear-to-b from-slate-900 to-black lg:col-span-4"
      >
        <div class="h-full p-6">
          <UIcon
            v-if="service?.icon"
            :name="service.icon"
            class="m-auto block size-12 font-light text-white"
          />

          <p
            class="font-firacode my-3 text-center text-2xl leading-tight font-medium"
          >
            {{ service.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
