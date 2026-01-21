<script setup>
import { Brain, DoorOpen, Zap, Shield, Heart } from 'lucide-vue-next'

const benefits = [
  {
    icon: Brain,
    title: 'Rust in je hoofd',
    description: 'Geen constante ongerustheid meer'
  },
  {
    icon: DoorOpen,
    title: 'Vrijheid om even weg te gaan',
    description: 'Met een gerust gevoel de deur uit'
  },
  {
    icon: Zap,
    title: 'Sneller handelen als het nodig is',
    description: 'Direct actie bij afwijkingen'
  },
  {
    icon: Shield,
    title: 'Veiligheid zonder controle',
    description: 'Privacy blijft intact'
  }
]
</script>

<template>
  <section class="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
    <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

    <div class="container relative">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-white text-primary font-semibold rounded-full text-sm mb-4 shadow-sm">
            Wat het oplevert
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Waar GerustThuis voor staat
          </h2>
        </div>

        <!-- Benefits grid -->
        <div class="grid sm:grid-cols-2 gap-6 mb-16">
          <div
            v-for="(benefit, index) in benefits"
            :key="benefit.title"
            class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div class="flex items-start gap-5">
              <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
                <component :is="benefit.icon" class="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ benefit.title }}</h3>
                <p class="text-gray-600">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Closing statement -->
        <div class="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 text-center max-w-3xl mx-auto">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart class="w-8 h-8 text-primary" />
          </div>
          <p class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            GerustThuis is geen toezicht.
          </p>
          <p class="text-xl text-gray-600">
            Het is een vangnet dat alleen zichtbaar wordt als het nodig is.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
