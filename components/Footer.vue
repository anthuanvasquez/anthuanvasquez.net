<script setup lang="ts">
import FooterSignUpForm from '@/components/FooterSignUpForm.vue';
</script>

<template>
  <footer id="footer" class="footer py-8">
    <div class="container mx-auto">
      <div class="grid grid-cols-3 gap-8">
        <div class="column">
          <div class="box first">
            <h3 class="title is-5">Thank you for visiting my page.</h3>
            <p>
              When I'm not writing code you can find me trying to learn new
              things, playing video games, trying new restaurants, trying out
              new tech, taking a coke or making music.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box middle">
            <h3 class="title is-5">
              People are the essence of the tech industry.
            </h3>
            <p>
              Without people, we would have no clear purpose in our work. I
              believe in helping people feel welcomed and included when it comes
              to my work and who I am as a person.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box last">
            <h3 class="title is-5">Get in touch.</h3>
            <p>
              If you have any questions feel free to reach out at
              <a href="mailto:me@anthuanvasquez.net"
                ><i class="fas fa-envelope" /> me@anthuanvasquez.net</a
              >. I'm excited for our session and to meet you!.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="copyrights" class="copyrights mt-8">
      <div class="container mx-auto text-center">
        <p>
          Copyrights 2019. <span>Designed</span>, <span>Created</span> and
          <span>Develop</span> by
          <strong><a href="https://und3fined.dev">und3fined.dev</a></strong
          >.
        </p>
      </div>
    </div>
  </footer>
</template>
