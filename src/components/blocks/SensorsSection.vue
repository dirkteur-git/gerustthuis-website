<script setup>
import { Sofa, UtensilsCrossed, Bath, BedDouble, Sparkles } from 'lucide-vue-next'

const locations = [
  { icon: Sofa, name: 'Woonkamer', color: 'from-blue-500 to-blue-600' },
  { icon: UtensilsCrossed, name: 'Keuken', color: 'from-amber-500 to-amber-600' },
  { icon: Bath, name: 'Badkamer', color: 'from-cyan-500 to-cyan-600' },
  { icon: BedDouble, name: 'Slaapkamer of hal', color: 'from-purple-500 to-purple-600' }
]
</script>

<template>
  <section class="py-20 md:py-28 bg-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

    <div class="container relative">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content -->
        <div>
          <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Hoeveel sensoren?
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Minder dan je verwacht
          </h2>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            In veel woningen is een logisch patroon zichtbaar met ongeveer <strong class="text-gray-900">4 sensoren</strong>, geplaatst op strategische plekken.
          </p>

          <div class="space-y-4">
            <div class="flex items-center gap-3 text-gray-600">
              <Sparkles class="w-5 h-5 text-primary" />
              <span>Zelfs in een klein appartement ontstaat zo al snel een betrouwbaar ritme.</span>
            </div>
            <p class="text-gray-500 text-sm pl-8">
              (Uit te breiden indien nodig, maar klein starten werkt vaak het best.)
            </p>
          </div>
        </div>

        <!-- Visual grid -->
        <div class="grid grid-cols-2 gap-4 md:gap-6">
          <div
            v-for="(location, index) in locations"
            :key="location.name"
            class="group relative bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            :class="{ 'md:translate-y-8': index % 2 === 1 }"
          >
            <!-- Gradient accent -->
            <div
              class="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r"
              :class="location.color"
            />

            <div
              class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br group-hover:scale-110 transition-transform"
              :class="location.color"
            >
              <component :is="location.icon" class="w-7 h-7 text-white" />
            </div>
            <p class="font-bold text-gray-900 text-lg">{{ location.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
