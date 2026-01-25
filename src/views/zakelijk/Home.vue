<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
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
  Battery
} from 'lucide-vue-next'

// Dashboard demo data
const roomsGrid = [
  { id: 101, name: 'Kamer 101', status: 'ok', resident: 'Mw. Jansen' },
  { id: 102, name: 'Kamer 102', status: 'ok', resident: 'Hr. de Vries' },
  { id: 103, name: 'Kamer 103', status: 'attention', resident: 'Mw. Bakker' },
  { id: 104, name: 'Kamer 104', status: 'ok', resident: 'Hr. Smit' },
  { id: 105, name: 'Kamer 105', status: 'urgent', resident: 'Mw. Visser' },
  { id: 106, name: 'Kamer 106', status: 'ok', resident: 'Hr. Mulder' },
  { id: 107, name: 'Kamer 107', status: 'ok', resident: 'Mw. Bos' },
  { id: 108, name: 'Kamer 108', status: 'attention', resident: 'Hr. Klein' },
]

const residentsList = [
  { name: 'Mw. Visser', room: 105, status: 'urgent', reason: 'Geen ochtendactiviteit', time: '09:45' },
  { name: 'Mw. Bakker', room: 103, status: 'attention', reason: 'Afwijkend patroon', time: '08:30' },
  { name: 'Hr. Klein', room: 108, status: 'attention', reason: 'Lange inactiviteit', time: '10:15' },
]

const benefits = [
  { icon: Zap, title: 'Efficiënter werken', description: 'Geen onnodige rondes meer. Loop alleen naar kamers waar aandacht nodig is.' },
  { icon: Heart, title: 'Betere zorg', description: 'Sneller bij bewoners die het nodig hebben. Minder gemiste incidenten.' },
  { icon: Eye, title: 'Overzicht behouden', description: 'Eén dashboard voor alle kamers. Direct zien waar actie vereist is.' },
  { icon: Shield, title: 'Privacy-proof', description: 'Geen camera\'s, AVG-compliant. Alleen afwijkingen worden gemeld.' },
]

const targetAudiences = [
  { icon: Building2, name: 'Verpleeghuizen', description: 'Kamermonitoring voor grote locaties' },
  { icon: Home, name: 'Thuiszorgorganisaties', description: 'Remote monitoring van cliënten thuis' },
  { icon: Users, name: 'Aanleunwoningen', description: 'Zelfstandig wonen met een vangnet' },
  { icon: Heart, name: 'Seniorencomplexen', description: 'Collectieve zorg, individuele aandacht' },
]

