<template>
  <div
    class="flex min-h-screen items-center justify-center bg-linear-to-b from-slate-900 to-black"
  >
    <div class="relative isolate">
      <div class="mx-auto max-w-6xl">
        <div class="mb-6 flex justify-center">
          <div
            class="relative rounded-full text-center text-xl font-thin text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            <div class="gradient-bg mx-auto mt-4 block h-0.5 w-20"></div>
          </div>
        </div>
        <div class="text-center">
          <h1 class="gradient-text text-4xl font-bold text-white sm:text-8xl">
            {{ $t('hero-title') }}
          </h1>
          <p class="mx-auto mt-8 max-w-lg text-xl font-light text-slate-500">
            I'm Anthuan, a Full-Stack JavaScript Engineer living in DR, and I
            focus on making digital experiences that are easy to use, enjoyable,
            and get the job done.
          </p>
        </div>
      </div>
    </div>
  </div>

  <Section title="Knowledge" subtitle="A Vast Of">
    <Skills />
  </Section>

  <Section title="Experiences" subtitle="Latest">
    <Experiences />
  </Section>

  <Section title="Projects" subtitle="Built">
    <Projects />
  </Section>

  <Section title="I Can Do" subtitle="What">
    <Services />
  </Section>

  <div class="container mx-auto">
    <div
      class="relative h-full rounded-lg border border-slate-800 bg-linear-to-b from-slate-900 to-black p-8 text-center"
    >
      <MapRD />
    </div>
  </div>
</template>
