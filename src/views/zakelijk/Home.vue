<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Section from '@/components/layout/Section.vue'
import Card from '@/components/ui/Card.vue'
import { Building2, Shield, Users, Bell, LayoutDashboard, Clock, CheckCircle2 } from 'lucide-vue-next'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Centraal Dashboard',
    description: 'Overzicht van alle kamers en bewoners in één dashboard. Real-time status en alerts.'
  },
  {
    icon: Users,
    title: 'Bewonerbeheer',
    description: 'Beheer bewonersprofielen, noodcontacten en individuele instellingen per kamer.'
  },
  {
    icon: Bell,
    title: 'Slim Alertsysteem',
    description: 'Automatische meldingen bij afwijkende patronen. Prioriteit op basis van urgentie.'
  },
  {
    icon: Shield,
    title: 'Privacy-first',
    description: 'Geen camera\'s, geen microfoons. Data blijft lokaal, alleen samenvattingen naar de cloud.'
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Continue monitoring zonder extra personeel. Het systeem leert automatisch dagpatronen.'
  },
  {
    icon: Building2,
    title: 'Multi-locatie',
    description: 'Beheer meerdere locaties vanuit één account. Rolgebaseerde toegang voor medewerkers.'
  }
]

const benefits = [
  'Minder onrust bij bewoners door onzichtbare monitoring',
  'Snellere responstijd bij afwijkingen',
  'Lagere werkdruk voor zorgpersoneel',
  'Betere informatievoorziening naar familie',
  'Volledig AVG-compliant'
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <div class="container py-16 md:py-24 lg:py-32">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building2 class="w-4 h-4" />
            Voor zorginstellingen
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Slimme monitoring voor
            <span class="text-primary">zorginstellingen</span>
          </h1>

          <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
            GerustThuis Pro biedt real-time inzicht in het welzijn van bewoners.
            Zonder camera's, met respect voor privacy.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <RouterLink to="/zakelijk/demo">
              <Button variant="primary" size="lg">
                Demo aanvragen
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
              <Shield class="w-5 h-5 text-primary" />
              <span>AVG-compliant</span>
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <Building2 class="w-5 h-5 text-primary" />
              <span>Multi-locatie</span>
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <Users class="w-5 h-5 text-primary" />
              <span>Rolbeheer</span>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent hidden lg:block" />
    </section>

    <!-- Features Grid -->
    <Section title="Wat GerustThuis Pro biedt" subtitle="Alles wat u nodig heeft voor effectieve monitoring">
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
            Waarom kiezen voor GerustThuis Pro?
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
        <h2 class="text-3xl font-bold mb-4">Klaar om te starten?</h2>
        <p class="text-primary-100 mb-8">
          Plan een vrijblijvende demo en ontdek hoe GerustThuis Pro uw zorginstelling kan helpen.
        </p>
        <RouterLink to="/zakelijk/demo">
          <Button variant="secondary" size="lg">
            Demo aanvragen
          </Button>
        </RouterLink>
      </div>
    </Section>
  </div>
</template>
