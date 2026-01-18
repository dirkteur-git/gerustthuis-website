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
          <span class="text-gray-900">Retourneren</span>
        </nav>
      </div>
    </div>

    <div class="py-12 md:py-16">
      <div class="container max-w-3xl">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Retourbeleid</h1>

        <div class="prose prose-lg max-w-none text-gray-600">
          <h2>30 dagen bedenktijd</h2>
          <p>
            Je hebt 30 dagen bedenktijd na ontvangst van je bestelling. Binnen deze periode kun je zonder opgave van reden retourneren.
          </p>

          <h2>Hoe retourneer ik?</h2>
          <ol>
            <li>Meld je retour aan via <a href="mailto:support@gerustthuis.nl">support@gerustthuis.nl</a></li>
            <li>Ontvang een retourlabel en instructies</li>
            <li>Verpak de producten zorgvuldig in de originele verpakking</li>
            <li>Breng het pakket naar een PostNL-punt</li>
            <li>Je ontvangt je geld terug binnen 14 dagen na ontvangst van de retour</li>
          </ol>

          <h2>Voorwaarden</h2>
          <ul>
            <li>Producten moeten in originele staat zijn</li>
            <li>Originele verpakking moet aanwezig zijn</li>
            <li>Alle onderdelen moeten compleet zijn</li>
            <li>Het maandelijkse abonnement wordt pro-rata gerestitueerd</li>
          </ul>

          <h2>Kosten</h2>
          <p>
            Bij retour binnen de bedenktijd zijn de retourkosten voor onze rekening. Bij retour na 30 dagen (bijv. bij defect) zijn de retourkosten ook voor ons.
          </p>

          <h2>Terugbetaling</h2>
          <p>
            We betalen terug via dezelfde betaalmethode die je hebt gebruikt, tenzij je anders aangeeft. Terugbetaling vindt plaats binnen 14 dagen na ontvangst van de retour.
          </p>

          <h2>Contact</h2>
          <p>
            Vragen over retourneren? Mail naar <a href="mailto:support@gerustthuis.nl">support@gerustthuis.nl</a> of bel 088-123 4567.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose h2 { @apply text-2xl font-bold text-gray-900 mt-8 mb-4; }
.prose p { @apply mb-4; }
.prose ul, .prose ol { @apply mb-4 pl-6; }
.prose ul { @apply list-disc; }
.prose ol { @apply list-decimal; }
.prose li { @apply mb-2; }
</style>
