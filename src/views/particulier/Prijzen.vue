<script setup>
import { useProductsStore } from '@/stores/products'
import PricingCard from '@/components/blocks/PricingCard.vue'
import Accordion from '@/components/ui/Accordion.vue'
import CTASection from '@/components/blocks/CTASection.vue'
import { Check, X } from 'lucide-vue-next'

const productsStore = useProductsStore()

const comparisonFeatures = [
  { name: 'Bewegingssensoren', basis: '3', compleet: '5', premium: '6' },
  { name: 'Deurcontacten', basis: '2', compleet: '3', premium: '4' },
  { name: 'Slimme stekker', basis: false, compleet: '1', premium: '2' },
  { name: 'Valdetectie radar', basis: false, compleet: true, premium: true },
  { name: 'Spraakhub', basis: false, compleet: true, premium: true },
  { name: 'Noodknop', basis: false, compleet: false, premium: true },
  { name: '"Alles OK" status in app', basis: true, compleet: true, premium: true },
  { name: 'Realtime alerts', basis: true, compleet: true, premium: true },
  { name: 'Familieleden toegang', basis: '1', compleet: '3', premium: 'Onbeperkt' },
  { name: 'Installatie aan huis', basis: false, compleet: false, premium: true },
  { name: 'Persoonlijke onboarding', basis: false, compleet: false, premium: true },
  { name: 'Email support', basis: true, compleet: true, premium: true },
  { name: 'Telefonische support', basis: false, compleet: 'Prioriteit', premium: '24/7' }
]

const faqItems = [
  {
    title: 'Kan ik maandelijks opzeggen?',
    content: 'Ja, je kunt je abonnement maandelijks opzeggen. Er is geen minimum looptijd. Na opzegging blijven de sensoren van jou, maar de monitoring en alerts stoppen.'
  },
  {
    title: 'Zijn er extra kosten?',
    content: 'Nee, de genoemde prijzen zijn compleet. De eenmalige prijs is voor de hardware, de maandelijkse prijs is voor de monitoring, alerts en support. Er zijn geen verborgen kosten.'
  },
  {
    title: 'Hoe werkt de garantie?',
    content: 'Je krijgt 30 dagen niet-goed-geld-terug garantie. Daarnaast hebben alle producten 2 jaar fabrieksgarantie. Bij problemen vervangen we de sensor gratis.'
  },
  {
    title: 'Kan ik later upgraden?',
    content: 'Ja, je kunt altijd upgraden naar een hoger pakket. Je betaalt dan het verschil in hardware en de nieuwe maandprijs gaat in per de volgende maand.'
  },
  {
    title: 'Wat als ik extra sensoren nodig heb?',
    content: 'Je kunt altijd losse sensoren bijkopen. Deze werken direct met je bestaande systeem. De maandelijkse prijs blijft hetzelfde, ongeacht het aantal sensoren.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-background to-primary/5">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Eenvoudige, eerlijke prijzen
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Geen verborgen kosten, geen lange contracten. Kies het pakket dat bij jouw situatie past.
        </p>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-16 md:py-24">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            v-for="pkg in productsStore.packages"
            :key="pkg.id"
            :package="pkg"
          />
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
          Vergelijk pakketten
        </h2>

        <div class="overflow-x-auto">
          <table class="w-full max-w-4xl mx-auto">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                <th class="text-center py-4 px-4 font-semibold text-gray-900">Basis</th>
                <th class="text-center py-4 px-4 font-semibold text-primary bg-primary/5">Compleet</th>
                <th class="text-center py-4 px-4 font-semibold text-gray-900">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="feature in comparisonFeatures"
                :key="feature.name"
                class="border-b border-gray-200"
              >
                <td class="py-4 px-4 text-gray-700">{{ feature.name }}</td>
                <td class="text-center py-4 px-4">
                  <Check v-if="feature.basis === true" class="w-5 h-5 text-success mx-auto" />
                  <X v-else-if="feature.basis === false" class="w-5 h-5 text-gray-300 mx-auto" />
                  <span v-else class="text-gray-900">{{ feature.basis }}</span>
                </td>
                <td class="text-center py-4 px-4 bg-primary/5">
                  <Check v-if="feature.compleet === true" class="w-5 h-5 text-success mx-auto" />
                  <X v-else-if="feature.compleet === false" class="w-5 h-5 text-gray-300 mx-auto" />
                  <span v-else class="text-gray-900 font-medium">{{ feature.compleet }}</span>
                </td>
                <td class="text-center py-4 px-4">
                  <Check v-if="feature.premium === true" class="w-5 h-5 text-success mx-auto" />
                  <X v-else-if="feature.premium === false" class="w-5 h-5 text-gray-300 mx-auto" />
                  <span v-else class="text-gray-900">{{ feature.premium }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 md:py-24">
      <div class="container max-w-3xl">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
          Veelgestelde vragen over prijzen
        </h2>
        <Accordion :items="faqItems" />
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>
