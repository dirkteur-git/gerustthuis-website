<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Accordion from '@/components/ui/Accordion.vue'
import {
  Radio,
  DoorOpen,
  Radar,
  Cpu,
  Refrigerator,
  ShowerHead,
  AlertTriangle,
  Bell,
  Smartphone,
  MessageSquare,
  Phone,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Shield
} from 'lucide-vue-next'

const sensorTypes = [
  {
    icon: Radio,
    title: 'Bewegingssensoren',
    description: 'Detecteren beweging zonder te zien wát er gebeurt.',
    color: 'blue'
  },
  {
    icon: DoorOpen,
    title: 'Deurcontacten',
    description: 'Weten wanneer deuren worden geopend of gesloten.',
    color: 'emerald'
  },
  {
    icon: Radar,
    title: 'Valdetectie radar',
    description: 'Radar-technologie die een val detecteert, zonder camera.',
    color: 'purple'
  }
]

const learningExamples = [
  {
    icon: Refrigerator,
    normal: 'Koelkast meestal open tussen 08:00-09:30',
    deviation: 'Vandaag pas om 16:11',
    result: 'Afwijking',
    color: 'amber'
  },
  {
    icon: ShowerHead,
    normal: 'Dagelijks badkamerbezoek',
    deviation: 'Blijft uit',
    result: 'Mogelijke melding',
    color: 'blue'
  },
  {
    icon: AlertTriangle,
    normal: 'Val in woonkamer',
    deviation: null,
    result: 'Direct alarm, zonder wachttijd',
    color: 'red'
  }
]

const notificationMethods = [
  { icon: Smartphone, name: 'App' },
  { icon: MessageSquare, name: 'SMS' },
  { icon: MessageSquare, name: 'WhatsApp' },
  { icon: Phone, name: 'Telefoon' }
]

