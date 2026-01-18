<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <section class="py-16 md:py-24 bg-primary">
    <div class="container text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        Klaar voor rust in je hoofd?
      </h2>
      <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        Begin vandaag. Over een week weet je hoe het écht gaat.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/producten">
          <Button size="lg" class="bg-secondary text-gray-900 hover:bg-secondary-dark">
            Bestel nu
          </Button>
        </RouterLink>
        <RouterLink to="/contact">
          <Button size="lg" variant="outline" class="border-white text-white hover:bg-white/10">
            Plan gratis adviesgesprek
          </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
