<script setup lang="ts">
import { ExclamationCircleIcon, ArrowPathIcon } from '@heroicons/vue/24/solid';
import type { IconName, HeroIconName, IconType } from '~/src/types';

interface Props {
  name: IconName;
  type?: IconType;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: 'ExclamationCircleIcon',
  type: 'solid',
  class: 'h-4 w-4',
});

const IconAsyncComponent = defineAsyncComponent({
  loader: async () => {
    try {
      let iconComponent: Component | undefined;

      if (props.type === 'custom') {
        const icon = await import(`./ui/Icon/Custom/src/${props.name}.vue`);
        iconComponent = icon as Component;
      }

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
    } catch (error) {
      throw new Error('Failed to load component.');
    }
  },
  loadingComponent: ArrowPathIcon,
  errorComponent: ExclamationCircleIcon,
  delay: 200,
  timeout: 4000,
});
</script>

<template>
  <i :class="`inline-block ${props.class}`">
    <IconAsyncComponent />
  </i>
</template>
