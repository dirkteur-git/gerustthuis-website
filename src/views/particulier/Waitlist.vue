<script setup>
import { ref } from 'vue'
import {
  Lock,
  Brain,
  Smartphone,
  Home,
  Bell,
  Shield,
  Pill,
  Users,
  ChevronDown,
  ChevronUp,
  Package,
  Quote,
  Phone,
  VolumeX,
  HelpCircle,
  HeartHandshake,
  Flag
} from 'lucide-vue-next'
import WaitlistForm from '@/components/forms/WaitlistForm.vue'

// FAQ Accordion state
const openFaq = ref(null)

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const faqs = [
  {
    question: 'Zijn er camera\'s?',
    answer: 'Nee, absoluut niet. GerustThuis werkt met bewegingssensoren, deurcontacten en radar voor valdetectie. Je ziet patronen, geen beelden. Privacy voorop.'
  },
  {
    question: 'Wat kost het?',
    answer: 'We werken nog aan het exacte prijsmodel. Meld je aan voor de wachtlijst en krijg als eerste toegang tot vroegboekprijzen.'
  },
  {
    question: 'Moet mijn ouder technisch zijn?',
    answer: 'Nee. Je ouder hoeft niets te doen. De sensoren werken onzichtbaar op de achtergrond. Geen app, geen knoppen.'
  },
  {
    question: 'Kan ik het zelf installeren?',
    answer: 'Ja, de sensoren zijn plug & play. Plakken of schroeven, klaar. Of wij komen langs voor installatie.'
  },
  {
    question: 'Wanneer is het beschikbaar?',
    answer: 'We lanceren begin 2026. Meld je aan voor de wachtlijst en krijg als eerste toegang + een vroegboekkorting.'
  }
]

const features = [
  {
    icon: Home,
    title: 'Dagritme inzicht',
    description: 'Weet wanneer je ouder opstaat, beweegt, en naar bed gaat'
  },
  {
    icon: Bell,
    title: 'Slimme alerts',
    description: 'Alleen melding bij echte afwijkingen, geen valse alarmen'
  },
  {
    icon: Shield,
    title: 'Valdetectie',
    description: 'Radar detecteert een val, zonder camera'
  },
  {
    icon: Pill,
    title: 'Herinneringen',
    description: 'Medicijnen, drinken, afspraken - vriendelijk via spraak'
  },
  {
    icon: Users,
    title: 'Familie dashboard',
    description: 'Deel de status met broers, zussen, of thuiszorg'
  },
  {
    icon: Lock,
    title: 'Slim en veilig',
    description: 'Geen camera\'s. Alleen meldingen bij afwijkingen. Jij bepaalt wie toegang heeft.'
  }
]

