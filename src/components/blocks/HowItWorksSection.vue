<script setup>
import { Activity, Cpu, Bell, Smartphone, MessageSquare, Phone } from 'lucide-vue-next'

const steps = [
  {
    number: '1',
    icon: Activity,
    title: 'Discrete sensoren in huis',
    description: 'Bewegingssensoren, deurcontacten en valsensoren. Geen camera\'s. Niets om te dragen.'
  },
  {
    number: '2',
    icon: Cpu,
    title: 'Slim leren',
    description: 'Het systeem leert het dagritme en herkent afwijkingen. Slim en veilig.'
  },
  {
    number: '3',
    icon: Bell,
    title: 'Meldingen op jouw manier',
    description: 'Bij afwijkingen ontvang je een melding via app, SMS, WhatsApp of automatisch telefoongesprek. Je stelt dit zelf in.'
  }
]

const notificationMethods = [
  { icon: Smartphone, name: 'App' },
  { icon: MessageSquare, name: 'SMS' },
  { icon: MessageSquare, name: 'WhatsApp' },
  { icon: Phone, name: 'Telefoon' }
]
</script>

<template>
  <section class="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

    <div class="container relative">
      <div class="text-center mb-20">
        <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
          Zo werkt het
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          In drie eenvoudige stappen
        </h2>
      </div>

      <!-- Steps with connecting line -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Connecting line (desktop) -->
        <div class="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

        <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div
            v-for="step in steps"
            :key="step.number"
            class="relative group"
          >
            <div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
              <!-- Step number with icon -->
              <div class="flex flex-col items-center mb-6">
                <div class="relative mb-4">
                  <!-- Number badge -->
                  <div class="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-lg">
                    {{ step.number }}
                  </div>
                  <!-- Icon container -->
                  <div class="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <component :is="step.icon" class="w-10 h-10 text-primary" />
                  </div>
                </div>
              </div>

              <!-- Content -->
              <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 text-center">
                {{ step.description }}
              </p>

              <!-- Notification methods for step 3 -->
              <div v-if="step.number === '3'" class="flex flex-wrap justify-center gap-2 mt-6">
                <span
                  v-for="method in notificationMethods"
                  :key="method.name"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full text-sm text-gray-600 border border-gray-100"
                >
                  <component :is="method.icon" class="w-4 h-4 text-primary" />
                  {{ method.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
