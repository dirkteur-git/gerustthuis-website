<script setup>
import Card from '@/components/ui/Card.vue'
import { Phone, AlertCircle, HelpCircle, Heart } from 'lucide-vue-next'

const problems = [
  {
    icon: Phone,
    text: 'Je belt elke dag. Maar de ongerustheid blijft.'
  },
  {
    icon: AlertCircle,
    text: 'Je schrikt van elk gemist telefoontje.'
  },
  {
    icon: HelpCircle,
    text: 'Je vraagt je af: zou ik vaker langs moeten gaan?'
  },
  {
    icon: Heart,
    text: 'Je wilt helpen, maar ook je eigen leven leiden.'
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Herkenbaar?
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card
          v-for="(problem, index) in problems"
          :key="index"
          class="text-center"
        >
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <component :is="problem.icon" class="w-6 h-6 text-primary" />
          </div>
          <p class="text-gray-700">{{ problem.text }}</p>
        </Card>
      </div>

      <p class="text-center text-xl text-gray-600 max-w-2xl mx-auto">
        Je bent niet de enige. En er is een oplossing.
      </p>
    </div>
  </section>
</template>
