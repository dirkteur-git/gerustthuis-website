<script setup>
import { RouterLink } from 'vue-router'
import { Flag, Shield, Heart, Home } from 'lucide-vue-next'

const reasons = [
  {
    icon: Flag,
    title: 'Nederlands bedrijf, Nederlandse support',
    description: 'Altijd iemand bereikbaar die je taal spreekt'
  },
  {
    icon: Shield,
    title: 'Privacy-first: geen camera\'s, data blijft van jou',
    description: 'Wij verkopen nooit data aan derden'
  },
  {
    icon: Heart,
    title: 'Gebouwd door mantelzorgers, voor mantelzorgers',
    description: 'We begrijpen waar je doorheen gaat'
  },
  {
    icon: Home,
    title: 'Werkt met elk type woning',
    description: 'Van appartement tot vrijstaand huis'
  }
]
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text content -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Waarom GerustThuis?
          </h2>

          <div class="space-y-6">
            <div
              v-for="reason in reasons"
              :key="reason.title"
              class="flex gap-4"
            >
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <component :is="reason.icon" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">
                  {{ reason.title }}
                </h3>
                <p class="text-gray-600">
                  {{ reason.description }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <RouterLink to="/over-ons" class="text-primary hover:text-primary-light font-medium">
              Lees meer over ons &rarr;
            </RouterLink>
          </div>
        </div>

        <!-- Image placeholder -->
        <div class="relative">
          <div class="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
            <div class="text-center p-8">
              <div class="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart class="w-12 h-12 text-primary" />
              </div>
              <p class="text-gray-600">
                Afbeelding van een gelukkig gezin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
