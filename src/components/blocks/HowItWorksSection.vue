<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { Settings, Brain, Bell } from 'lucide-vue-next'

const steps = [
  {
    number: '1',
    icon: Settings,
    title: 'Discrete sensoren, geen camera\'s',
    description: 'Bewegingssensoren en deurcontacten, geïnstalleerd in de woning. Alle data blijft lokaal - er wordt niets naar de cloud gestuurd.'
  },
  {
    number: '2',
    icon: Brain,
    title: 'Het systeem leert lokaal het ritme',
    description: 'De hub in de woning analyseert het dagelijkse patroon. Na 1-2 weken kent het systeem wat normaal is - zonder dat wij de data zien.'
  },
  {
    number: '3',
    icon: Bell,
    title: 'Alleen melding bij afwijkingen',
    description: 'Je kunt in de app zien dat alles in orde is. Geen dagelijkse updates of sensordata - alleen een melding als er echt iets aan de hand kan zijn.'
  }
]
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Zo werkt GerustThuis
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Van installatie tot gemoedsrust in drie eenvoudige stappen
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
        <div
          v-for="step in steps"
          :key="step.number"
          class="relative"
        >
          <!-- Step number -->
          <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
            <component :is="step.icon" class="w-8 h-8 text-white" />
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-gray-900 mb-3">
            {{ step.title }}
          </h3>
          <p class="text-gray-600">
            {{ step.description }}
          </p>

          <!-- Connector line (hidden on mobile and last item) -->
          <div
            v-if="step.number !== '3'"
            class="hidden md:block absolute top-8 left-20 w-full h-0.5 bg-gray-200"
            style="width: calc(100% - 4rem)"
          />
        </div>
      </div>

      <div class="text-center">
        <RouterLink to="/producten">
          <Button variant="primary" size="lg">
            Bekijk de pakketten
          </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
