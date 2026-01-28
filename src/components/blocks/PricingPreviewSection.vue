<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { Check, ArrowRight } from 'lucide-vue-next'

const includes = [
  'Hub + 4 sensoren',
  'Meldingen via app, sms of WhatsApp',
  'Installatie zelf of door ons',
  'Support wanneer je het nodig hebt'
]
</script>

<template>
  <section class="py-20 md:py-28 bg-white">
    <div class="container">
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Text -->
          <div>
            <span class="inline-block px-4 py-2 bg-secondary/20 text-secondary-700 font-semibold rounded-full text-sm mb-4">
              Wat kost het?
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vanaf €10 per maand
            </h2>
            <p class="text-xl text-gray-600 mb-6">
              Eenmalig de hardware aanschaffen, daarna een klein maandelijks bedrag voor monitoring en support. Geen verborgen kosten.
            </p>
            <p class="text-gray-500 mb-8">
              Exacte prijzen delen we met mensen op de wachtlijst — inclusief vroegboekkorting.
            </p>
            <RouterLink to="/particulier/wachtlijst">
              <Button variant="outline">
                Bekijk prijzen na aanmelding
                <ArrowRight class="w-4 h-4 ml-2" />
              </Button>
            </RouterLink>
          </div>

          <!-- Price card -->
          <div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/10">
            <div class="text-center mb-6">
              <p class="text-gray-500 text-sm mb-2">Vanaf</p>
              <div class="flex items-baseline justify-center gap-1">
                <span class="text-5xl font-bold text-primary">€10</span>
                <span class="text-gray-500">/maand</span>
              </div>
              <p class="text-gray-500 text-sm mt-2">+ eenmalige aanschaf hardware</p>
            </div>

            <div class="border-t border-gray-200 pt-6">
              <p class="font-semibold text-gray-900 mb-4">Dit zit erbij inbegrepen:</p>
              <ul class="space-y-3">
                <li
                  v-for="item in includes"
                  :key="item"
                  class="flex items-start gap-3"
                >
                  <Check class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
