<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import {
  Activity,
  AlertTriangle,
  Moon,
  Plug,
  Shield,
  CheckCircle,
  ArrowRight,
  Wifi,
  Battery,
  Bell
} from 'lucide-vue-next'

const solutions = [
  {
    icon: Activity,
    title: 'Kamermonitoring',
    description: 'Real-time overzicht van activiteit per kamer. Detecteert afwijkingen in het dagritme.',
    features: [
      'Bewegingssensoren per kamer',
      'Dagritme wordt aangeleerd',
      'Afwijkingen direct zichtbaar',
      'Urgentie-levels in dashboard'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Valdetectie',
    description: 'Plotselinge inactiviteit na beweging wordt herkend. Direct alarm bij vermoeden van val.',
    features: [
      'Patroonherkenning detecteert vallen',
      'Geen wearables nodig',
      'Direct alarm naar medewerker',
      'Werkt ook \'s nachts'
    ]
  },
  {
    icon: Moon,
    title: 'Nachtwaaksysteem',
    description: 'Monitoring tijdens nachtdienst. Minder fysieke rondes, meer rust voor bewoners.',
    features: [
      'Automatische nachtmonitoring',
      'Alleen melding bij afwijking',
      'Minder verstoring bewoners',
      'Efficiëntere nachtdienst'
    ]
  },
  {
    icon: Plug,
    title: 'Integratie',
    description: 'Koppeling met bestaande zorgsystemen en alarmeringscentrales.',
    features: [
      'API voor koppelingen',
      'Integratie met zorgsystemen',
      'Export naar rapportages',
      'Maatwerk mogelijk'
    ]
  }
]

const techSpecs = [
  { icon: Wifi, label: 'Hub', value: 'Wifi + stroom, analyseert lokaal' },
  { icon: Battery, label: 'Sensoren', value: 'Draadloos, batterij 2 jaar' },
  { icon: Shield, label: 'Privacy', value: 'Geen camera\'s, data blijft lokaal' },
  { icon: Bell, label: 'Meldingen', value: 'Dashboard, app, of koppeling' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
            Oplossingen
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Slimme monitoring voor de zorg
          </h1>
          <p class="text-xl text-gray-600">
            Van kamermonitoring tot valdetectie. Modulair opgebouwd, schaalbaar voor elke organisatie.
          </p>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div
            v-for="solution in solutions"
            :key="solution.title"
            class="bg-slate-50 rounded-3xl p-8 hover:shadow-lg transition-shadow"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <component :is="solution.icon" class="w-8 h-8 text-primary" />
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ solution.title }}</h2>
            <p class="text-gray-600 mb-6">{{ solution.description }}</p>

            <ul class="space-y-3">
              <li
                v-for="feature in solution.features"
                :key="feature"
                class="flex items-start gap-3"
              >
                <CheckCircle class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Specs -->
    <section class="py-20 md:py-28 bg-slate-50">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Technische specificaties
          </h2>
          <p class="text-xl text-gray-600">
            Eenvoudig te installeren, makkelijk te onderhouden.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div
            v-for="spec in techSpecs"
            :key="spec.label"
            class="bg-white rounded-2xl p-6 text-center"
          >
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <component :is="spec.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-bold text-gray-900 mb-1">{{ spec.label }}</h3>
            <p class="text-gray-600 text-sm">{{ spec.value }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 md:py-28 bg-primary text-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Welke oplossing past bij uw organisatie?
          </h2>
          <p class="text-xl text-white/80 mb-8">
            Plan een demo en ontdek hoe GerustThuis kan helpen.
          </p>
          <RouterLink to="/zakelijk/demo">
            <Button variant="secondary" size="lg">
              Plan een demo
              <ArrowRight class="w-5 h-5 ml-2" />
            </Button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
