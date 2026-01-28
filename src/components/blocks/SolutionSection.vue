<script setup>
import { BarChart3, Lock, Bell, ArrowRight } from 'lucide-vue-next'

const features = [
  {
    icon: BarChart3,
    title: 'Sensoren meten',
    text: 'Bewegingssensoren registreren activiteit per ruimte, 24/7'
  },
  {
    icon: Lock,
    title: 'Algoritme leert',
    text: 'Het systeem herkent het dagritme en weet wat normaal is voor deze bewoner'
  },
  {
    icon: Bell,
    title: 'Melding bij afwijking',
    text: 'Alleen een signaal wanneer het patroon doorbroken wordt — niet bij elke beweging'
  }
]
</script>

<template>
  <section class="py-20 md:py-28 bg-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

    <div class="container relative">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="inline-block px-4 py-2 bg-green-100 text-green-700 font-semibold rounded-full text-sm mb-4">
          Slim thuisapparaat
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Meten + Algoritme = Gerust Zijn
        </h2>
        <p class="text-xl text-gray-600">
          Bewegingssensoren registreren activiteit. Het algoritme leert wat normaal is — en meldt alleen wanneer het patroon afwijkt. Geen camera's, geen inkijk.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="(feature, index) in features"
          :key="feature.text"
          class="group relative"
        >
          <!-- Connector line -->
          <div v-if="index < 2" class="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />

          <div class="relative bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div class="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
              <component :is="feature.icon" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-lg font-bold text-primary mb-2">{{ feature.title }}</h3>
            <p class="text-gray-700 font-medium">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
