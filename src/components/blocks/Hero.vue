<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { VideoOff, Shield, Wifi, ArrowRight, CheckCircle, Activity, Brain } from 'lucide-vue-next'

const trustBadges = [
  { icon: VideoOff, text: 'Geen camera\'s' },
  { icon: Brain, text: 'Slimme sensorlogica' },
  { icon: Shield, text: 'Privacy-first' }
]
</script>

<template>
  <section class="relative bg-gradient-to-br from-background via-primary/5 to-secondary/5 overflow-hidden min-h-[85vh] flex items-center">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div class="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
    </div>

    <div class="container py-16 md:py-24 lg:py-32 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div>
          <!-- Main headline -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
            Weet dat het goed gaat.
            <span class="block text-primary mt-2">Zonder te bellen.</span>
          </h1>

          <!-- Subheadline -->
          <p class="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
            Een slim apparaat met sensoren dat het dagritme leert en alleen meldt bij afwijkingen — zoals een val of onverwachte stilte.
          </p>

          <!-- Smart device callout -->
          <div class="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Activity class="w-4 h-4 text-primary" />
            <span class="text-sm text-gray-700">Slimme sensoren leren patronen, geen camera's of wearables</span>
          </div>

          <!-- Trust badges -->
          <div class="flex flex-wrap gap-4 mb-8">
            <div
              v-for="badge in trustBadges"
              :key="badge.text"
              class="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100"
            >
              <component :is="badge.icon" class="w-5 h-5 text-primary" />
              <span class="text-gray-700 font-medium">{{ badge.text }}</span>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-col sm:flex-row gap-4 mb-6">
            <RouterLink to="/particulier/wachtlijst">
              <Button variant="primary" size="lg" class="shadow-lg shadow-primary/25">
                <ArrowRight class="w-5 h-5 mr-2" />
                Meld je aan voor de wachtlijst
              </Button>
            </RouterLink>
          </div>

          <!-- Notification options -->
          <p class="text-gray-500 text-sm">
            Kies zelf hoe je meldingen ontvangt: app, sms, WhatsApp of telefoon.
          </p>
        </div>

        <!-- Visual element / Illustration -->
        <div class="hidden lg:block">
          <div class="relative">
            <!-- Main card -->
            <div class="bg-white rounded-3xl shadow-2xl p-8 transform rotate-1">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span class="font-semibold text-gray-900">Status vandaag</span>
              </div>

              <div class="space-y-4">
                <div class="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <span class="text-gray-700">Ochtendritme</span>
                  <span class="flex items-center gap-2 text-green-600 font-medium">
                    <CheckCircle class="w-5 h-5" />
                    Normaal
                  </span>
                </div>
                <div class="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <span class="text-gray-700">Activiteit</span>
                  <span class="flex items-center gap-2 text-green-600 font-medium">
                    <CheckCircle class="w-5 h-5" />
                    Normaal
                  </span>
                </div>
                <div class="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <span class="text-gray-700">Meldingen vandaag</span>
                  <span class="text-green-600 font-medium">Geen</span>
                </div>
              </div>

              <!-- Algorithm explanation -->
              <div class="mt-4 p-3 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p class="text-xs text-gray-500 text-center">
                  <Brain class="w-4 h-4 inline mr-1" />
                  Slim en veilig — alleen meldingen bij afwijkingen, geen sensorbeelden
                </p>
              </div>
            </div>

            <!-- Floating notification -->
            <div class="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 transform -rotate-3 animate-float">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p class="font-medium text-gray-900 text-sm">Alles gaat goed</p>
                  <p class="text-gray-500 text-xs">Normale dag tot nu toe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-10px) rotate(-3deg); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
</style>
