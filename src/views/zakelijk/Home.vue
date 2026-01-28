<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'

// Ensure page starts at top
onMounted(() => {
  window.scrollTo(0, 0)
})
import {
  Activity,
  Users,
  Clock,
  Shield,
  Building2,
  Home,
  Heart,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  ArrowRight,
  Zap,
  Eye,
  Bell,
  LayoutGrid,
  List,
  Wifi,
  HelpCircle,
  Footprints,
  Timer
} from 'lucide-vue-next'

// Dashboard demo data - meer realistisch met achternamen en urgentie-info
const roomsGrid = [
  { id: 101, name: 'Jansen', status: 'ok', info: null },
  { id: 102, name: 'De Vries', status: 'ok', info: null },
  { id: 103, name: 'Bakker', status: 'attention', info: 'Afwijkend patroon' },
  { id: 104, name: 'Smit', status: 'ok', info: null },
  { id: 105, name: 'Visser', status: 'urgent', info: 'Mogelijke val' },
  { id: 106, name: 'Mulder', status: 'ok', info: null },
  { id: 107, name: 'Bos', status: 'ok', info: null },
  { id: 108, name: 'Klein', status: 'attention', info: 'Lange inactiviteit' },
]

const residentsList = [
  { name: 'Mw. Visser', room: 105, status: 'urgent', reason: 'Mogelijke val gedetecteerd', time: '2 min' },
  { name: 'Mw. Bakker', room: 103, status: 'attention', reason: 'Geen ochtendactiviteit sinds 08:12', time: '41 min' },
  { name: 'Hr. Klein', room: 108, status: 'attention', reason: 'Ongewoon lang in badkamer', time: '23 min' },
]

const problems = [
  { icon: Clock, title: 'Rondes op de klok', description: 'Elke 2 uur langs iedereen, of het nodig is of niet.' },
  { icon: Users, title: 'Structureel te weinig mensen', description: 'Meer bewoners per medewerker, de rek is eruit.' },
  { icon: AlertTriangle, title: 'Te laat ontdekt', description: 'Een val tussen rondes door blijft te lang liggen.' },
  { icon: HelpCircle, title: 'Blind prioriteren', description: 'Wie heeft het nu het hardst nodig? Niemand weet het.' },
]

const benefits = [
  { icon: Footprints, title: 'Minder lopen, meer zorgen', description: 'Alleen naar kamers waar iets aan de hand is.' },
  { icon: Timer, title: 'Sneller ter plaatse', description: 'Minuten kunnen het verschil maken — zeker bij een val.' },
  { icon: Eye, title: 'Eén blik, alle kamers', description: 'Geen losse systemen, geen ruis.' },
  { icon: Shield, title: 'Geen camera\'s, wel compliant', description: 'AVG-proof, bewoners voelen zich niet bekeken.' },
]

const targetAudiences = [
  { icon: Building2, name: 'Verpleeghuizen', description: 'Kamermonitoring voor grote locaties' },
  { icon: Home, name: 'Thuiszorgorganisaties', description: 'Remote monitoring van cliënten thuis' },
  { icon: Users, name: 'Aanleunwoningen', description: 'Zelfstandig wonen met een vangnet' },
  { icon: Heart, name: 'Seniorencomplexen', description: 'Collectieve zorg, individuele aandacht' },
]

