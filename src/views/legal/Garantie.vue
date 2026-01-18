<script setup>
import { ChevronRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <div class="bg-gray-50 py-4">
      <div class="container">
        <nav class="flex items-center gap-2 text-sm text-gray-500">
          <RouterLink to="/" class="hover:text-primary">Home</RouterLink>
          <ChevronRight class="w-4 h-4" />
          <span class="text-gray-900">Garantie</span>
        </nav>
      </div>
    </div>

    <div class="py-12 md:py-16">
      <div class="container max-w-3xl">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Garantievoorwaarden</h1>

        <div class="prose prose-lg max-w-none text-gray-600">
          <h2>30 dagen niet-goed-geld-terug</h2>
          <p>
            Ben je niet tevreden met GerustThuis? Binnen 30 dagen na aankoop kun je de complete set retourneren en krijg je je geld terug. Geen vragen gesteld.
          </p>

          <h2>2 jaar fabrieksgarantie</h2>
          <p>
            Alle hardware van GerustThuis heeft 2 jaar fabrieksgarantie. Bij een defect vervangen we het product gratis.
          </p>

          <h3>Wat valt onder garantie?</h3>
          <ul>
            <li>Fabrieksfouten en materiaalfouten</li>
            <li>Defecte sensoren</li>
            <li>Problemen met de hub</li>
            <li>Softwareproblemen die normaal gebruik verhinderen</li>
          </ul>

          <h3>Wat valt niet onder garantie?</h3>
          <ul>
            <li>Schade door onjuist gebruik</li>
            <li>Waterschade (behalve bij waterdichte producten)</li>
            <li>Normale slijtage</li>
            <li>Lege batterijen</li>
          </ul>

          <h2>Hoe claim ik garantie?</h2>
          <ol>
            <li>Neem contact op met onze klantenservice</li>
            <li>Beschrijf het probleem</li>
            <li>Wij sturen indien nodig een vervanging</li>
            <li>Stuur het defecte product retour in de meegeleverde verpakking</li>
          </ol>

          <h2>Contact</h2>
          <p>
            Voor garantiekwesties: <a href="mailto:support@gerustthuis.nl">support@gerustthuis.nl</a> of bel 088-123 4567.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose h2 { @apply text-2xl font-bold text-gray-900 mt-8 mb-4; }
.prose h3 { @apply text-xl font-semibold text-gray-900 mt-6 mb-2; }
.prose p { @apply mb-4; }
.prose ul, .prose ol { @apply mb-4 pl-6; }
.prose ul { @apply list-disc; }
.prose ol { @apply list-decimal; }
.prose li { @apply mb-2; }
</style>
