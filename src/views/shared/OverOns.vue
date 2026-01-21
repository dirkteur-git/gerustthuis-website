<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { Heart, Users, Quote, ArrowRight, Sparkles, Flag, Target, Eye } from 'lucide-vue-next'

const team = [
  {
    name: 'Jan de Vries',
    role: 'Oprichter & CEO',
    bio: 'Voormalig mantelzorger',
    color: 'blue'
  },
  {
    name: 'Lisa Bakker',
    role: 'Hoofd Productontwikkeling',
    bio: 'Specialist in IoT',
    color: 'emerald'
  },
  {
    name: 'Mohammed El-Amrani',
    role: 'Hoofd Klantsucces',
    bio: 'Jarenlange zorgervaring',
    color: 'purple'
  }
]

const values = [
  {
    icon: Eye,
    title: 'Privacy voorop',
    description: 'Geen camera\'s, geen tracking. Alleen wat nodig is.'
  },
  {
    icon: Heart,
    title: 'Gemaakt met zorg',
    description: 'Door mensen die het zelf hebben meegemaakt.'
  },
  {
    icon: Target,
    title: 'Eenvoud boven alles',
    description: 'Technologie die werkt zonder gedoe.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/5 overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div class="absolute bottom-10 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div class="container relative">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-semibold text-sm mb-6 shadow-sm border border-primary/10">
            <Sparkles class="w-4 h-4" />
            Over ons
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Gebouwd door mantelzorgers,<br class="hidden md:block" />
            <span class="text-primary">voor mantelzorgers</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Wij begrijpen de dagelijkse zorgen. Niet omdat we het gelezen hebben, maar omdat we het zelf hebben meegemaakt.
          </p>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container">
        <div class="max-w-5xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
                Ons verhaal
              </span>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Waarom we dit bouwen
              </h2>

              <div class="prose prose-lg text-gray-600 space-y-6">
                <p class="text-lg leading-relaxed">
                  GerustThuis is ontstaan uit persoonlijke ervaring. Onze oprichter Jan was jarenlang mantelzorger voor zijn moeder die alleen woonde. De dagelijkse telefoontjes, de constante ongerustheid, het schuldgevoel — hij kende het allemaal.
                </p>
              </div>
            </div>

            <div class="relative">
              <div class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-10 border border-primary/10">
                <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Quote class="w-7 h-7 text-primary" />
                </div>
                <p class="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                  "Ik wilde gewoon weten of het goed ging, zonder haar elke dag te bellen. Maar camera's voelde als een inbreuk op haar privacy. Er moest toch iets anders zijn?"
                </p>
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    J
                  </div>
                  <div>
                    <p class="font-bold text-gray-900">Jan de Vries</p>
                    <p class="text-gray-600">Oprichter GerustThuis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12">
            <p class="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
              Samen met technologen en zorgprofessionals ontwikkelde hij GerustThuis: een systeem dat laat weten dat het goed gaat, <strong class="text-gray-900">zonder controle</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100">
      <div class="container">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-white text-primary font-semibold rounded-full text-sm mb-4 shadow-sm">
              Onze waarden
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
              Waar we voor staan
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="value in values"
              :key="value.title"
              class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div class="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
                <component :is="value.icon" class="w-7 h-7 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ value.title }}</h3>
              <p class="text-gray-600 text-lg">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Het team
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
              De mensen achter GerustThuis
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="member in team"
              :key="member.name"
              class="group text-center"
            >
              <div class="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div
                  class="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
                  :class="{
                    'bg-blue-100': member.color === 'blue',
                    'bg-emerald-100': member.color === 'emerald',
                    'bg-purple-100': member.color === 'purple'
                  }"
                >
                  <Users
                    class="w-10 h-10"
                    :class="{
                      'text-blue-600': member.color === 'blue',
                      'text-emerald-600': member.color === 'emerald',
                      'text-purple-600': member.color === 'purple'
                    }"
                  />
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-1">{{ member.name }}</h3>
                <p
                  class="font-semibold mb-3"
                  :class="{
                    'text-blue-600': member.color === 'blue',
                    'text-emerald-600': member.color === 'emerald',
                    'text-purple-600': member.color === 'purple'
                  }"
                >
                  {{ member.role }}
                </p>
                <p class="text-gray-600">{{ member.bio }}</p>
              </div>
            </div>
          </div>

          <div class="mt-12 flex items-center justify-center gap-3 text-gray-600">
            <Flag class="w-5 h-5 text-primary" />
            <span class="font-medium">100% Nederlands initiatief</span>
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
            Meld je aan voor de wachtlijst
          </h2>
          <p class="text-xl text-white/80 mb-10">
            Ontvang als eerste toegang zodra we starten in jouw situatie.
          </p>
          <RouterLink to="/particulier/wachtlijst">
            <Button size="lg" class="bg-white text-primary hover:bg-gray-100 shadow-xl shadow-black/20">
              <ArrowRight class="w-5 h-5 mr-2" />
              Meld je aan voor de wachtlijst
            </Button>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Closing -->
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
  </div>
</template>
