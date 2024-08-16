<script setup lang="ts">
export declare type IProjects = {
  name: string;
  description: string;
};

const { supabase } = useSupabase();
const projects = ref([] as IProjects[]);

try {
  const { data, error } = await supabase.from('projects').select();

  projects.value = data as IProjects[];
} catch (error) {
  error.value = true;
  projects.value = [];
}
</script>

<template>
  <div class="container mx-auto">
    <div v-if="!error" class="grid grid-cols-12 gap-8">
      <div v-for="(project, index) in projects" :key="index" class="col-span-6">
        <div
          class="border border-slate-800 p-4 h-full rounded-lg relative text-center"
        >
          <h2 class="text-2xl font-bold">
            {{ project.name }}
          </h2>
          <p class="text-md my-3">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
