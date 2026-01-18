<script setup>
import Card from '@/components/ui/Card.vue'
import CTASection from '@/components/blocks/CTASection.vue'
import { Heart, Shield, Eye, Users } from 'lucide-vue-next'

const values = [
  {
    icon: Shield,
    title: 'Privacy eerst',
    description: 'Geen camera\'s, geen opnames. We verzamelen alleen de data die nodig is om jou te helpen.'
  },
  {
    icon: Heart,
    title: 'Menselijke technologie',
    description: 'Technologie die families dichterbij brengt, niet verder uit elkaar drijft.'
  },
  {
    icon: Eye,
    title: 'Eerlijk en transparant',
    description: 'Geen verborgen kosten, geen kleine lettertjes. Wat je ziet is wat je krijgt.'
  },
  {
    icon: Users,
    title: 'Altijd bereikbaar',
    description: 'Nederlandse support die begrijpt waar je doorheen gaat.'
  }
]

const stats = [
  { value: '500+', label: 'Families geholpen' },
  { value: '2.500+', label: 'Sensoren geïnstalleerd' },
  { value: '98%', label: 'Klanttevredenheid' },
  { value: '3+', label: 'Jaar ervaring' }
]

const team = [
  {
    name: 'Jan de Vries',
    role: 'Oprichter & CEO',
    bio: 'Zelf mantelzorger geweest voor zijn moeder. Startte GerustThuis vanuit persoonlijke ervaring.'
  },
  {
    name: 'Lisa Bakker',
    role: 'Hoofd Productontwikkeling',
    bio: 'Specialist in IoT en AI. Zorgt ervoor dat de technologie écht werkt voor onze gebruikers.'
  },
  {
    name: 'Mohammed El-Amrani',
    role: 'Hoofd Klantsucces',
    bio: 'Jarenlange ervaring in de zorg. Zorgt dat elke familie de ondersteuning krijgt die nodig is.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-background to-primary/5">
      <div class="container">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gebouwd door mantelzorgers, voor mantelzorgers
          </h1>
          <p class="text-xl text-gray-600">
            Wij begrijpen de dagelijkse zorgen van mantelzorgers. Niet omdat we het gelezen hebben, maar omdat we het zelf hebben meegemaakt.
          </p>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="py-16 md:py-24">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Ons verhaal</h2>
            <div class="prose prose-lg text-gray-600">
              <p>
                GerustThuis is ontstaan uit persoonlijke ervaring. Onze oprichter Jan was jarenlang mantelzorger voor zijn moeder die alleen woonde. De dagelijkse telefoontjes, de constante ongerustheid, het schuldgevoel wanneer hij niet kon bellen - hij kende het allemaal.
              </p>
              <p>
                "Ik wilde gewoon weten of het goed ging, zonder haar elke dag te hoeven bellen en haar het gevoel te geven dat ik haar controleerde," vertelt Jan. "Camera's waren geen optie - dat voelde als een inbreuk op haar privacy. Maar er moest toch iets zijn?"
              </p>
              <p>
                Samen met een team van technologen en zorgprofessionals ontwikkelden we GerustThuis: een systeem dat je laat weten dat het goed gaat, zonder de waardigheid van je ouder aan te tasten.
              </p>
            </div>
          </div>
          <Card class="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <div class="text-center p-8">
              <Heart class="w-24 h-24 text-primary mx-auto mb-4" />
              <p class="text-gray-600">Foto van het team</p>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Onze waarden</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card v-for="value in values" :key="value.title">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <component :is="value.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 md:py-24">
      <div class="container">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-4xl md:text-5xl font-bold text-primary mb-2">{{ stat.value }}</div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Ons team</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card v-for="member in team" :key="member.name" class="text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users class="w-12 h-12 text-gray-400" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">{{ member.name }}</h3>
            <p class="text-primary font-medium mb-3">{{ member.role }}</p>
            <p class="text-gray-600 text-sm">{{ member.bio }}</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>
