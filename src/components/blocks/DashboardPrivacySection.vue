<script setup>
import { LayoutDashboard, EyeOff, CheckCircle, XCircle, Shield } from 'lucide-vue-next'

const features = [
  { icon: XCircle, text: 'Geen sensordata', negative: true },
  { icon: XCircle, text: 'Geen live meekijken', negative: true },
  { icon: CheckCircle, text: 'Alleen: alles normaal of afwijking', negative: false }
]
</script>

<template>
  <section class="py-20 md:py-28 bg-gradient-to-br from-white via-white to-primary/5 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-[200px]" />

    <div class="container relative">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Content -->
          <div>
            <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Dashboard & Privacy
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Wel overzicht, geen controle
            </h2>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Er is een dashboard, bewust eenvoudig:
            </p>

            <ul class="space-y-4 mb-8">
              <li
                v-for="feature in features"
                :key="feature.text"
                class="flex items-center gap-4 p-4 rounded-xl transition-colors"
                :class="feature.negative ? 'bg-gray-50' : 'bg-green-50'"
              >
                <div
                  class="w-10 h-10 rounded-full flex items-center justify-center"
                  :class="feature.negative ? 'bg-gray-200' : 'bg-green-100'"
                >
                  <component
                    :is="feature.icon"
                    class="w-5 h-5"
                    :class="feature.negative ? 'text-gray-400' : 'text-green-600'"
                  />
                </div>
                <span
                  class="text-lg"
                  :class="feature.negative ? 'text-gray-500 line-through' : 'text-gray-900 font-semibold'"
                >
                  {{ feature.text }}
                </span>
              </li>
            </ul>

            <div class="flex items-start gap-4 bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <EyeOff class="w-6 h-6 text-primary" />
              </div>
              <p class="text-gray-700 text-lg">
                Zo blijft privacy intact en voelt niemand zich bekeken.
              </p>
            </div>
          </div>

          <!-- Visual - Dashboard mockup -->
          <div class="relative">
            <div class="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div class="flex items-center justify-between mb-8">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <LayoutDashboard class="w-5 h-5 text-primary" />
                  </div>
                  <span class="font-bold text-gray-900 text-lg">Dashboard</span>
                </div>
                <div class="flex items-center gap-2">
                  <Shield class="w-4 h-4 text-green-500" />
                  <span class="text-sm text-green-600 font-medium">Beveiligd</span>
                </div>
              </div>

              <!-- Dashboard cards -->
              <div class="space-y-4">
                <div class="bg-gradient-to-r from-green-50 to-green-100/50 rounded-2xl p-5 border border-green-100">
                  <div class="flex items-center justify-between">
                    <span class="text-gray-700 font-medium">Status</span>
                    <span class="inline-flex items-center gap-2 text-green-600 font-bold">
                      <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Alles normaal
                    </span>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600">Laatste update</span>
                    <span class="text-gray-900 font-semibold">Vandaag, 09:32</span>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-2xl p-5 border border-gray-100 opacity-40">
                  <div class="flex items-center justify-between">
                    <span class="text-gray-400">Sensordata</span>
                    <span class="text-gray-400 text-sm italic">Niet beschikbaar</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating privacy badge -->
            <div class="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm">Privacy-proof</p>
                  <p class="text-gray-500 text-xs">Geen tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
