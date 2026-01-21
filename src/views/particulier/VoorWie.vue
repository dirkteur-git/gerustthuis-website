<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { ArrowRight, Users, Heart, UserCheck, Quote, CheckCircle, Sparkles } from 'lucide-vue-next'

const segments = [
  {
    icon: Users,
    title: 'Je zorgt voor een ouder die zelfstandig woont',
    description: 'Je woont misschien dichtbij, misschien verder weg. Je belt regelmatig, "voor de zekerheid". Je bent bang dat je pas iets hoort als het te laat is.',
    solution: 'GerustThuis leert het ritme van je ouder en waarschuwt alleen bij afwijkingen. Geen camera\'s, geen constante controle — wél gemoedsrust.',
    color: 'blue'
  },
  {
    icon: Heart,
    title: 'Je woont samen met iemand die kwetsbaar is',
    description: 'Je partner is niet meer helemaal de oude. Jij bent er meestal, maar zelfs een snelle boodschap geeft stress. Wat als er dan iets gebeurt?',
    solution: 'GerustThuis zorgt dat je even los kunt laten, zonder het gevoel te hebben dat je iemand alleen laat.',
    color: 'rose'
  },
  {
    icon: UserCheck,
    title: 'Je wisselt de zorg af met anderen',
    description: 'Misschien zijn er broers, zussen of meerdere mantelzorgers. Wie heeft er voor het laatst contact gehad? Je wilt overzicht, zonder extra werk.',
    solution: 'GerustThuis creëert overzicht voor iedereen die betrokken is — zonder dat je er actief iets voor hoeft te doen.',
    color: 'emerald'
  }
]

const quotes = [
  'Ik bel te vaak, maar anders ben ik ongerust.',
  'Ik wil even weg kunnen, zonder stress.',
  'Ik wil weten of het goed gaat — zonder te moeten vragen.'
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/5 overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div class="absolute bottom-10 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div class="container relative">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-semibold text-sm mb-6 shadow-sm border border-primary/10">
            <Sparkles class="w-4 h-4" />
            Voor wie?
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Is GerustThuis iets voor jou?
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Rust in je hoofd, ook als je niet kunt bellen. Ontdek voor wie GerustThuis bedoeld is.
          </p>
        </div>
      </div>
    </section>

    <!-- Intro -->
    <section class="py-20 md:py-24 bg-white relative">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <p class="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              Zorgen voor iemand die kwetsbaar is, betekent vaak: opletten, bellen, appen, hopen dat je niks mist. Ook als er niets aan de hand lijkt, voel je je toch verantwoordelijk.
            </p>
            <div class="flex items-center gap-4 bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
              <CheckCircle class="w-8 h-8 text-primary flex-shrink-0" />
              <p class="text-xl text-gray-900 font-medium">
                GerustThuis is er voor jou als je dat gevoel herkent — en verlangt naar rust, zonder controle te verliezen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Segments -->
    <section class="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100">
      <div class="container">
        <div class="max-w-5xl mx-auto space-y-8">
          <div
            v-for="(segment, index) in segments"
            :key="segment.title"
            class="group"
          >
            <div class="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden relative">
              <!-- Color accent -->
              <div
                class="absolute top-0 left-0 w-2 h-full"
                :class="{
                  'bg-blue-500': segment.color === 'blue',
                  'bg-rose-500': segment.color === 'rose',
                  'bg-emerald-500': segment.color === 'emerald'
                }"
              />

              <div class="flex flex-col md:flex-row md:items-start gap-6 pl-4">
                <div
                  class="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  :class="{
                    'bg-blue-100': segment.color === 'blue',
                    'bg-rose-100': segment.color === 'rose',
                    'bg-emerald-100': segment.color === 'emerald'
                  }"
                >
                  <component
                    :is="segment.icon"
                    class="w-8 h-8"
                    :class="{
                      'text-blue-600': segment.color === 'blue',
                      'text-rose-600': segment.color === 'rose',
                      'text-emerald-600': segment.color === 'emerald'
                    }"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">
                    {{ segment.title }}
                  </h3>
                  <p class="text-gray-600 text-lg mb-6 leading-relaxed">
                    {{ segment.description }}
                  </p>
                  <div
                    class="rounded-2xl p-6"
                    :class="{
                      'bg-blue-50': segment.color === 'blue',
                      'bg-rose-50': segment.color === 'rose',
                      'bg-emerald-50': segment.color === 'emerald'
                    }"
                  >
                    <div class="flex items-start gap-3">
                      <CheckCircle
                        class="w-6 h-6 flex-shrink-0 mt-0.5"
                        :class="{
                          'text-blue-600': segment.color === 'blue',
                          'text-rose-600': segment.color === 'rose',
                          'text-emerald-600': segment.color === 'emerald'
                        }"
                      />
                      <p class="text-gray-800 font-medium text-lg">
                        {{ segment.solution }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quotes -->
    <section class="py-20 md:py-28 bg-white relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />

      <div class="container relative">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Herkenbaar?
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Herkenbare uitspraken
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(quote, index) in quotes"
            :key="quote"
            class="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 text-center border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Quote class="w-7 h-7 text-primary" />
            </div>
            <p class="text-xl text-gray-700 italic leading-relaxed">
              "{{ quote }}"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

      <div class="container relative">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Gun jezelf rust
          </h2>
          <p class="text-xl text-white/80 mb-10">
            Geef je op voor de wachtlijst en krijg als eerste toegang.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/particulier/wachtlijst">
              <Button size="lg" class="bg-white text-primary hover:bg-gray-100 shadow-xl shadow-black/20">
                <ArrowRight class="w-5 h-5 mr-2" />
                Meld je aan voor de wachtlijst
              </Button>
            </RouterLink>
            <RouterLink to="/particulier/hoe-het-werkt">
              <Button size="lg" variant="outline" class="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                Bekijk hoe het werkt
              </Button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
