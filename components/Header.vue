<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import LangSwitcher from './LangSwitcher.vue';

const navigation = [
  { name: 'Software', href: '#' },
  { name: 'Music', href: '#' },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <div
    class="bg-gradient-to-b from-slate-900 to-black min-h-screen flex items-center justify-center"
  >
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="gradient-text text-2xl font-bold"> ThV </span>
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-secondary"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:items-center lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-white"
            >{{ item.name }}</a
          >

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
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
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
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-slate-900"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate">
      <div class="mx-auto max-w-2xl">
        <div class="mb-6 flex justify-center">
          <div
            class="relative rounded-full text-xl text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-center font-thin"
          >
            Hello World 👋. I'm
            <div class="text-4xl">Anthuan Vásquez</div>
            <div class="block mx-auto mt-4 h-0.5 w-20 gradient-bg"></div>
          </div>
        </div>
        <div class="text-center">
          <h1
            class="font-bold tracking-tight text-white text-4xl sm:text-7xl gradient-text"
          >
            {{ $t('hero-title') }}
          </h1>
          <p class="mt-6 text-xl text-white">
            Based in the Dominican Republic.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
