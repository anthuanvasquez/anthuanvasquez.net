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
      class="flex items-center rounded-full border px-4 py-2 text-sm font-semibold uppercase text-white"
    >
      <Icon :name="'GlobeAltIcon'" type="outline" class="mr-2 size-4" />
      {{ locale }}
    </MenuButton>
    <MenuItems
      class="absolute right-8 mt-2 w-[170px] origin-top-right divide-y divide-slate-400 rounded-md border border-slate-400 bg-black shadow-lg ring-1 ring-black/5 focus:outline-none"
    >
      <MenuItem
        v-for="localeObj in availableLocales"
        :key="localeObj.code"
        as="button"
        class="group flex w-full items-center p-2 text-sm text-white hover:text-secondary"
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
            class="ms-2 size-4 text-white"
          />
        </span>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>
