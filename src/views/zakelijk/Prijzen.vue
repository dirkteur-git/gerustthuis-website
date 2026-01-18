<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Section from '@/components/layout/Section.vue'
import Card from '@/components/ui/Card.vue'
import { Check, Building2, Users, Phone, Mail } from 'lucide-vue-next'

const features = [
  'Centraal dashboard voor alle locaties',
  'Kamer- en bewonerbeheer',
  'Real-time alertsysteem',
  'Rolgebaseerde toegang',
  'Rapportages en analyses',
  'API-integratie mogelijk',
  'Dedicated accountmanager',
  'Training voor personeel',
  '24/7 technische support',
  'Hardware inclusief onderhoud'
]

const factors = [
  {
    title: 'Aantal kamers',
    description: 'De prijs wordt bepaald op basis van het aantal te monitoren kamers.'
  },
  {
    title: 'Type sensoren',
    description: 'Verschillende sensorconfiguraties voor verschillende behoeften.'
  },
  {
    title: 'Aantal locaties',
    description: 'Kortingen mogelijk bij meerdere locaties onder één contract.'
  },
  {
    title: 'Integraties',
    description: 'Optionele integraties met bestaande zorgsystemen.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
      <div class="container">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prijzen op <span class="text-primary">maat</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Elke zorginstelling is anders. Daarom werken we met maatwerkoffertes
            die precies aansluiten bij uw situatie en behoeften.
          </p>
        </div>
      </div>
    </section>

    <!-- Features Included -->
    <Section title="Wat is inbegrepen?" subtitle="Alle enterprise-functionaliteiten in één oplossing">
      <div class="max-w-4xl mx-auto">
        <Card class="p-8">
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="feature in features" :key="feature" class="flex items-center gap-3">
              <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Check class="w-4 h-4 text-primary" />
              </div>
              <span class="text-gray-700">{{ feature }}</span>
            </div>
          </div>
        </Card>
      </div>
    </Section>

    <!-- Pricing Factors -->
    <Section title="Prijsbepalende factoren" class="bg-gray-50">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card v-for="factor in factors" :key="factor.title" class="p-6">
          <h3 class="font-semibold text-gray-900 mb-2">{{ factor.title }}</h3>
          <p class="text-sm text-gray-600">{{ factor.description }}</p>
        </Card>
      </div>
    </Section>

    <!-- Contact CTA -->
    <Section>
      <div class="max-w-4xl mx-auto">
        <Card class="p-8 md:p-12 bg-gradient-to-br from-primary to-primary-600 text-white">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-4">Vraag een offerte aan</h2>
              <p class="text-primary-100 mb-6">
                Neem contact op voor een vrijblijvend gesprek over de mogelijkheden
                voor uw zorginstelling. We maken graag een offerte op maat.
              </p>
              <RouterLink to="/zakelijk/demo">
                <Button variant="secondary" size="lg">
                  Demo aanvragen
                </Button>
              </RouterLink>
            </div>
            <div class="space-y-4">
              <div class="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                <Phone class="w-6 h-6" />
                <div>
                  <p class="text-sm text-primary-200">Bel ons</p>
                  <p class="font-semibold">+31 (0)85 123 4567</p>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                <Mail class="w-6 h-6" />
                <div>
                  <p class="text-sm text-primary-200">E-mail</p>
                  <p class="font-semibold">zakelijk@gerustthuis.nl</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>

    <!-- FAQ -->
    <Section title="Veelgestelde vragen" class="bg-gray-50">
      <div class="max-w-3xl mx-auto space-y-4">
        <Card class="p-6">
          <h3 class="font-semibold text-gray-900 mb-2">Wat kost een pilotproject?</h3>
          <p class="text-gray-600">We bieden pilotprojecten aan tegen gereduceerd tarief. Dit stelt u in staat om de oplossing te testen voordat u een langetermijnbeslissing neemt.</p>
        </Card>
        <Card class="p-6">
          <h3 class="font-semibold text-gray-900 mb-2">Zijn er installatiekosten?</h3>
          <p class="text-gray-600">Installatie en configuratie zijn inbegrepen in de maandelijkse prijs. Er zijn geen verborgen opstartkosten.</p>
        </Card>
        <Card class="p-6">
          <h3 class="font-semibold text-gray-900 mb-2">Wat is de minimale contractduur?</h3>
          <p class="text-gray-600">We werken standaard met contracten van 12 maanden, maar kortere periodes zijn bespreekbaar voor pilotprojecten.</p>
        </Card>
        <Card class="p-6">
          <h3 class="font-semibold text-gray-900 mb-2">Kunnen we later uitbreiden?</h3>
          <p class="text-gray-600">Ja, u kunt op elk moment kamers en locaties toevoegen aan uw bestaande contract.</p>
        </Card>
      </div>
    </Section>
  </div>
</template>
