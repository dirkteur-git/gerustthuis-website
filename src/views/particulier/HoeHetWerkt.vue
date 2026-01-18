<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Accordion from '@/components/ui/Accordion.vue'
import CTASection from '@/components/blocks/CTASection.vue'
import {
  Settings,
  Brain,
  Bell,
  Radio,
  Lock,
  Eye,
  Clock,
  Smartphone
} from 'lucide-vue-next'

const steps = [
  {
    number: 1,
    icon: Settings,
    title: 'De sensoren',
    subtitle: 'Discrete technologie die past bij elk interieur',
    description: `Onze sensoren zijn klein, elegant en vallen nauwelijks op. Ze worden strategisch geplaatst op plekken waar je ouder veel komt: woonkamer, slaapkamer, keuken, badkamer en bij de voordeur.`,
    details: [
      {
        icon: Radio,
        title: 'Bewegingssensoren',
        text: 'Detecteren beweging in een ruimte zonder te zien wát er gebeurt'
      },
      {
        icon: Lock,
        title: 'Deurcontacten',
        text: 'Weten wanneer deuren worden geopend of gesloten'
      },
      {
        icon: Eye,
        title: 'Valdetectie radar',
        text: 'Radar-technologie die een val detecteert, zonder camera'
      }
    ],
    faq: [
      {
        title: 'Hoe lang duurt de installatie?',
        content: 'De installatie duurt gemiddeld 45-60 minuten. Bij zelf-installatie ontvang je een duidelijke handleiding en kun je altijd bellen voor hulp.'
      },
      {
        title: 'Zijn er kabels nodig?',
        content: 'Nee, alle sensoren werken draadloos op batterijen. Alleen de centrale hub moet aangesloten worden op stroom en wifi.'
      }
    ]
  },
  {
    number: 2,
    icon: Brain,
    title: 'Het leren',
    subtitle: 'Lokale AI die patronen herkent',
    description: `In de eerste 1-2 weken leert het systeem lokaal (in de woning) het normale dagritme. Alle data blijft op de hub in huis - er wordt niets naar de cloud gestuurd. Dit wordt het persoonlijke "normale patroon".`,
    details: [
      {
        icon: Clock,
        title: 'Week 1',
        text: 'De lokale hub verzamelt data en begint patronen te herkennen'
      },
      {
        icon: Brain,
        title: 'Week 2',
        text: 'Het systeem verfijnt het model en leert uitzonderingen kennen'
      },
      {
        icon: Bell,
        title: 'Week 3+',
        text: 'Het systeem stuurt alleen een melding bij afwijkingen - geen data'
      }
    ],
    faq: [
      {
        title: 'Waar wordt de data opgeslagen?',
        content: 'Alle sensordata blijft lokaal op de hub in de woning. Er wordt geen data naar de cloud gestuurd. Mantelzorgers krijgen alleen een melding als er iets afwijkt, zonder details over wat de sensoren meten.'
      },
      {
        title: 'Wat als mijn ouder een onregelmatig ritme heeft?',
        content: 'Het systeem past zich aan elk patroon aan, ook onregelmatige. Het leert de normale variatie en waarschuwt alleen bij echte afwijkingen.'
      }
    ]
  },
  {
    number: 3,
    icon: Bell,
    title: 'De alerts',
    subtitle: 'Alleen bericht als het nodig is',
    description: `Je krijgt alleen een melding als er iets afwijkt van het normale patroon. Geen dagelijkse overzichten, geen sensordata - gewoon rust totdat actie nodig is.`,
    details: [
      {
        icon: Smartphone,
        title: 'Geen nieuws = goed nieuws',
        text: 'Open de app om te zien dat alles in orde is - zonder details'
      },
      {
        icon: Bell,
        title: 'Alleen bij afwijkingen',
        text: 'Je krijgt alleen bericht als er echt iets aan de hand kan zijn'
      },
      {
        icon: Clock,
        title: 'Aanpasbare tijden',
        text: 'Stel in wanneer je wel of niet gestoord wilt worden'
      }
    ],
    faq: [
      {
        title: 'Wat voor meldingen kan ik krijgen?',
        content: 'Je kunt meldingen ontvangen voor: later opstaan dan normaal, geen beweging gedurende langere tijd, mogelijke val gedetecteerd. Je ziet nooit de ruwe sensordata.'
      },
      {
        title: 'Kan ik zien wat mijn ouder doet?',
        content: 'Nee, dat kan bewust niet. Je kunt alleen zien dat het systeem actief is en dat er geen afwijkingen zijn. De privacy van je ouder staat voorop.'
      }
    ]
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
            Zo werkt GerustThuis
          </h1>
          <p class="text-xl text-gray-600">
            Van installatie tot dagelijkse gemoedsrust in 3 eenvoudige stappen.
            Geen technische kennis nodig.
          </p>
        </div>
      </div>
    </section>

    <!-- Steps -->
    <section v-for="step in steps" :key="step.number" class="py-16 md:py-24" :class="step.number % 2 === 0 ? 'bg-gray-50' : ''">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Content -->
          <div :class="step.number % 2 === 0 ? 'lg:order-2' : ''">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <component :is="step.icon" class="w-8 h-8 text-white" />
              </div>
              <div>
                <span class="text-primary font-semibold">Stap {{ step.number }}</span>
                <h2 class="text-3xl font-bold text-gray-900">{{ step.title }}</h2>
              </div>
            </div>

            <p class="text-lg text-gray-600 mb-8">
              {{ step.description }}
            </p>

            <!-- Details -->
            <div class="space-y-4 mb-8">
              <div
                v-for="detail in step.details"
                :key="detail.title"
                class="flex gap-4"
              >
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <component :is="detail.icon" class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ detail.title }}</h4>
                  <p class="text-gray-600">{{ detail.text }}</p>
                </div>
              </div>
            </div>

            <!-- FAQ for this step -->
            <div class="mt-8">
              <h3 class="font-semibold text-gray-900 mb-4">Veelgestelde vragen</h3>
              <Accordion :items="step.faq" />
            </div>
          </div>

          <!-- Visual -->
          <div :class="step.number % 2 === 0 ? 'lg:order-1' : ''">
            <Card class="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <div class="text-center p-8">
                <component :is="step.icon" class="w-24 h-24 text-primary mx-auto mb-4" />
                <p class="text-gray-600">Illustratie stap {{ step.number }}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="py-16 md:py-24 bg-gray-900">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Bekijk hoe het werkt
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          In 2 minuten zie je precies hoe GerustThuis werkt en wat het voor jouw situatie kan betekenen.
        </p>
        <div class="max-w-4xl mx-auto">
          <Card class="aspect-video flex items-center justify-center bg-gray-800">
            <div class="text-center">
              <div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p class="text-gray-400">Video placeholder</p>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-24">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Overtuigd?
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Start vandaag nog en ervaar binnen een week wat GerustThuis voor jou kan betekenen.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/producten">
            <Button variant="primary" size="lg">
              Bekijk de pakketten
            </Button>
          </RouterLink>
          <RouterLink to="/contact">
            <Button variant="outline" size="lg">
              Stel je vraag
            </Button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
