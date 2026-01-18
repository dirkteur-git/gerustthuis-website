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
          <span class="text-gray-900">Algemene voorwaarden</span>
        </nav>
      </div>
    </div>

    <div class="py-12 md:py-16">
      <div class="container max-w-3xl">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Algemene voorwaarden</h1>

        <div class="prose prose-lg max-w-none text-gray-600">
          <p><strong>Laatst bijgewerkt:</strong> 1 januari 2026</p>

          <h2>Artikel 1 - Definities</h2>
          <p>In deze voorwaarden wordt verstaan onder:</p>
          <ul>
            <li><strong>GerustThuis:</strong> GerustThuis B.V., gevestigd te Amsterdam</li>
            <li><strong>Klant:</strong> De natuurlijke of rechtspersoon die een overeenkomst aangaat met GerustThuis</li>
            <li><strong>Dienst:</strong> De monitoring service die GerustThuis levert</li>
            <li><strong>Hardware:</strong> De sensoren en hub die onderdeel zijn van de service</li>
          </ul>

          <h2>Artikel 2 - Toepasselijkheid</h2>
          <p>
            Deze voorwaarden zijn van toepassing op alle aanbiedingen en overeenkomsten tussen GerustThuis en de Klant.
          </p>

          <h2>Artikel 3 - Overeenkomst</h2>
          <p>
            De overeenkomst komt tot stand door acceptatie van het aanbod door de Klant. Bij online bestellingen is dit het moment van betaling.
          </p>

          <h2>Artikel 4 - Prijzen en betaling</h2>
          <p>
            Alle prijzen zijn inclusief BTW tenzij anders vermeld. Het maandelijkse abonnement wordt vooraf gefactureerd via automatische incasso.
          </p>

          <h2>Artikel 5 - Levering en installatie</h2>
          <p>
            Hardware wordt binnen 3-5 werkdagen geleverd. De Klant is verantwoordelijk voor correcte installatie tenzij installatie aan huis is afgenomen.
          </p>

          <h2>Artikel 6 - Garantie</h2>
          <p>
            Op hardware geldt 2 jaar fabrieksgarantie. Daarnaast bieden wij 30 dagen niet-goed-geld-terug garantie op de complete service.
          </p>

          <h2>Artikel 7 - Opzegging</h2>
          <p>
            Het abonnement kan maandelijks worden opgezegd. Na opzegging blijft de hardware eigendom van de Klant maar stopt de monitoring service.
          </p>

          <h2>Artikel 8 - Aansprakelijkheid</h2>
          <p>
            GerustThuis is niet aansprakelijk voor schade als gevolg van het niet of niet tijdig ontvangen van alerts. De service is een hulpmiddel en geen vervanging voor professionele zorg.
          </p>

          <h2>Artikel 9 - Privacy</h2>
          <p>
            De verwerking van persoonsgegevens geschiedt conform ons Privacybeleid en de AVG.
          </p>

          <h2>Artikel 10 - Toepasselijk recht</h2>
          <p>
            Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter te Amsterdam.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

