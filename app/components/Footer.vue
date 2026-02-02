<template>
  <footer id="footer" class="mt-20 border-t border-slate-800 py-20 text-center">
    <p class="mb-4 text-2xl font-light">Have a nice works?</p>
    <h2 class="font-firacode mb-3 text-5xl font-bold tracking-tight text-white">
      Let's Work Together
    </h2>

    <p class="font-firacode mb-6 text-4xl font-bold text-white uppercase">
      <UButton @click="copyEmailAddress" color="neutral" size="xl">
        Copy Email Address
      </UButton>
    </p>

    <div class="container mx-auto my-20">
      <div
        class="relative h-full rounded-lg border border-slate-800 bg-linear-to-b from-slate-900 to-black p-8 text-center"
      >
        If you’d like a deeper dive into my skills and experience, download my
        detailed resume. Let’s see if we’re the perfect fit!
      </div>
    </div>

    <p class="text-sm text-slate-500">
      ©2026. <span class="font-bold">Designed</span>,
      <span class="font-bold">Created</span> and
      <span class="font-bold">Develop</span> by
      <strong><a href="https://anthuanvasquez.net">Anthuan</a></strong
      >.
    </p>
  </footer>
</template>

<script setup lang="ts">
/**
 * Copy email address to clipboard. Notify after copy.
 */
const copyEmailAddress = () => {
  const email = '[EMAIL_ADDRESS]';
  navigator.clipboard.writeText(email);
  useToast().add({
    title: 'Email Copied',
    description: 'Email copied to clipboard',
  });
};
</script>
