<script setup>
import { Users, Heart, MapPin, Quote } from 'lucide-vue-next'

const audiences = [
  {
    icon: Users,
    title: 'Kinderen van ouders op leeftijd',
    description: 'Je ouder woont nog zelfstandig, maar je maakt je zorgen. Zeker als je niet om de hoek woont.',
    quote: '"Ik wil niet elke dag bellen om te checken of het goed gaat — dat voelt betuttelend."'
  },
  {
    icon: Heart,
    title: 'Partners die zorgen',
    description: 'Je partner is kwetsbaar, maar je moet ook boodschappen doen, naar de fysio, of even eruit.',
    quote: '"Ik durf de deur niet meer uit. Stel dat er iets gebeurt terwijl ik weg ben?"'
  }
]
</script>

<template>
  <section class="py-20 md:py-28 bg-white relative overflow-hidden">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

    <div class="container relative">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
          Voor wie is dit?
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Voor mantelzorgers
        </h2>
        <p class="text-xl text-gray-600">
          GerustThuis is er voor iedereen die zorgt voor een naaste — en dat niet altijd 24/7 kan doen.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        <div
          v-for="audience in audiences"
          :key="audience.title"
          class="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
        >
          <!-- Accent corner -->
          <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-3xl rounded-tr-3xl" />

          <div class="relative">
            <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <component :is="audience.icon" class="w-8 h-8 text-primary" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ audience.title }}</h3>
            <p class="text-gray-600 text-lg leading-relaxed mb-4">{{ audience.description }}</p>

            <!-- Quote -->
            <div class="bg-white rounded-xl p-4 border-l-4 border-primary/30 shadow-sm">
              <Quote class="w-5 h-5 text-primary/40 mb-2" />
              <p class="text-gray-500 italic text-base">{{ audience.quote }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom statement -->
      <div class="max-w-2xl mx-auto">
        <div class="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 text-center">
          <div class="flex items-center justify-center gap-3 text-gray-700 mb-3">
            <MapPin class="w-6 h-6 text-primary" />
            <span class="text-lg">Of je nu verder weg woont of even een boodschap wilt doen —</span>
          </div>
          <p class="text-2xl font-bold text-gray-900">
            je wilt weten: gaat het goed?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
