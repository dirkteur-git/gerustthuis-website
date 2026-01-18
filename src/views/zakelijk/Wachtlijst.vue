<script setup>
import { ref } from 'vue'
import {
  Lock,
  Brain,
  Building2,
  BarChart3,
  Bell,
  Shield,
  Users,
  ChevronDown,
  ChevronUp,
  Clock,
  Quote
} from 'lucide-vue-next'
import WaitlistForm from '@/components/forms/WaitlistForm.vue'

// FAQ Accordion state
const openFaq = ref(null)

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const faqs = [
  {
    question: 'Hoe werkt de integratie met ons zorgsysteem?',
    answer: 'GerustThuis Pro biedt API-koppelingen met gangbare zorgsystemen. Meldingen kunnen direct in jullie ECD of planningstool terechtkomen. We bespreken dit graag in een demo.'
  },
  {
    question: 'Wat kost GerustThuis Pro?',
    answer: 'De prijs hangt af van het aantal kamers en gewenste functionaliteiten. Neem contact op voor een gesprek en offerte op maat.'
  },
  {
    question: 'Hoe zit het met privacy en AVG?',
    answer: 'Alle data wordt lokaal verwerkt. Er zijn geen camera\'s. Bewoners en familie bepalen zelf wie toegang heeft. We zijn volledig AVG-compliant en helpen met verwerkersovereenkomsten.'
  },
  {
    question: 'Kunnen we een pilot doen?',
    answer: 'Ja, we starten graag met een pilot van 3-6 maanden in een beperkt aantal kamers. Zo kun je ervaren wat GerustThuis Pro oplevert.'
  },
  {
    question: 'Wanneer is het beschikbaar?',
    answer: 'We lanceren begin 2026. Meld je nu aan om als eerste in aanmerking te komen voor een pilot.'
  }
]

const features = [
  {
    icon: BarChart3,
    title: 'Dashboard per kamer',
    description: 'Overzicht van activiteit, ritme en alerts per bewoner'
  },
  {
    icon: Bell,
    title: 'Intelligente alerts',
    description: 'Meldingen bij afwijkingen, niet bij elk bezoek'
  },
  {
    icon: Users,
    title: 'Meerdere locaties',
    description: 'Beheer al je locaties vanuit één omgeving'
  },
  {
    icon: Brain,
    title: 'AI patroonherkenning',
    description: 'Leert automatisch het normale ritme van elke bewoner'
  },
  {
    icon: Shield,
    title: '100% privacy',
    description: 'Geen camera\'s. Lokale verwerking. AVG-compliant.'
  },
  {
    icon: Clock,
    title: 'Minder nachtrondes',
    description: 'Gerichte controles op basis van echte signalen'
  }
]

