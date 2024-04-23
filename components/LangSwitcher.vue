<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

const { locale, locales, setLocale } = useI18n();
const availableLocales = computed(() => {
  return locales.value;
});
</script>

<template>
  <Menu as="div" class="text-right">
    <MenuButton
      class="uppercase text-sm font-semibold text-white flex items-center py-2 px-4 rounded-full border"
    >
      <Icon :name="'GlobeAltIcon'" type="outline" class="h-4 w-4 mr-2" />
      {{ locale }}
    </MenuButton>
    <MenuItems
      class="absolute right-8 mt-2 w-[170px] origin-top-right divide-y divide-slate-400 border border-slate-400 rounded-md bg-black shadow-lg ring-1 ring-black/5 focus:outline-none"
    >
      <MenuItem
        v-for="localeObj in availableLocales"
        :key="localeObj.code"
        as="button"
        class="text-white group flex w-full items-center px-2 py-2 text-sm hover:text-secondary"
        @click="setLocale(localeObj.code)"
      >
        <span class="mr-2">
          {{ localeObj.flag }}
        </span>
        <span>
          {{ localeObj.description }}
        </span>
        <span>
          <Icon
            v-if="locale === localeObj.code"
            :name="'CheckIcon'"
            class="h-4 w-4 ms-2 text-white"
          />
        </span>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>
