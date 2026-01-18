<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import { AlertTriangle, Clock, Heart, ArrowRight } from 'lucide-vue-next'

const stakes = [
  {
    icon: Clock,
    title: 'Te laat ontdekt',
    description: 'Zonder monitoring kan het uren of zelfs een dag duren voordat iemand merkt dat er iets mis is. Na een val telt elke minuut.'
  },
  {
    icon: AlertTriangle,
    title: 'Constante onzekerheid',
    description: 'Elke gemiste telefoontje zorgt voor paniek. Is alles goed? Of is er iets gebeurd? Die onrust vreet aan je.'
  },
  {
    icon: Heart,
    title: 'Gedwongen verhuizing',
    description: 'Zonder de juiste ondersteuning kan een klein incident leiden tot een versnelde opname in een zorginstelling - terwijl je ouder het liefst thuis blijft.'
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Wat als je niets doet?
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          De risico's van wachten
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <Card
          v-for="stake in stakes"
          :key="stake.title"
          class="border-l-4 border-l-warning"
        >
          <div class="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mb-4">
            <component :is="stake.icon" class="w-6 h-6 text-warning" />
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">
            {{ stake.title }}
          </h3>
          <p class="text-gray-600">
            {{ stake.description }}
          </p>
        </Card>
      </div>

      <div class="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          Het hoeft niet zo te zijn
        </h3>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Met GerustThuis weet je dat alles in orde is. Geen zorgen, geen constante check-ins.
          Gewoon gemoedsrust - voor jou en voor je ouder.
        </p>
        <RouterLink to="/producten">
          <Button variant="primary" size="lg">
            Bekijk de pakketten
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
