<script setup lang="ts">
import { ExclamationCircleIcon, ArrowPathIcon } from '@heroicons/vue/24/solid';
import { twMerge } from 'tailwind-merge';
import type { IconName, HeroIconName, IconType } from '~/types';

interface Props {
  name: IconName;
  type?: IconType;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: 'ExclamationCircleIcon',
  type: 'solid',
  class: '',
});

const iconClass = computed(() => {
  return twMerge('inline-block h-4 w-4', props.class);
});

const IconAsyncComponent = defineAsyncComponent({
  loadingComponent: ArrowPathIcon,
  errorComponent: ExclamationCircleIcon,
  delay: 200,
  timeout: 4000,
  loader: async () => {
    try {
      let iconComponent: Component | undefined;

      if (props.type === 'outline') {
        const module = await import('@heroicons/vue/24/outline');
        iconComponent = module[props.name as HeroIconName] as Component;
      }

      if (props.type === 'solid') {
        const module = await import('@heroicons/vue/24/solid');
        iconComponent = module[props.name as HeroIconName] as Component;
      }

      if (iconComponent === undefined) {
        throw new Error('Specified icon does not exist.');
      }

      return iconComponent;
    } catch (error: any) {
      throw new Error('Failed to load component.');
    }
  },
});
</script>

<template>
  <IconAsyncComponent :class="iconClass" />
</template>
