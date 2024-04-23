<script setup lang="ts">
import { useGetFetch } from '@/composables/useGetFetch';

export declare type ISkillItem = {
  title: string;
  level: number;
  category: string;
  checked?: boolean;
};

export declare type ISkillItemGroup = {
  avgLevel: number;
  skills: ISkillItem[];
};

export declare type ISkillGroup = {
  [key: string]: ISkillItemGroup;
};

const { data, pending } = await useGetFetch('/data/skills.json');
const skills = data.value as ISkillItem[];
const groupSkillsByCategory = skills.reduce(
  (acc: ISkillGroup, skill: ISkillItem) => {
    if (!acc[skill.category]) {
      acc[skill.category] = {
        skills: [],
        avgLevel: 0,
      };
    }

    acc[skill.category].skills.push(skill);
    acc[skill.category].avgLevel =
      (acc[skill.category].avgLevel * (acc[skill.category].skills.length - 1) +
        skill.level) /
      acc[skill.category].skills.length;

    return acc;
  },
  {}
);
</script>

<template>
  <div class="container mx-auto px-4">
    <div
      class="border border-slate-800 p-4 rounded-lg mb-8 text-lg bg-gradient-to-b from-slate-900 to-black"
    >
      <p>
        {{ 'Since 2016, I have accumulated over' }}
        <a
          href="https://wakatime.com/@anthuanvasquez"
          target="_blank"
          title="Wakatime Graph"
          class="font-bold text-tertiary underline decoration-1"
        >
          {{ '6,600+ hours' }}
        </a>
        {{ 'of coding experience and have worked on more than' }}
        <a
          href="https://github.com/anthuanvasquez"
          target="_blank"
          title="GitHub Graph"
          class="font-bold text-tertiary underline decoration-1"
        >
          {{ '500+ projects' }}
        </a>
        {{
          'spanning various technology stacks. This extensive background has enabled me to cultivate strong skills and a comprehensive understanding of multiple technologies and programming languages, allowing me to tackle and resolve complex challenges in an efficient and effective manner.'
        }}
      </p>
      <ul class="mt-4 text-sm">
        <li class="mb-2">
          <Icon
            :name="'CheckCircleIcon'"
            type="outline"
            class="w-4 h-4 mr-2 inline-block text-blue-400"
          />
          {{ 'LinkedIn passes quiz or given certification.' }}
        </li>
        <li class="mb-2">
          <span
            class="w-4 h-4 mr-2 inline-block bg-green-500 rounded-full"
          ></span>
          {{ '>= 8 based on 10/10.' }}
        </li>
        <li class="mb-2">
          <span
            class="w-4 h-4 mr-2 inline-block bg-orange-500 rounded-full"
          ></span>
          {{ '>= 5 and < 8 based on 10/10.' }}
        </li>
        <li>
          <span
            class="w-4 h-4 mr-2 inline-block bg-red-500 rounded-full"
          ></span>
          {{ '< 5 based on 10/10.' }}
        </li>
      </ul>
    </div>

    <div v-if="!pending" class="grid grid-cols-6 md:grid-cols-12 gap-8">
      <div
        v-for="(skillGroup, group) in groupSkillsByCategory"
        :key="group"
        class="col-span-6 p-4 rounded-lg border border-slate-800 bg-gradient-to-b from-slate-900 to-black"
      >
        <h2 class="text-3xl font-bold flex justify-between mb-4">
          {{ group }}

          <span>
            {{ skillGroup.avgLevel.toFixed(1) }}
          </span>
        </h2>
        <div class="grid grid-cols-6 lg:grid-cols-12 gap-8">
          <div
            v-for="(skill, index) in skillGroup.skills"
            :key="index"
            class="col-span-3 lg:col-span-4"
          >
            <div class="w-full">
              <div class="flex justify-between mb-1">
                <div class="text-base font-light flex items-center">
                  <span class="truncate max-w-[85px] lg:max-w-max">
                    {{ skill.title }}
                  </span>

                  <span v-if="skill?.checked" class="ms-2">
                    <Icon
                      name="CheckCircleIcon"
                      type="outline"
                      class="text-blue-400 h-4 w-4"
                    />
                  </span>
                </div>
                <div class="text-sm font-bold hidden">{{ skill.level }}</div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  class="h-2.5 rounded-full"
                  :class="{
                    'bg-green-500': skill.level >= 8,
                    'bg-orange-500': skill.level >= 5 && skill.level < 8,
                    'bg-red-500': skill.level < 5,
                  }"
                  :style="`width: ${skill.level * 10}%`"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