const faqs = [
  {
    title: 'Hoe lang duurt de installatie?',
    content: 'Binnen 30-60 minuten is alles geplaatst en ingesteld.'
  },
  {
    title: 'Zijn er kabels nodig?',
    content: 'Nee, alles werkt draadloos en op batterij.'
  },
  {
    title: 'Moet ik technisch zijn?',
    content: 'Nee, we begeleiden je stap voor stap.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/5 overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div class="absolute bottom-10 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div class="container relative">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-semibold text-sm mb-6 shadow-sm border border-primary/10">
            <Sparkles class="w-4 h-4" />
            Hoe het werkt
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hoe werkt GerustThuis?
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Van slimme sensoren tot geruststellende meldingen. In drie eenvoudige stappen.
          </p>
        </div>
      </div>
    </section>

    <!-- Step 1: Sensors -->
    <section class="py-20 md:py-28 bg-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div class="container relative">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center gap-6 mb-12">
            <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-primary/25">
              1
            </div>
            <div>
              <span class="text-primary font-semibold text-sm uppercase tracking-wide">Stap 1</span>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Discrete sensoren in huis</h2>
            </div>
          </div>

          <p class="text-xl text-gray-600 mb-12 max-w-3xl">
            Onze sensoren zijn klein, elegant en vallen nauwelijks op. Ze worden strategisch geplaatst op plekken waar je ouder veel komt.
          </p>

          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="sensor in sensorTypes"
              :key="sensor.title"
              class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                :class="{
                  'bg-blue-100': sensor.color === 'blue',
                  'bg-emerald-100': sensor.color === 'emerald',
                  'bg-purple-100': sensor.color === 'purple'
                }"
              >
                <component
                  :is="sensor.icon"
                  class="w-8 h-8"
                  :class="{
                    'text-blue-600': sensor.color === 'blue',
                    'text-emerald-600': sensor.color === 'emerald',
                    'text-purple-600': sensor.color === 'purple'
                  }"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ sensor.title }}</h3>
              <p class="text-gray-600 text-lg">{{ sensor.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 2: Learning -->
    <section class="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100">
      <div class="container">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center gap-6 mb-12">
            <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-primary/25">
              2
            </div>
            <div>
              <span class="text-primary font-semibold text-sm uppercase tracking-wide">Stap 2</span>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Leren van het ritme</h2>
            </div>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                Het systeem leert het dagritme en stuurt alleen meldingen bij afwijkingen. Na ongeveer een week is het persoonlijke patroon bekend.
              </p>
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
                <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield class="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <p class="text-gray-900 font-bold">Slim en veilig</p>
                  <p class="text-gray-600">Alleen meldingen, geen sensorbeelden</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <p class="font-bold text-gray-900 mb-6 text-lg">Voorbeelden:</p>
              <div
                v-for="example in learningExamples"
                :key="example.normal"
                class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    :class="{
                      'bg-amber-100': example.color === 'amber',
                      'bg-blue-100': example.color === 'blue',
                      'bg-red-100': example.color === 'red'
                    }"
                  >
                    <component
                      :is="example.icon"
                      class="w-6 h-6"
                      :class="{
                        'text-amber-600': example.color === 'amber',
                        'text-blue-600': example.color === 'blue',
                        'text-red-600': example.color === 'red'
                      }"
                    />
                  </div>
                  <div class="flex-1">
                    <p class="text-gray-700 font-medium">{{ example.normal }}</p>
                    <div v-if="example.deviation" class="flex items-center gap-2 text-gray-500 mt-2">
                      <ArrowRight class="w-4 h-4" />
                      <span>{{ example.deviation }}</span>
                    </div>
                    <div class="flex items-center gap-2 mt-2">
                      <ArrowRight class="w-4 h-4 text-primary" />
                      <span
                        class="font-bold px-3 py-1 rounded-full text-sm"
                        :class="{
                          'bg-amber-100 text-amber-700': example.color === 'amber',
                          'bg-blue-100 text-blue-700': example.color === 'blue',
                          'bg-red-100 text-red-700': example.color === 'red'
                        }"
                      >
                        {{ example.result }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 3: Notifications -->
    <section class="py-20 md:py-28 bg-white relative overflow-hidden">
      <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />

      <div class="container relative">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center gap-6 mb-12">
            <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-primary/25">
              3
            </div>
            <div>
              <span class="text-primary font-semibold text-sm uppercase tracking-wide">Stap 3</span>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Meldingen op jouw manier</h2>
            </div>
          </div>

          <p class="text-xl text-gray-600 mb-12 max-w-3xl">
            Je stelt zelf in hoe je meldingen wilt ontvangen. Bij afwijkingen ontvang je alleen dan een melding.
          </p>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 class="font-bold text-gray-900 mb-6 text-lg">Kies je kanaal:</h3>
              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="method in notificationMethods"
                  :key="method.name"
                  class="bg-white rounded-2xl p-4 flex items-center gap-3 border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <component :is="method.icon" class="w-5 h-5 text-primary" />
                  </div>
                  <span class="font-medium text-gray-700">{{ method.name }}</span>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/10">
              <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Bell class="w-7 h-7 text-primary" />
              </div>
              <p class="text-gray-700 text-lg leading-relaxed">
                Geen sensordata, geen live meekijken, alleen:
              </p>
              <div class="flex flex-wrap gap-3 mt-4">
                <span class="inline-flex items-center gap-2 bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full">
                  <CheckCircle class="w-5 h-5" />
                  Alles normaal
                </span>
                <span class="text-gray-500 font-medium py-2">of</span>
                <span class="inline-flex items-center gap-2 bg-amber-100 text-amber-700 font-bold px-4 py-2 rounded-full">
                  <AlertTriangle class="w-5 h-5" />
                  Afwijking
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100">
      <div class="container">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-2 bg-white text-primary font-semibold rounded-full text-sm mb-4 shadow-sm">
              FAQ
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
              Veelgestelde vragen
            </h2>
          </div>
          <Accordion :items="faqs" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

      <div class="container relative">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Klaar om te beginnen?
          </h2>
          <p class="text-xl text-white/80 mb-10">
            Meld je aan voor de wachtlijst en krijg als eerste toegang.
          </p>
          <RouterLink to="/particulier/wachtlijst">
            <Button size="lg" class="bg-white text-primary hover:bg-gray-100 shadow-xl shadow-black/20">
              <ArrowRight class="w-5 h-5 mr-2" />
              Meld je aan voor de wachtlijst
            </Button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
