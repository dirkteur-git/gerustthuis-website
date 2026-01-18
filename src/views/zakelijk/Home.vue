<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Section from '@/components/layout/Section.vue'
import Card from '@/components/ui/Card.vue'
import { Building2, Shield, Users, Bell, LayoutDashboard, Clock, CheckCircle2, AlertTriangle, DoorOpen } from 'lucide-vue-next'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Kamer Dashboard',
    description: 'Real-time overzicht van alle kamers. Zie direct welke bewoners actief zijn of aandacht nodig hebben.'
  },
  {
    icon: AlertTriangle,
    title: 'Valdetectie',
    description: 'Radar-sensoren detecteren een val zonder camera. Direct melding bij het personeel.'
  },
  {
    icon: Bell,
    title: 'Slim Alertsysteem',
    description: 'Automatische meldingen bij afwijkende patronen of noodgevallen. Prioriteit op basis van urgentie.'
  },
  {
    icon: DoorOpen,
    title: 'Kamer Monitoring',
    description: 'Per kamer inzicht in activiteit, temperatuur en bewegingspatronen. Zonder camera\'s.'
  },
  {
    icon: Shield,
    title: 'Privacy-first',
    description: 'Geen camera\'s, geen microfoons. Data blijft lokaal, alleen samenvattingen naar de cloud.'
  },
  {
    icon: Building2,
    title: 'Multi-locatie',
    description: 'Beheer meerdere locaties vanuit één account. Rolgebaseerde toegang voor medewerkers.'
  }
]

const benefits = [
  'Valdetectie zonder camera - direct melding bij personeel',
  'Minder onrust bij bewoners door onzichtbare monitoring',
  'Per kamer inzicht in activiteit en welzijn',
  'Snellere responstijd bij afwijkingen of noodgevallen',
  'Lagere werkdruk voor zorgpersoneel',
  'Volledig AVG-compliant'
]

const alerts = [
  { name: 'Val gedetecteerd', severity: 'critical' },
  { name: 'Geen beweging', severity: 'critical' },
  { name: 'Nachtelijke onrust', severity: 'warning' },
  { name: 'Laat opstaan', severity: 'info' }
]

const severityColors = {
  critical: 'bg-red-500',
  warning: 'bg-amber-500',
  info: 'bg-blue-500'
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <div class="container py-16 md:py-24 lg:py-32">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building2 class="w-4 h-4" />
            Kamer monitoring voor zorginstellingen
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Slimme <span class="text-primary">kamer monitoring</span> met valdetectie
          </h1>

          <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
            Sensor.Care biedt real-time inzicht per kamer. Valdetectie, bewegingspatronen en alerts.
            Zonder camera's, met respect voor privacy.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <RouterLink to="/zakelijk/wachtlijst">
              <Button variant="primary" size="lg">
                Aanmelden voor pilot
              </Button>
            </RouterLink>
            <RouterLink to="/zakelijk/oplossingen">
              <Button variant="outline" size="lg">
                Bekijk oplossingen
              </Button>
            </RouterLink>
          </div>

          <div class="flex flex-wrap gap-6">
            <div class="flex items-center gap-2 text-gray-600">
              <AlertTriangle class="w-5 h-5 text-primary" />
              <span>Valdetectie</span>
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <DoorOpen class="w-5 h-5 text-primary" />
              <span>Per kamer inzicht</span>
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <Shield class="w-5 h-5 text-primary" />
              <span>AVG-compliant</span>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent hidden lg:block" />
    </section>

    <!-- Alert Types Preview -->
    <Section class="bg-gray-50">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Intelligente alerts per kamer</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Direct melding bij valincidenten, inactiviteit of afwijkende patronen</p>
      </div>
      <div class="flex flex-wrap justify-center gap-4">
        <div
          v-for="alert in alerts"
          :key="alert.name"
          class="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm"
        >
          <span :class="['w-3 h-3 rounded-full', severityColors[alert.severity]]"></span>
          <span class="font-medium text-gray-900">{{ alert.name }}</span>
        </div>
      </div>
    </Section>

    <!-- Features Grid -->
    <Section title="Wat Sensor.Care biedt" subtitle="Kamer monitoring met de nieuwste sensortechnologie">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card v-for="feature in features" :key="feature.title" class="p-6">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <component :is="feature.icon" class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </Card>
      </div>
    </Section>

    <!-- Benefits -->
    <Section class="bg-gray-50">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Waarom kiezen voor Sensor.Care?
          </h2>
          <ul class="space-y-4">
            <li v-for="benefit in benefits" :key="benefit" class="flex items-start gap-3">
              <CheckCircle2 class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">{{ benefit }}</span>
            </li>
          </ul>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg">
          <div class="text-center">
            <p class="text-gray-500 mb-2">Gemiddelde besparing</p>
            <p class="text-5xl font-bold text-primary mb-2">30%</p>
            <p class="text-gray-600">minder nachtelijke rondes</p>
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA -->
    <Section class="bg-primary text-white">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Start een pilot in 2026</h2>
        <p class="text-primary-100 mb-8">
          Meld u aan voor de wachtlijst en wij nemen contact op om de mogelijkheden te bespreken.
        </p>
        <RouterLink to="/zakelijk/wachtlijst">
          <Button variant="secondary" size="lg">
            Aanmelden voor pilot
          </Button>
        </RouterLink>
      </div>
    </Section>
  </div>
</template>
