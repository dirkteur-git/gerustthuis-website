<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import { CheckCircle, Package, Calendar, Mail, ArrowRight } from 'lucide-vue-next'

const orderNumber = 'GT-' + Math.random().toString(36).substr(2, 9).toUpperCase()

const timeline = [
  {
    icon: CheckCircle,
    title: 'Bestelling ontvangen',
    description: 'We hebben je bestelling ontvangen en gaan direct aan de slag.',
    done: true
  },
  {
    icon: Package,
    title: 'Verzending',
    description: 'Je pakket wordt binnen 1-2 werkdagen verzonden.',
    done: false
  },
  {
    icon: Calendar,
    title: 'Installatie',
    description: 'Volg de handleiding of wacht op onze installateur.',
    done: false
  },
  {
    icon: Mail,
    title: 'Systeem actief',
    description: 'Na 1-2 weken is het systeem volledig operationeel en krijg je meldingen bij afwijkingen.',
    done: false
  }
]
</script>

<template>
  <div class="py-12 md:py-24">
    <div class="container max-w-2xl text-center">
      <!-- Success icon -->
      <div class="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle class="w-10 h-10 text-success" />
      </div>

      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Bedankt voor je bestelling!
      </h1>
      <p class="text-xl text-gray-600 mb-2">
        Je ordernummer is: <strong class="text-gray-900">{{ orderNumber }}</strong>
      </p>
      <p class="text-gray-600 mb-8">
        We hebben een bevestigingsmail gestuurd naar je e-mailadres.
      </p>

      <!-- Timeline -->
      <Card class="text-left mb-8">
        <h2 class="text-lg font-bold text-gray-900 mb-6">Wat nu?</h2>
        <div class="space-y-6">
          <div
            v-for="(step, index) in timeline"
            :key="index"
            class="flex gap-4"
          >
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              :class="step.done ? 'bg-success text-white' : 'bg-gray-100 text-gray-400'"
            >
              <component :is="step.icon" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </Card>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/dashboard">
          <Button variant="primary">
            Naar dashboard
            <ArrowRight class="w-4 h-4 ml-2" />
          </Button>
        </RouterLink>
        <RouterLink to="/">
          <Button variant="outline">
            Terug naar home
          </Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
