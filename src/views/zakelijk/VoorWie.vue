<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import {
  Building2,
  Home,
  Users,
  Heart,
  CheckCircle,
  ArrowRight,
  Quote
} from 'lucide-vue-next'

const audiences = [
  {
    icon: Building2,
    title: 'Verpleeghuizen',
    description: 'Grote locaties met veel bewoners. Overzicht houden is een uitdaging.',
    challenges: [
      'Veel kamers, weinig personeel',
      'Nachtdienst met beperkte bezetting',
      'Vaste rondes kosten tijd'
    ],
    solution: 'Dashboard met real-time overzicht van alle kamers. Prioriteer op basis van urgentie, niet op basis van looproute.',
    quote: '"We lopen nu alleen nog naar kamers waar echt iets aan de hand is."'
  },
  {
    icon: Home,
    title: 'Thuiszorgorganisaties',
    description: 'Cliënten thuis monitoren zonder constant langs te hoeven gaan.',
    challenges: [
      'Reistijd tussen cliënten',
      'Onzekerheid tussen bezoeken',
      'Mantelzorgers met zorgen'
    ],
    solution: 'Remote monitoring van cliënten thuis. Alleen een melding wanneer er iets afwijkt. Minder huisbezoeken, meer zekerheid.',
    quote: '"Ik weet nu ook tussen bezoeken door dat het goed gaat."'
  },
  {
    icon: Users,
    title: 'Aanleunwoningen',
    description: 'Zelfstandig wonen met een vangnet. Bewoners willen vrijheid, familie wil zekerheid.',
    challenges: [
      'Bewoners willen onafhankelijk zijn',
      'Familie maakt zich zorgen',
      'Personeel niet altijd aanwezig'
    ],
    solution: 'Onzichtbare monitoring die de autonomie respecteert. Alleen alarm bij afwijkingen, geen constante surveillance.',
    quote: '"Mijn moeder woont zelfstandig en ik heb rust in mijn hoofd."'
  },
  {
    icon: Heart,
    title: 'Seniorencomplexen',
    description: 'Collectieve zorg, individuele aandacht. Schaalbaar voor grote complexen.',
    challenges: [
      'Veel wooneenheden',
      'Wisselende zorgbehoefte',
      'Centrale aansturing nodig'
    ],
    solution: 'Centraal dashboard voor alle woningen. Schaalbaar van 10 tot 100+ units. Integratie met bestaande systemen.',
    quote: '"Eindelijk overzicht over het hele complex."'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
            Voor wie?
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Voor elke zorgsetting
          </h1>
          <p class="text-xl text-gray-600">
            Van verpleeghuis tot thuiszorg. GerustThuis past zich aan aan uw situatie.
          </p>
        </div>
      </div>
    </section>

    <!-- Audiences -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container">
        <div class="space-y-16 max-w-5xl mx-auto">
          <div
            v-for="(audience, index) in audiences"
            :key="audience.title"
            class="grid lg:grid-cols-2 gap-12 items-center"
            :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
          >
            <div :class="{ 'lg:order-2': index % 2 === 1 }">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <component :is="audience.icon" class="w-7 h-7 text-primary" />
                </div>
                <h2 class="text-3xl font-bold text-gray-900">{{ audience.title }}</h2>
              </div>

              <p class="text-lg text-gray-600 mb-6">{{ audience.description }}</p>

              <div class="bg-amber-50 rounded-2xl p-6 mb-6">
                <h3 class="font-semibold text-amber-800 mb-3">Uitdagingen</h3>
                <ul class="space-y-2">
                  <li
                    v-for="challenge in audience.challenges"
                    :key="challenge"
                    class="flex items-start gap-2 text-amber-700"
                  >
                    <span class="mt-1.5">•</span>
                    <span>{{ challenge }}</span>
                  </li>
                </ul>
              </div>

              <div class="bg-emerald-50 rounded-2xl p-6">
                <h3 class="font-semibold text-emerald-800 mb-3">Onze oplossing</h3>
                <p class="text-emerald-700">{{ audience.solution }}</p>
              </div>
            </div>

            <div :class="{ 'lg:order-1': index % 2 === 1 }">
              <div class="bg-slate-50 rounded-3xl p-8">
                <Quote class="w-10 h-10 text-primary/30 mb-4" />
                <p class="text-xl text-gray-700 italic mb-4">{{ audience.quote }}</p>
                <p class="text-gray-500 text-sm">— Zorgmedewerker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 md:py-28 bg-primary text-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Herkent u uw organisatie?
          </h2>
          <p class="text-xl text-white/80 mb-8">
            Laten we bespreken hoe GerustThuis kan helpen in uw specifieke situatie.
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
