<script setup>
import { Watch, XCircle, Home, CheckCircle, Zap } from 'lucide-vue-next'

const wearableProblems = [
  'Ze worden vergeten',
  'Ze liggen op het nachtkastje',
  'Bij een val is indrukken niet altijd mogelijk'
]
</script>

<template>
  <section class="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
    <div class="container relative">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Waarom geen wearables?
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Waarom dit anders is dan een alarmknop
          </h2>
        </div>

        <!-- Comparison -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Wearables problems -->
          <div class="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-200 overflow-hidden">
            <!-- Red corner accent -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-transparent rounded-bl-[100px]" />

            <div class="relative">
              <div class="flex items-center gap-4 mb-8">
                <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Watch class="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Wearables</h3>
                  <p class="text-gray-500">Werken alleen als ze gedragen worden</p>
                </div>
              </div>

              <ul class="space-y-4">
                <li
                  v-for="problem in wearableProblems"
                  :key="problem"
                  class="flex items-center gap-4 p-4 bg-red-50 rounded-xl"
                >
                  <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <XCircle class="w-5 h-5 text-red-500" />
                  </div>
                  <span class="text-gray-700">{{ problem }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- GerustThuis solution -->
          <div class="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border-2 border-primary/30 overflow-hidden">
            <!-- Green corner accent -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-transparent rounded-bl-[100px]" />

            <div class="relative">
              <div class="flex items-center gap-4 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                  <Home class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">GerustThuis</h3>
                  <p class="text-primary font-medium">Werkt in de woning, niet op het lichaam</p>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-6 shadow-sm">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle class="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p class="text-gray-900 font-semibold text-lg mb-2">
                      Altijd actief
                    </p>
                    <p class="text-gray-600">
                      Het systeem is er — ook als iemand er zelf niet aan denkt.
                    </p>
                  </div>
                </div>

                <div class="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
                  <Zap class="w-5 h-5 text-primary" />
                  <span class="text-gray-700 font-medium">Geen actie nodig van de bewoner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
