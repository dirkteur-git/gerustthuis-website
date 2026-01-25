<script setup>
import { Clock, ShowerHead, AlertTriangle, BarChart3, ArrowRight } from 'lucide-vue-next'

const examples = [
  {
    icon: Clock,
    normal: 'De koelkast wordt normaal tussen 08:00 en 09:30 voor het eerst geopend',
    deviation: 'Eerste opening pas om 16:11',
    result: 'Afwijking',
    color: 'amber'
  },
  {
    icon: ShowerHead,
    normal: 'Dagelijks ochtendbezoek aan de badkamer',
    deviation: 'Blijft dit uit',
    result: 'Melding mogelijk',
    color: 'blue'
  },
  {
    icon: AlertTriangle,
    normal: 'Val in badkamer of woonkamer',
    deviation: null,
    result: 'Direct alarm, zonder wachttijd',
    color: 'red'
  }
]
</script>

<template>
  <section class="py-20 md:py-28 bg-gradient-to-b from-gray-100 to-gray-50">
    <div class="container">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
          Slimme patroonherkenning
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Sensoren die het dagritme leren
        </h2>
        <p class="text-xl text-gray-600 mb-4">
          De sensoren registreren beweging en activiteit. Het slimme systeem leert wat normaal is voor dit huishouden — en meldt alleen wanneer het patroon afwijkt.
        </p>
        <p class="text-gray-500">
          Geen constante updates, geen tracking. Alleen een melding wanneer het ertoe doet.
        </p>
      </div>

      <div class="max-w-4xl mx-auto space-y-6 mb-16">
        <div
          v-for="(example, index) in examples"
          :key="index"
          class="group bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div class="flex flex-col md:flex-row md:items-center gap-6">
            <!-- Icon -->
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              :class="{
                'bg-amber-100': example.color === 'amber',
                'bg-blue-100': example.color === 'blue',
                'bg-red-100': example.color === 'red'
              }"
            >
              <component
                :is="example.icon"
                class="w-8 h-8"
                :class="{
                  'text-amber-600': example.color === 'amber',
                  'text-blue-600': example.color === 'blue',
                  'text-red-600': example.color === 'red'
                }"
              />
            </div>

            <!-- Content -->
            <div class="flex-1 space-y-3">
              <p class="text-gray-700 text-lg">{{ example.normal }}</p>

              <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div v-if="example.deviation" class="flex items-center gap-2 text-gray-500">
                  <ArrowRight class="w-4 h-4" />
                  <span>{{ example.deviation }}</span>
                </div>

                <div class="flex items-center gap-2">
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

      <!-- Bottom insight -->
      <div class="max-w-2xl mx-auto">
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <BarChart3 class="w-6 h-6 text-primary" />
          </div>
          <p class="text-gray-700 text-lg">
            Het systeem kijkt niet naar losse acties, maar naar het <strong class="text-gray-900">totaalbeeld van de dag</strong>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
