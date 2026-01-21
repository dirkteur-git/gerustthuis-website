<script setup>
import { Phone, VolumeX, Brain } from 'lucide-vue-next'

const problems = [
  {
    icon: Phone,
    text: 'Je belt om te checken',
    subtext: 'Elke dag, voor de zekerheid'
  },
  {
    icon: VolumeX,
    text: 'Je schrikt van stilte',
    subtext: 'Geen bericht = onrust'
  },
  {
    icon: Brain,
    text: 'Je voelt je continu verantwoordelijk',
    subtext: 'Altijd in je achterhoofd'
  }
]
</script>

<template>
  <section class="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100 relative">
    <!-- Decorative top wave -->
    <div class="absolute top-0 left-0 right-0 h-16 bg-white" style="clip-path: ellipse(70% 100% at 50% 0%);" />

    <div class="container relative">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-amber-100 text-amber-700 font-semibold rounded-full text-sm mb-4">
          Het probleem
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Herkenbaar?
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
        <div
          v-for="(problem, index) in problems"
          :key="index"
          class="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center border-t-4 border-amber-400"
        >
          <div class="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <component :is="problem.icon" class="w-8 h-8 text-amber-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ problem.text }}</h3>
          <p class="text-gray-500">{{ problem.subtext }}</p>
        </div>
      </div>

      <div class="text-center max-w-xl mx-auto">
        <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p class="text-2xl font-bold text-gray-900 mb-2">
            Die onrust blijft.
          </p>
          <p class="text-gray-600 text-lg">
            Ook als er "niets" aan de hand is.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
