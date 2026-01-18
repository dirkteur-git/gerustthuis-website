<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { Check, Shield, Eye, Flag } from 'lucide-vue-next'

const trustBadges = [
  { icon: Eye, text: 'Geen camera\'s' },
  { icon: Shield, text: '100% privacy' },
  { icon: Flag, text: 'Nederlands' }
]
</script>

<template>
  <section class="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
    <div class="container py-16 md:py-24 lg:py-32">
      <div class="max-w-3xl">
        <!-- Main headline -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Weet dat het goed gaat.
          <span class="text-primary">Zonder te bellen.</span>
        </h1>

        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
          Slimme sensoren leren lokaal het dagritme van je ouder. Je krijgt alleen een melding bij afwijkingen. Geen camera's, geen data naar de cloud.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <RouterLink to="/producten">
            <Button variant="primary" size="lg">
              Bekijk pakketten
            </Button>
          </RouterLink>
          <RouterLink to="/hoe-het-werkt">
            <Button variant="outline" size="lg">
              Hoe werkt het?
            </Button>
          </RouterLink>
        </div>

        <!-- Trust badges -->
        <div class="flex flex-wrap gap-6 mb-8">
          <div
            v-for="badge in trustBadges"
            :key="badge.text"
            class="flex items-center gap-2 text-gray-600"
          >
            <component :is="badge.icon" class="w-5 h-5 text-primary" />
            <span>{{ badge.text }}</span>
          </div>
        </div>

        <!-- Social proof -->
        <p class="text-gray-500">
          <span class="font-semibold text-gray-900">Al 500+ families</span> geholpen
        </p>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent hidden lg:block" />
  </section>
</template>
