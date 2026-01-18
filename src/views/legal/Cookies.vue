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
          <span class="text-gray-900">Cookiebeleid</span>
        </nav>
      </div>
    </div>

    <div class="py-12 md:py-16">
      <div class="container max-w-3xl">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Cookiebeleid</h1>

        <div class="prose prose-lg max-w-none text-gray-600">
          <p class="lead">
            We gebruiken cookies om onze website te laten functioneren en je ervaring te verbeteren.
          </p>

          <h2>Wat zijn cookies?</h2>
          <p>
            Cookies zijn kleine tekstbestanden die op je computer worden opgeslagen wanneer je onze website bezoekt.
          </p>

          <h2>Welke cookies gebruiken we?</h2>

          <h3>Noodzakelijke cookies</h3>
          <p>
            Deze cookies zijn essentieel voor het functioneren van de website, zoals het onthouden van je inlogstatus en winkelwagen.
          </p>

          <h3>Analytische cookies</h3>
          <p>
            We gebruiken analytische cookies om te begrijpen hoe bezoekers onze website gebruiken. Dit helpt ons de website te verbeteren.
          </p>

          <h3>Functionele cookies</h3>
          <p>
            Deze cookies onthouden je voorkeuren, zoals taalinstellingen.
          </p>

          <h2>Cookies beheren</h2>
          <p>
            Je kunt cookies beheren via je browserinstellingen. Let op dat het uitschakelen van bepaalde cookies de functionaliteit van de website kan beïnvloeden.
          </p>

          <h2>Contact</h2>
          <p>
            Voor vragen over ons cookiebeleid kun je contact opnemen via
            <a href="mailto:privacy@gerustthuis.nl">privacy@gerustthuis.nl</a>.
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
.prose .lead { @apply text-xl mb-6; }
</style>
