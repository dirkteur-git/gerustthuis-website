<script setup>
import TestimonialCard from './TestimonialCard.vue'

const testimonials = [
  {
    quote: 'Eindelijk kan ik slapen zonder me zorgen te maken over mam.',
    name: 'Marieke Jansen',
    relation: 'Dochter van mevrouw Jansen, 82'
  },
  {
    quote: 'Gewoon zien dat alles OK is, zonder details. Precies wat ik nodig heb.',
    name: 'Peter de Groot',
    relation: 'Zoon van meneer de Groot, 78'
  },
  {
    quote: 'Mijn vader vond het eerst niks, nu is hij er trots op. Hij voelt zich veiliger.',
    name: 'Sandra Visser',
    relation: 'Dochter van meneer Visser, 85'
  }
]
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Wat families zeggen
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Echte verhalen van echte mantelzorgers
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <TestimonialCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :quote="testimonial.quote"
          :name="testimonial.name"
          :relation="testimonial.relation"
        />
      </div>
    </div>
  </section>
</template>
