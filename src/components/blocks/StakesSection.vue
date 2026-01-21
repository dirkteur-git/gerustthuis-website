<script setup>
import { HelpCircle, AlertCircle, Power, Clock, AlertTriangle } from 'lucide-vue-next'

const stakes = [
  {
    icon: HelpCircle,
    text: 'Onzekerheid bij stilte'
  },
  {
    icon: AlertCircle,
    text: 'Stress bij gemiste contacten'
  },
  {
    icon: Power,
    text: 'Het gevoel altijd "aan" te moeten staan'
  },
  {
    icon: Clock,
    text: 'Hulp wordt pas ingeschakeld als het te laat is'
  }
]
</script>

<template>
  <section class="py-20 md:py-28 bg-white relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

    <div class="container relative">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-amber-100 text-amber-700 font-semibold rounded-full text-sm mb-4">
            Wat als je niets doet?
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Dan blijft dit bestaan
          </h2>
        </div>

        <!-- Stakes grid -->
        <div class="grid sm:grid-cols-2 gap-6">
          <div
            v-for="(stake, index) in stakes"
            :key="stake.text"
            class="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-l-amber-400 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex items-center gap-5">
              <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <component :is="stake.icon" class="w-7 h-7 text-amber-600" />
              </div>
              <p class="text-gray-800 text-lg font-medium">{{ stake.text }}</p>
            </div>
          </div>
        </div>

        <!-- Warning callout -->
        <div class="mt-12 bg-amber-50 rounded-2xl p-6 border border-amber-200 flex items-center gap-4 max-w-2xl mx-auto">
          <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <AlertTriangle class="w-6 h-6 text-amber-600" />
          </div>
          <p class="text-gray-700">
            <strong class="text-gray-900">Dit hoeft niet.</strong> Er is een betere manier om voor elkaar te zorgen.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