const benefits = [
  {
    title: 'Minder nachtronden',
    description: 'Alleen rondlopen als het nodig is, op basis van echte signalen.'
  },
  {
    title: 'Sneller handelen',
    description: 'Direct een melding bij afwijkingen, niet pas bij de volgende ronde.'
  },
  {
    title: 'Geruststelling familie',
    description: 'Familie kan meekijken via hun eigen app - minder belletjes voor jullie.'
  },
  {
    title: 'Privacy bewoners',
    description: 'Geen camera\'s, geen trackers. Alleen patronen, geen beelden.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- SECTIE 1: HERO -->
    <section class="relative min-h-[90vh] flex items-center bg-gradient-to-b from-primary/5 to-background">
      <div class="container max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <!-- Logo -->
        <div class="mb-8 sm:mb-12 flex items-center gap-2">
          <span class="text-2xl font-bold text-primary">GerustThuis</span>
          <span class="text-sm font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">Pro</span>
        </div>

        <!-- Main content -->
        <div class="text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Slimme monitoring voor
            <span class="text-primary">zorginstellingen</span>
          </h1>

          <p class="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Minder nachtronden. Sneller handelen bij afwijkingen.
            Meer rust voor bewoners én medewerkers.
          </p>

          <!-- Waitlist Form -->
          <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Aanmelden voor pilot</h2>
            <WaitlistForm :show-trust-badges="true" proposition="zakelijk" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTIE 2: HET PROBLEEM -->
    <section class="py-16 sm:py-24 bg-gray-50">
      <div class="container max-w-4xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
          Herkenbaar?
        </h2>

        <div class="space-y-6 max-w-xl mx-auto">
          <div class="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
            <span class="text-2xl">🚶</span>
            <p class="text-gray-700 text-lg">"Elke nacht 3 rondes lopen, ook als iedereen slaapt."</p>
          </div>
          <div class="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
            <span class="text-2xl">😰</span>
            <p class="text-gray-700 text-lg">"Je weet pas dat er iets mis is als je het ziet."</p>
          </div>
          <div class="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
            <span class="text-2xl">📞</span>
            <p class="text-gray-700 text-lg">"Familie belt: hoe gaat het met mijn vader?"</p>
          </div>
          <div class="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
            <span class="text-2xl">⏰</span>
            <p class="text-gray-700 text-lg">"Te weinig tijd, te veel administratie."</p>
          </div>
        </div>

        <p class="text-center text-gray-600 mt-10 text-lg max-w-2xl mx-auto">
          Zorg draait om mensen, niet om rondes.
          GerustThuis Pro geeft je de tools om <strong>slimmer</strong> te werken.
        </p>
      </div>
    </section>

    <!-- SECTIE 3: WAT JE KRIJGT -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="container max-w-5xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-16">
          Wat GerustThuis Pro biedt
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-gray-50 p-6 rounded-xl"
          >
            <component
              :is="feature.icon"
              class="w-8 h-8 text-primary mb-4"
            />
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTIE 4: VOORDELEN -->
    <section class="py-16 sm:py-24 bg-primary/5">
      <div class="container max-w-5xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-16">
          Wat het oplevert
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-600 text-lg">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTIE 5: SOCIAL PROOF -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="container max-w-4xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
          Interesse van zorgorganisaties
        </h2>

        <div class="bg-gray-50 p-8 rounded-2xl relative text-center">
          <Building2 class="w-16 h-16 text-primary/20 mx-auto mb-6" />
          <p class="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
            We zijn in gesprek met meerdere zorginstellingen voor pilots in 2026.
            Interesse? Meld je aan en we nemen contact op.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTIE 6: VEELGESTELDE VRAGEN -->
    <section class="py-16 sm:py-24 bg-gray-50">
      <div class="container max-w-3xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
          Veelgestelde vragen
        </h2>

        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900 pr-4">{{ faq.question }}</span>
              <ChevronDown
                v-if="openFaq !== index"
                class="w-5 h-5 text-gray-400 flex-shrink-0"
              />
              <ChevronUp
                v-else
                class="w-5 h-5 text-primary flex-shrink-0"
              />
            </button>
            <div
              v-if="openFaq === index"
              class="px-5 pb-5 text-gray-600"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTIE 7: FINALE CTA -->
    <section class="py-16 sm:py-24 bg-primary">
      <div class="container max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">
          Start een pilot in 2026
        </h2>

        <div class="text-white/80 mb-8 space-y-2">
          <p>Meld je aan en ontvang:</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
            <span class="flex items-center gap-2">
              <span class="text-secondary">✓</span> Prioriteit bij pilot selectie
            </span>
            <span class="flex items-center gap-2">
              <span class="text-secondary">✓</span> Persoonlijke demo
            </span>
            <span class="flex items-center gap-2">
              <span class="text-secondary">✓</span> Maatwerk prijsvoorstel
            </span>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8">
          <WaitlistForm variant="dark" :show-counter="true" proposition="zakelijk" />
        </div>

        <p class="text-white/60 text-sm mt-6 flex items-center justify-center gap-2">
          <Lock class="w-4 h-4" />
          We nemen binnen 2 werkdagen contact op.
        </p>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-8 bg-gray-900 text-white/60">
      <div class="container max-w-5xl mx-auto px-4">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-sm">
            © 2026 GerustThuis |
            <a href="/privacy" class="hover:text-white transition-colors">Privacy</a> |
            <a href="/contact" class="hover:text-white transition-colors">Contact</a>
          </div>
          <div class="text-sm">
            gerustthuis.nl
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