const howItWorks = [
  { step: 1, title: 'Sensoren + hub installeren', description: 'In elke kamer. Draadloos, op batterij. Hub op jullie netwerk.' },
  { step: 2, title: 'Dashboard bekijken', description: 'Real-time overzicht, gesorteerd op urgentie.' },
  { step: 3, title: 'Meldingen ontvangen', description: 'Naar dienstdoende of centrale.' },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden min-h-[90vh] flex items-center">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div class="container py-16 md:py-24 lg:py-32 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span class="inline-block px-4 py-2 bg-sky-500/20 text-sky-400 font-semibold rounded-full text-sm mb-6 border border-sky-500/30">
              Voor zorginstellingen
            </span>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Weet waar aandacht
              <span class="block text-sky-400 mt-2">nodig is.</span>
            </h1>

            <p class="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
              Uw team loopt nog vaste rondes. Ondertussen wacht kamer 105 al 40 minuten op hulp — en kamer 102 slaapt gewoon.
            </p>

            <p class="text-xl text-white font-medium mb-8">
              GerustThuis laat zien wie <span class="text-sky-400">nú</span> aandacht nodig heeft.
            </p>

            <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <AlertTriangle class="w-4 h-4 text-amber-400" />
              <span class="text-sm text-slate-300">Inclusief automatische valdetectie</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mb-6">
              <RouterLink to="/zakelijk/demo">
                <Button variant="primary" size="lg" class="bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/25">
                  <ArrowRight class="w-5 h-5 mr-2" />
                  Plan een demo
                </Button>
              </RouterLink>
              <RouterLink to="/zakelijk/oplossingen">
                <Button variant="outline" size="lg" class="bg-white border-white text-slate-900 hover:bg-slate-100">
                  Bekijk oplossingen
                </Button>
              </RouterLink>
            </div>

            <p class="text-slate-400 text-sm">
              Gratis demonstratie op locatie. Prijs op maat.
            </p>
          </div>

          <!-- Dashboard Preview - verbeterd -->
          <div class="hidden lg:block">
            <div class="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-slate-700">
              <!-- Header met klok -->
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span class="font-semibold text-white">Live overzicht</span>
                  <span class="text-slate-400 text-sm">• 09:47</span>
                </div>
                <span class="text-xs text-slate-500">8 kamers</span>
              </div>

              <!-- Grid met achternamen -->
              <div class="grid grid-cols-4 gap-2 mb-4">
                <div
                  v-for="room in roomsGrid"
                  :key="room.id"
                  class="relative rounded-xl p-2 text-white text-center"
                  :class="{
                    'bg-emerald-600': room.status === 'ok',
                    'bg-amber-500': room.status === 'attention',
                    'bg-red-500 animate-pulse': room.status === 'urgent'
                  }"
                >
                  <span class="font-bold text-sm">{{ room.id }}</span>
                  <span class="block text-xs opacity-90 truncate">{{ room.name }}</span>
                  <!-- Urgentie tooltip -->
                  <div
                    v-if="room.info"
                    class="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-full bg-slate-900 text-xs px-2 py-1 rounded whitespace-nowrap z-10 opacity-0 group-hover:opacity-100 pointer-events-none"
                  >
                    {{ room.info }}
                  </div>
                </div>
              </div>

              <!-- Urgente meldingen -->
              <div class="bg-slate-900/50 rounded-xl p-3 space-y-2">
                <div class="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle class="w-4 h-4" />
                  <span class="font-medium">105 Visser</span>
                  <span class="text-slate-400">— Mogelijke val gedetecteerd</span>
                </div>
                <div class="flex items-center gap-2 text-amber-400 text-sm">
                  <AlertTriangle class="w-4 h-4" />
                  <span class="font-medium">103 Bakker</span>
                  <span class="text-slate-400">— Geen activiteit sinds 08:12</span>
                </div>
              </div>

              <!-- Legenda -->
              <div class="flex items-center justify-center gap-4 text-xs mt-4 pt-3 border-t border-slate-700">
                <div class="flex items-center gap-1.5">
                  <div class="w-3 h-3 rounded bg-emerald-600" />
                  <span class="text-slate-400">Normaal</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="w-3 h-3 rounded bg-amber-500" />
                  <span class="text-slate-400">Check</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="w-3 h-3 rounded bg-red-500" />
                  <span class="text-slate-400">Urgent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-2 bg-amber-100 text-amber-700 font-semibold rounded-full text-sm mb-4">
            Het probleem
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Elke ronde is een gok
          </h2>
          <p class="text-xl text-gray-600">
            Uw medewerkers lopen 30 kamers langs in vaste volgorde. Maar zorgbehoefte volgt geen schema. Het resultaat: tijd verspild aan bewoners die prima zijn, terwijl anderen te lang wachten.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div
            v-for="problem in problems"
            :key="problem.title"
            class="bg-slate-50 rounded-2xl p-6 border border-slate-200"
          >
            <component :is="problem.icon" class="w-10 h-10 text-slate-700 mb-4" />
            <h3 class="font-bold text-gray-900 mb-2">{{ problem.title }}</h3>
            <p class="text-gray-600 text-sm">{{ problem.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="py-20 md:py-28 bg-slate-50">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 font-semibold rounded-full text-sm mb-4">
            De oplossing
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Van gokken naar weten
          </h2>
          <p class="text-xl text-gray-600">
            Bewegingssensoren leren het ritme van elke bewoner. Automatische valdetectie signaleert acute situaties. Het dashboard laat zien wie afwijkt — zodat uw team loopt waar het telt.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
              <Wifi class="w-7 h-7 text-sky-600" />
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Sensoren registreren</h3>
            <p class="text-gray-600">Beweging én valdetectie per kamer, 24/7. Batterijduur 2 jaar.</p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
              <Activity class="w-7 h-7 text-sky-600" />
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Hub analyseert</h3>
            <p class="text-gray-600">Leert patronen per bewoner. Detecteert afwijkingen én mogelijke valincidenten — lokaal, zonder cloud.</p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
              <Bell class="w-7 h-7 text-sky-600" />
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Dashboard prioriteert</h3>
            <p class="text-gray-600">Urgentie-levels: normaal, aandacht, urgent. Valdetectie triggert direct een urgent-melding.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Valdetectie Section - NIEUW -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-red-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-red-100">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span class="inline-block px-3 py-1 bg-red-100 text-red-700 font-semibold rounded-full text-sm mb-4">
                  Valdetectie
                </span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Automatische valdetectie
                </h2>
                <p class="text-lg text-gray-600 mb-6">
                  De sensoren herkennen een val en sturen direct een urgent-melding naar het dashboard. Geen alarmknop nodig, geen actie van de bewoner vereist.
                </p>
                <p class="text-gray-700 font-medium">
                  Zo weet uw team het binnen seconden — niet pas bij de volgende ronde.
                </p>
              </div>
              <div class="flex justify-center">
                <div class="bg-white rounded-2xl p-6 shadow-lg border border-red-200 max-w-xs">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center animate-pulse">
                      <AlertCircle class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-bold text-gray-900">URGENT</p>
                      <p class="text-gray-500 text-sm">Nu • Kamer 105</p>
                    </div>
                  </div>
                  <div class="bg-red-50 rounded-xl p-4 border border-red-100">
                    <p class="text-red-800 font-medium">Mogelijke val gedetecteerd</p>
                    <p class="text-red-600 text-sm mt-1">Mw. Visser • Badkamer</p>
                    <p class="text-red-500 text-xs mt-2">Geen beweging na impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Preview Section -->
    <section class="py-20 md:py-28 bg-slate-50">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 font-semibold rounded-full text-sm mb-4">
            Het dashboard
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Twee views, één overzicht
          </h2>
          <p class="text-xl text-gray-600">
            Kies tussen grid-weergave (kamers) of lijst-weergave (bewoners op urgentie).
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Grid View -->
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <LayoutGrid class="w-6 h-6 text-sky-600" />
                <h3 class="font-bold text-gray-900 text-xl">Kamer-overzicht</h3>
              </div>
              <span class="text-slate-400 text-sm">09:47</span>
            </div>

            <div class="bg-slate-50 rounded-2xl p-4">
              <div class="grid grid-cols-4 gap-3">
                <div
                  v-for="room in roomsGrid"
                  :key="room.id"
                  class="aspect-square rounded-xl flex flex-col items-center justify-center text-white p-2"
                  :class="{
                    'bg-emerald-600': room.status === 'ok',
                    'bg-amber-500': room.status === 'attention',
                    'bg-red-500 animate-pulse': room.status === 'urgent'
                  }"
                >
                  <span class="font-bold text-base">{{ room.id }}</span>
                  <span class="text-xs opacity-90 truncate w-full text-center">{{ room.name }}</span>
                </div>
              </div>
            </div>

            <p class="text-gray-500 text-sm mt-4 text-center">
              Direct visueel overzicht. Klik voor details.
            </p>
          </div>

          <!-- List View -->
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <List class="w-6 h-6 text-sky-600" />
                <h3 class="font-bold text-gray-900 text-xl">Urgentie-lijst</h3>
              </div>
              <span class="text-slate-400 text-sm">Live</span>
            </div>

            <div class="bg-slate-50 rounded-2xl divide-y divide-slate-200">
              <div
                v-for="resident in residentsList"
                :key="resident.room"
                class="p-4 flex items-center gap-4"
              >
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  :class="{
                    'bg-red-500': resident.status === 'urgent',
                    'bg-amber-500': resident.status === 'attention'
                  }"
                >
                  <AlertCircle
                    v-if="resident.status === 'urgent'"
                    class="w-6 h-6 text-white"
                  />
                  <AlertTriangle
                    v-else
                    class="w-6 h-6 text-white"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-gray-900">{{ resident.name }}</span>
                    <span class="text-gray-400 text-sm">{{ resident.room }}</span>
                  </div>
                  <p class="text-gray-600 text-sm">{{ resident.reason }}</p>
                </div>
                <span class="text-gray-400 text-sm font-medium">{{ resident.time }}</span>
              </div>
            </div>

            <p class="text-gray-500 text-sm mt-4 text-center">
              Gesorteerd op urgentie. Meest dringende bovenaan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 font-semibold rounded-full text-sm mb-4">
            Voordelen
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Waarom zorginstellingen kiezen voor GerustThuis
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all"
          >
            <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
              <component :is="benefit.icon" class="w-7 h-7 text-sky-600" />
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600 text-sm">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- For Who Section -->
    <section class="py-20 md:py-28 bg-slate-50">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 font-semibold rounded-full text-sm mb-4">
            Voor wie?
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Geschikt voor verschillende zorgsettings
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div
            v-for="audience in targetAudiences"
            :key="audience.name"
            class="bg-white rounded-2xl p-6 text-center border border-slate-200"
          >
            <div class="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <component :is="audience.icon" class="w-8 h-8 text-sky-600" />
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ audience.name }}</h3>
            <p class="text-gray-600 text-sm">{{ audience.description }}</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <RouterLink to="/zakelijk/voor-wie">
            <Button variant="outline">
              Meer over doelgroepen
              <ArrowRight class="w-4 h-4 ml-2" />
            </Button>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-2 bg-sky-100 text-sky-700 font-semibold rounded-full text-sm mb-4">
            Hoe het werkt
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Van installatie tot inzicht
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div
            v-for="item in howItWorks"
            :key="item.step"
            class="relative text-center"
          >
            <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              {{ item.step }}
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-28 bg-slate-900 text-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Zien hoe het werkt in uw situatie?
          </h2>
          <p class="text-xl text-slate-300 mb-8">
            Gratis demo op locatie. Geen verplichtingen, wel antwoorden.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/zakelijk/demo">
              <Button variant="primary" size="lg" class="bg-sky-500 hover:bg-sky-600">
                Plan een demo
                <ArrowRight class="w-5 h-5 ml-2" />
              </Button>
            </RouterLink>
            <RouterLink to="/contact">
              <Button variant="outline" size="lg" class="bg-white border-white text-slate-900 hover:bg-slate-100">
                Neem contact op
              </Button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
