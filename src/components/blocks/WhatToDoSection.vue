<script setup>
import { Phone, Users, Car, MessageCircle } from 'lucide-vue-next'

const options = [
  {
    icon: Phone,
    title: 'Je belt even',
    description: 'Gewoon even checken of alles goed is. Meestal is er niets aan de hand.'
  },
  {
    icon: Users,
    title: 'Je vraagt iemand langs te gaan',
    description: 'Een buurvrouw, een vriendin, of iemand anders die in de buurt woont.'
  },
  {
    icon: Car,
    title: 'Je rijdt er zelf heen',
    description: 'Als je je zorgen maakt, ga je kijken. Nu weet je tenminste dat het nodig is.'
  }
]
</script>

<template>
  <section class="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
    <div class="container">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            En dan?
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Wat doe je bij een melding?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Precies wat je nu ook zou doen — maar dan wéét je dat er iets is, in plaats van dat je je afvraagt of er iets is.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div
            v-for="option in options"
            :key="option.title"
            class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <component :is="option.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ option.title }}</h3>
            <p class="text-gray-600 text-sm">{{ option.description }}</p>
          </div>
        </div>

        <!-- Key insight -->
        <div class="bg-primary/5 rounded-2xl p-6 md:p-8 text-center border border-primary/10">
          <MessageCircle class="w-8 h-8 text-primary mx-auto mb-4" />
          <p class="text-lg text-gray-700">
            <strong class="text-gray-900">Het verschil?</strong> Nu loop je niet meer de hele dag met die knoop in je maag. Je krijgt een melding als er iets is — en anders niet.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