const howItWorks = [
  { step: 1, title: 'Sensoren plaatsen', description: 'In elke kamer of woning. Door ons of zelf.' },
  { step: 2, title: 'Hub verbinden', description: 'Sluit aan op jullie netwerk. Analyseert lokaal.' },
  { step: 3, title: 'Dashboard gebruiken', description: 'Real-time overzicht van alle bewoners.' },
  { step: 4, title: 'Meldingen ontvangen', description: 'Naar dienstdoende medewerker of centrale.' },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100 overflow-hidden min-h-[85vh] flex items-center">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div class="absolute bottom-20 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div class="container py-16 md:py-24 lg:py-32 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
              Voor zorginstellingen
            </span>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Weet waar aandacht
              <span class="block text-primary mt-2">nodig is.</span>
            </h1>

            <p class="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
              Slim kamermonitoring dat prioriteert op basis van zorgbehoefte — niet op vaste rondes.
            </p>

            <div class="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Activity class="w-4 h-4 text-primary" />
              <span class="text-sm text-gray-700">Sensoren detecteren afwijkingen, dashboard toont urgentie</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mb-6">
              <RouterLink to="/zakelijk/demo">
                <Button variant="primary" size="lg" class="shadow-lg shadow-primary/25">
                  <ArrowRight class="w-5 h-5 mr-2" />
                  Plan een demo
                </Button>
              </RouterLink>
              <RouterLink to="/zakelijk/oplossingen">
                <Button variant="outline" size="lg">
                  Bekijk oplossingen
                </Button>
              </RouterLink>
            </div>

            <p class="text-gray-500 text-sm">
              Gratis demonstratie op locatie. Prijs op maat voor uw organisatie.
            </p>
          </div>

          <!-- Dashboard Preview Mini -->
          <div class="hidden lg:block">
            <div class="bg-white rounded-3xl shadow-2xl p-6 transform rotate-1">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span class="font-semibold text-gray-900">Live overzicht</span>
                </div>
                <span class="text-xs text-gray-400">8 kamers</span>
              </div>

              <div class="grid grid-cols-4 gap-2 mb-4">
                <div
                  v-for="room in roomsGrid"
                  :key="room.id"
                  class="aspect-square rounded-xl flex items-center justify-center text-white text-xs font-bold"
                  :class="{
                    'bg-emerald-500': room.status === 'ok',
                    'bg-amber-500': room.status === 'attention',
                    'bg-red-500': room.status === 'urgent'
                  }"
                >
                  {{ room.id }}
                </div>
              </div>

              <div class="flex items-center justify-center gap-4 text-xs">
                <div class="flex items-center gap-1">
                  <div class="w-3 h-3 rounded bg-emerald-500" />
                  <span class="text-gray-500">Normaal</span>
                </div>
                <div class="flex items-center gap-1">
                  <div class="w-3 h-3 rounded bg-amber-500" />
                  <span class="text-gray-500">Aandacht</span>
                </div>
                <div class="flex items-center gap-1">
                  <div class="w-3 h-3 rounded bg-red-500" />
                  <span class="text-gray-500">Urgent</span>
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
            Minder handen, meer bewoners
          </h2>
          <p class="text-xl text-gray-600">
            De zorg kampt met personeelstekort. Vaste rondes zijn niet meer efficiënt.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div class="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <Clock class="w-10 h-10 text-amber-600 mb-4" />
            <h3 class="font-bold text-gray-900 mb-2">Vaste rondes</h3>
            <p class="text-gray-600 text-sm">Elke 2 uur langs alle kamers, ook als het niet nodig is.</p>
          </div>
          <div class="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <Users class="w-10 h-10 text-amber-600 mb-4" />
            <h3 class="font-bold text-gray-900 mb-2">Personeelstekort</h3>
            <p class="text-gray-600 text-sm">Meer bewoners per medewerker, minder tijd per persoon.</p>
          </div>
          <div class="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <AlertTriangle class="w-10 h-10 text-amber-600 mb-4" />
            <h3 class="font-bold text-gray-900 mb-2">Gemiste incidenten</h3>
            <p class="text-gray-600 text-sm">Val of nood tussen rondes door wordt te laat ontdekt.</p>
          </div>
          <div class="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <Activity class="w-10 h-10 text-amber-600 mb-4" />
            <h3 class="font-bold text-gray-900 mb-2">Geen inzicht</h3>
            <p class="text-gray-600 text-sm">Geen overzicht welke bewoner nu aandacht nodig heeft.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 font-semibold rounded-full text-sm mb-4">
            De oplossing
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sensoren + Dashboard = Inzicht
          </h2>
          <p class="text-xl text-gray-600">
            Bewegingssensoren per kamer detecteren afwijkingen. Het dashboard toont direct waar actie nodig is.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Wifi class="w-10 h-10 text-primary" />
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Sensoren registreren</h3>
            <p class="text-gray-600">Beweging per kamer, 24/7. Werken op batterij (2 jaar).</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Activity class="w-10 h-10 text-primary" />
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Hub analyseert</h3>
            <p class="text-gray-600">Leert patronen per bewoner. Detecteert afwijkingen lokaal.</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bell class="w-10 h-10 text-primary" />
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Dashboard prioriteert</h3>
            <p class="text-gray-600">Urgentie-levels: normaal, aandacht, urgent.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Preview Section -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
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
          <div class="bg-slate-50 rounded-3xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <LayoutGrid class="w-6 h-6 text-primary" />
              <h3 class="font-bold text-gray-900 text-xl">Grid View — Kamers</h3>
            </div>

            <div class="bg-white rounded-2xl p-6 shadow-sm">
              <div class="grid grid-cols-4 gap-3">
                <div
                  v-for="room in roomsGrid"
                  :key="room.id"
                  class="aspect-square rounded-xl flex flex-col items-center justify-center text-white p-2"
                  :class="{
                    'bg-emerald-500': room.status === 'ok',
                    'bg-amber-500': room.status === 'attention',
                    'bg-red-500 animate-pulse': room.status === 'urgent'
                  }"
                >
                  <span class="font-bold text-lg">{{ room.id }}</span>
                  <span class="text-xs opacity-80 truncate w-full text-center">{{ room.resident.split(' ')[1] }}</span>
                </div>
              </div>
            </div>

            <p class="text-gray-500 text-sm mt-4 text-center">
              Direct visueel overzicht van alle kamers. Klik voor details.
            </p>
          </div>

          <!-- List View -->
          <div class="bg-slate-50 rounded-3xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <List class="w-6 h-6 text-primary" />
              <h3 class="font-bold text-gray-900 text-xl">Lijst View — Urgentie</h3>
            </div>

            <div class="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
              <div
                v-for="resident in residentsList"
                :key="resident.room"
                class="p-4 flex items-center gap-4"
              >
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  :class="{
                    'bg-red-100': resident.status === 'urgent',
                    'bg-amber-100': resident.status === 'attention'
                  }"
                >
                  <AlertCircle
                    v-if="resident.status === 'urgent'"
                    class="w-6 h-6 text-red-600"
                  />
                  <AlertTriangle
                    v-else
                    class="w-6 h-6 text-amber-600"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-gray-900">{{ resident.name }}</span>
                    <span class="text-gray-400 text-sm">Kamer {{ resident.room }}</span>
                  </div>
                  <p class="text-gray-600 text-sm">{{ resident.reason }}</p>
                </div>
                <span class="text-gray-400 text-sm">{{ resident.time }}</span>
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
    <section class="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
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
            class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <component :is="benefit.icon" class="w-7 h-7 text-primary" />
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600 text-sm">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- For Who Section -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
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
            class="text-center p-6"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <component :is="audience.icon" class="w-8 h-8 text-primary" />
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
    <section class="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Hoe het werkt
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Van installatie tot inzicht
          </h2>
        </div>

        <div class="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div
            v-for="item in howItWorks"
            :key="item.step"
            class="relative text-center"
          >
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              {{ item.step }}
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-28 bg-primary text-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Klaar om slimmer te werken?
          </h2>
          <p class="text-xl text-white/80 mb-8">
            Plan een gratis demo op locatie. We laten zien hoe GerustThuis werkt in uw situatie.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/zakelijk/demo">
              <Button variant="secondary" size="lg">
                Plan een demo
                <ArrowRight class="w-5 h-5 ml-2" />
              </Button>
            </RouterLink>
            <RouterLink to="/contact">
              <Button variant="outline" size="lg" class="border-white/30 text-white hover:bg-white/10">
                Neem contact op
              </Button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
