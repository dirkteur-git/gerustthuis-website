<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { ArrowRight, MapPin, Home, Users, CheckCircle, Sparkles, Lock } from 'lucide-vue-next'

const waitlistInfo = [
  { icon: MapPin, text: 'In welke regio je woont' },
  { icon: Home, text: 'In wat voor woning' },
  { icon: Users, text: 'Wie je wilt beschermen' }
]

const benefits = [
  'Goed werkt in jouw situatie',
  'Niet te veel of te weinig meldt',
  'Vanaf dag één betrouwbaar is'
]
</script>

<template>
  <!-- Main CTA -->
  <section class="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

    <div class="container relative">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles class="w-4 h-4 text-white/70" />
            <span class="text-white/90 font-medium text-sm">Wachtlijst</span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Gefaseerde start, met aandacht
          </h2>
          <p class="text-xl text-white/80 max-w-2xl mx-auto">
            We starten GerustThuis stap voor stap. Niet alles tegelijk, maar per situatie.
          </p>
        </div>

        <!-- Info cards -->
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <!-- What we ask -->
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 class="text-xl font-bold text-white mb-6">Bij inschrijving vragen we o.a.:</h3>
            <ul class="space-y-4">
              <li
                v-for="item in waitlistInfo"
                :key="item.text"
                class="flex items-center gap-4"
              >
                <div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <component :is="item.icon" class="w-5 h-5 text-white/90" />
                </div>
                <span class="text-white/90 text-lg">{{ item.text }}</span>
              </li>
            </ul>
          </div>

          <!-- Why we do this -->
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 class="text-xl font-bold text-white mb-6">Zo zorgen we dat GerustThuis:</h3>
            <ul class="space-y-4">
              <li
                v-for="benefit in benefits"
                :key="benefit"
                class="flex items-center gap-4"
              >
                <div class="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle class="w-5 h-5 text-green-300" />
                </div>
                <span class="text-white/90 text-lg">{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="text-center">
          <RouterLink to="/particulier/wachtlijst">
            <Button size="lg" class="bg-white text-primary hover:bg-gray-100 shadow-xl shadow-black/20 text-lg px-8 py-4">
              <ArrowRight class="w-5 h-5 mr-2" />
              Meld je aan voor de wachtlijst
            </Button>
          </RouterLink>
          <p class="text-white/60 mt-6 flex items-center justify-center gap-2">
            <Lock class="w-4 h-4" />
            Je zit nergens aan vast. Je krijgt als eerste toegang zodra we starten in jouw situatie.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Closing statement -->
  <section class="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
    <div class="container">
      <div class="max-w-3xl mx-auto text-center">
        <div class="inline-block mb-8">
          <div class="w-1 h-16 bg-gradient-to-b from-primary to-primary/30 mx-auto rounded-full" />
        </div>
        <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed">
          GerustThuis is gebouwd vanuit één overtuiging:
        </p>
        <p class="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
          je moet kunnen loslaten, zonder je zorgen te maken.
        </p>
      </div>
    </div>
  </section>
</template>
