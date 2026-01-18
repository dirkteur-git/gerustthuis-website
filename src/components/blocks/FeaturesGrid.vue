<script setup>
import Card from '@/components/ui/Card.vue'
import {
  Activity,
  Bell,
  Radar,
  Users,
  Moon,
  LifeBuoy
} from 'lucide-vue-next'

const features = [
  {
    icon: Activity,
    title: 'Dagritme monitoring',
    description: 'Weet wanneer je ouder opstaat, beweegt en naar bed gaat'
  },
  {
    icon: Bell,
    title: 'Slimme herinneringen',
    description: 'Medicijnen, drinken, afspraken - vriendelijk via spraak'
  },
  {
    icon: Radar,
    title: 'Valdetectie',
    description: 'Radar-sensoren detecteren een val, zonder camera'
  },
  {
    icon: Users,
    title: 'Familie-dashboard',
    description: 'Eén overzicht voor het hele gezin, ieder eigen login'
  },
  {
    icon: Moon,
    title: 'Nachtmodus',
    description: 'Automatisch zacht licht bij nachtelijk toiletbezoek'
  },
  {
    icon: LifeBuoy,
    title: 'Noodknop',
    description: 'Optionele draagbare knop voor directe hulp'
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Wat je krijgt
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Alles wat je nodig hebt om gerust te zijn
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="feature in features"
          :key="feature.title"
          :hover="true"
        >
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
            <component :is="feature.icon" class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600">
            {{ feature.description }}
          </p>
        </Card>
      </div>
    </div>
  </section>
</template>
