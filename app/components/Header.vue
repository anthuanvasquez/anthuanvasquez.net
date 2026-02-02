<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue';
import LangSwitcher from './LangSwitcher.vue';

const navigation = [
  { name: 'Resume', href: '/anthuan_vasquez_resume.pdf' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/anthuanvasquez/' },
  { name: 'GitHub', href: 'https://github.com/anthuanvasquez' },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-4 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="gradient-text text-2xl font-bold">//AV</span>
        </a>
      </div>

      <div class="flex lg:hidden">
        <button
          type="button"
          class="hover:text-secondary -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <UIcon name="i-lucide-menu" class="size-6" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden lg:flex lg:items-center lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm leading-6 font-semibold text-white"
          :target="item.href.includes('http') ? '_blank' : '_self'"
        >
          {{ item.name }}
        </a>

        <LangSwitcher />
      </div>
    </nav>

    <Dialog
      :open="mobileMenuOpen"
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-50" />

      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <UIcon name="i-lucide-x" class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-white hover:bg-slate-900"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
