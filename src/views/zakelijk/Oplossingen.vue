<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Section from '@/components/layout/Section.vue'
import Card from '@/components/ui/Card.vue'
import {
  Building2,
  Moon,
  AlertTriangle,
  Activity,
  DoorOpen,
  Thermometer,
  Radar,
  ArrowRight
} from 'lucide-vue-next'

const problems = [
  {
    title: 'Valincidenten',
    description: 'Bewoners die vallen worden niet altijd direct opgemerkt. Elke minuut telt.',
    icon: AlertTriangle
  },
  {
    title: 'Nachtelijke onrust',
    description: 'Bewoners die \'s nachts onrustig zijn of dwalen, worden niet altijd tijdig opgemerkt.',
    icon: Moon
  },
  {
    title: 'Werkdruk personeel',
    description: 'Regelmatige controleronden kosten veel tijd en verstoren de nachtrust van bewoners.',
    icon: Activity
  }
]

const solutions = [
  {
    title: 'Valsensoren (Radar)',
    description: 'Detecteren een val zonder camera via radar technologie. Direct melding bij het personeel.',
    icon: Radar,
    features: ['Valdetectie zonder camera', 'Direct alarm bij val', 'Geen wearable nodig']
  },
  {
    title: 'Bewegingssensoren',
    description: 'Detecteren activiteit en inactiviteit per kamer. Leren automatisch het normale patroon.',
    icon: Activity,
    features: ['Aanwezigheidsdetectie', 'Patroonherkenning', 'Per kamer inzicht']
  },
  {
    title: 'Deursensoren',
    description: 'Monitoren kamerdeur openingen voor dwaaldetectie en dagritme analyse.',
    icon: DoorOpen,
    features: ['Kamerdeur monitoring', 'Koelkast/medicijnkast', 'Dwaalpreventie']
  },
  {
    title: 'Omgevingssensoren',
    description: 'Meten temperatuur en luchtvochtigheid per kamer voor een veilige leefomgeving.',
    icon: Thermometer,
    features: ['Temperatuurbewaking', 'Luchtvochtigheid', 'Kamer klimaat']
  }
]

const alerts = [
  { name: 'Val gedetecteerd', description: 'Radar detecteert een val - direct alarm', severity: 'critical' },
  { name: 'Geen beweging', description: 'Geen activiteit in kamer gedurende periode', severity: 'critical' },
  { name: 'Nachtelijke onrust', description: 'Meerdere bewegingen tijdens nachtelijke uren', severity: 'warning' },
  { name: 'Dwaalgedrag', description: 'Bewoner verlaat kamer op ongebruikelijk tijdstip', severity: 'warning' },
  { name: 'Laat opstaan', description: 'Eerste activiteit later dan gebruikelijk', severity: 'info' }
]

const severityColors = {
  critical: 'bg-red-100 text-red-800',
  warning: 'bg-amber-100 text-amber-800',
  info: 'bg-blue-100 text-blue-800'
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
      <div class="container">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kamer monitoring <span class="text-primary">oplossingen</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Sensor.Care biedt per kamer inzicht met valdetectie, bewegingsmonitoring en slimme alerts.
            Privacy-vriendelijk en zonder camera's.
          </p>
        </div>
      </div>
    </section>

    <!-- Problems We Solve -->
    <Section title="De uitdagingen die wij oplossen">
      <div class="grid md:grid-cols-3 gap-6">
        <Card v-for="problem in problems" :key="problem.title" class="p-6 border-l-4 border-l-amber-500">
          <component :is="problem.icon" class="w-8 h-8 text-amber-500 mb-4" />
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ problem.title }}</h3>
          <p class="text-gray-600">{{ problem.description }}</p>
        </Card>
      </div>
    </Section>

    <!-- Our Solutions -->
    <Section title="Sensoren per kamer" class="bg-gray-50">
      <div class="grid md:grid-cols-2 gap-8">
        <Card v-for="solution in solutions" :key="solution.title" class="p-6">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <component :is="solution.icon" class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ solution.title }}</h3>
          <p class="text-gray-600 mb-4">{{ solution.description }}</p>
          <ul class="space-y-2">
            <li v-for="feature in solution.features" :key="feature" class="flex items-center gap-2 text-sm text-gray-700">
              <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
              {{ feature }}
            </li>
          </ul>
        </Card>
      </div>
    </Section>

    <!-- Alert Types -->
    <Section title="Intelligente alerts" subtitle="Het systeem genereert automatisch meldingen bij afwijkingen">
      <div class="max-w-3xl mx-auto">
        <div class="space-y-4">
          <div
            v-for="alert in alerts"
            :key="alert.name"
            class="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200"
          >
            <div>
              <h4 class="font-medium text-gray-900">{{ alert.name }}</h4>
              <p class="text-sm text-gray-600">{{ alert.description }}</p>
            </div>
            <span :class="['px-3 py-1 rounded-full text-xs font-medium', severityColors[alert.severity]]">
              {{ alert.severity === 'critical' ? 'Kritiek' : alert.severity === 'warning' ? 'Waarschuwing' : 'Info' }}
            </span>
          </div>
        </div>
      </div>
    </Section>

    <!-- How It Works -->
    <Section title="Hoe werkt het?" class="bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 class="font-semibold text-gray-900 mb-2">Sensoren per kamer</h3>
            <p class="text-gray-600 text-sm">Valsensoren, bewegingssensoren en deursensoren worden per kamer geplaatst.</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 class="font-semibold text-gray-900 mb-2">Patronen leren</h3>
            <p class="text-gray-600 text-sm">Het systeem leert automatisch de normale patronen per bewoner.</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 class="font-semibold text-gray-900 mb-2">Alerts ontvangen</h3>
            <p class="text-gray-600 text-sm">Bij valincidenten of afwijkingen ontvangt het personeel direct een melding.</p>
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA -->
    <Section class="bg-primary text-white">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Interesse in een pilot?</h2>
        <p class="text-primary-100 mb-8">
          Meld u aan voor de wachtlijst en wij nemen contact op om de mogelijkheden te bespreken.
        </p>
        <RouterLink to="/zakelijk/wachtlijst">
          <Button variant="secondary" size="lg">
            Aanmelden voor pilot
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </RouterLink>
      </div>
    </Section>
  </div>
</template>