const testimonials = [
  {
    quote: 'Eindelijk slaap ik weer rustig. Ik weet dat als er iets is, ik direct bericht krijg.',
    author: 'Marieke',
    role: 'dochter (52)'
  },
  {
    quote: 'Mijn vader was eerst sceptisch, maar vindt het nu fijn dat we meekijken zonder te bellen.',
    author: 'Peter',
    role: 'zoon (48)'
  }
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- SECTIE 1: HERO -->
    <section class="relative min-h-[90vh] flex items-center bg-gradient-to-b from-primary/5 to-background">
      <div class="container max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <!-- Logo -->
        <div class="mb-8 sm:mb-12">
          <span class="text-2xl font-bold text-primary">GerustThuis</span>
        </div>

        <!-- Main content -->
        <div class="text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Weet dat het goed gaat met je ouders.<br class="hidden sm:block" />
            <span class="text-primary">Zonder elke dag te hoeven bellen.</span>
          </h1>

          <p class="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Slimme sensoren leren het dagritme en waarschuwen je automatisch bij afwijkingen.
            Geen camera's. Wel gemoedsrust.
          </p>

          <!-- Waitlist Form -->
          <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
            <WaitlistForm :show-trust-badges="true" />
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
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone class="w-5 h-5 text-primary" />
            </div>
            <p class="text-gray-700 text-lg">"Je belt elke dag. Maar de ongerustheid blijft."</p>
          </div>
          <div class="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <VolumeX class="w-5 h-5 text-primary" />
            </div>
            <p class="text-gray-700 text-lg">"Je schrikt van elk gemist telefoontje."</p>
          </div>
          <div class="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <HelpCircle class="w-5 h-5 text-primary" />
            </div>
            <p class="text-gray-700 text-lg">"Je vraagt je af of je vaker langs moet gaan."</p>
          </div>
          <div class="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <HeartHandshake class="w-5 h-5 text-primary" />
            </div>
            <p class="text-gray-700 text-lg">"Je wilt helpen, maar ook je eigen leven leiden."</p>
          </div>
        </div>

        <p class="text-center text-gray-600 mt-10 text-lg max-w-2xl mx-auto">
          Je bent niet de enige. Meer dan <strong>4 miljoen Nederlanders</strong> zorgen voor een naaste.
          Er is een betere manier.
        </p>
      </div>
    </section>

    <!-- SECTIE 3: DE OPLOSSING -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="container max-w-5xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-16">
          Zo werkt GerustThuis
        </h2>

        <div class="grid md:grid-cols-3 gap-8 md:gap-12">
          <!-- Step 1 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package class="w-10 h-10 text-primary" />
            </div>
            <div class="text-sm font-semibold text-primary mb-2">STAP 1</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Kleine sensoren in huis</h3>
            <p class="text-gray-600">
              Discrete sensoren bij deuren en in kamers. Geen camera's, geen wearables.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain class="w-10 h-10 text-primary" />
            </div>
            <div class="text-sm font-semibold text-primary mb-2">STAP 2</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">AI leert het ritme</h3>
            <p class="text-gray-600">
              Na een week kent het systeem het normale patroon. Opstaan, bewegen, slapen.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone class="w-10 h-10 text-primary" />
            </div>
            <div class="text-sm font-semibold text-primary mb-2">STAP 3</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Jij krijgt bericht als het nodig is</h3>
            <p class="text-gray-600">
              Dagelijks: "Alles ging normaal." Bij afwijking: "Je moeder is later op dan normaal."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTIE 4: WAT JE KRIJGT -->
    <section class="py-16 sm:py-24 bg-gray-50">
      <div class="container max-w-5xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-16">
          Wat GerustThuis je geeft
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-white p-6 rounded-xl shadow-sm"
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

    <!-- SECTIE 5: SOCIAL PROOF -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="container max-w-4xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
          Dit zeggen anderen
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.author"
            class="bg-gray-50 p-8 rounded-2xl relative"
          >
            <Quote class="w-10 h-10 text-primary/20 absolute top-6 left-6" />
            <p class="text-lg text-gray-700 mb-6 relative z-10 italic">
              "{{ testimonial.quote }}"
            </p>
            <div class="font-semibold text-gray-900">
              — {{ testimonial.author }}, <span class="font-normal text-gray-600">{{ testimonial.role }}</span>
            </div>
          </div>
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

    <!-- SECTIE 7: FOUNDER STORY -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="container max-w-3xl mx-auto px-4">
        <div class="bg-primary/5 rounded-2xl p-8 sm:p-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Waarom ik dit bouw
          </h2>

          <div class="prose prose-lg text-gray-700">
            <p>
              "Toen mijn moeder vorig jaar viel in de badkamer, lag ze 3 uur op de grond
              voor iemand haar vond.
            </p>
            <p>
              Dat wil ik niemand aandoen.
            </p>
            <p>
              GerustThuis is mijn manier om technologie in te zetten voor wat echt telt:
              weten dat het goed gaat met de mensen van wie je houdt."
            </p>
          </div>

          <div class="mt-8 flex items-center gap-4">
            <div class="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
              D
            </div>
            <div>
              <div class="font-semibold text-gray-900">Dirk Bakker</div>
              <div class="text-gray-600">Oprichter GerustThuis</div>
            </div>
          </div>

          <div class="mt-6 flex items-center gap-2 text-gray-600">
            <Flag class="w-4 h-4 text-primary" />
            <span>100% Nederlands initiatief</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTIE 8: FINALE CTA -->
    <section class="py-16 sm:py-24 bg-primary">
      <div class="container max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">
          Wees erbij als we lanceren
        </h2>

        <div class="text-white/80 mb-8 space-y-2">
          <p>Meld je aan voor de wachtlijst en ontvang:</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
            <span class="flex items-center gap-2">
              <span class="text-secondary">✓</span> Als eerste toegang bij lancering
            </span>
            <span class="flex items-center gap-2">
              <span class="text-secondary">✓</span> Exclusieve vroegboekkorting
            </span>
            <span class="flex items-center gap-2">
              <span class="text-secondary">✓</span> Updates over de ontwikkeling
            </span>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8">
          <WaitlistForm variant="dark" :show-counter="true" />
        </div>

        <p class="text-white/60 text-sm mt-6 flex items-center justify-center gap-2">
          <Lock class="w-4 h-4" />
          We delen je email nooit. Geen spam.
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
