<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Card from '@/components/ui/Card.vue'
import Accordion from '@/components/ui/Accordion.vue'
import Button from '@/components/ui/Button.vue'
import { Search } from 'lucide-vue-next'

const searchQuery = ref('')

const categories = [
  {
    id: 'algemeen',
    title: 'Algemeen',
    items: [
      {
        title: 'Wat is GerustThuis?',
        content: 'GerustThuis is een AI-gestuurde thuismonitor die mantelzorgers helpt om op afstand een oogje te houden op hun ouders of familieleden. Door middel van slimme sensoren (geen camera\'s!) monitoren we het dagritme en waarschuwen we bij afwijkingen.'
      },
      {
        title: 'Voor wie is GerustThuis bedoeld?',
        content: 'GerustThuis is bedoeld voor mantelzorgers die zorgen voor een ouder familielid dat zelfstandig woont. Het helpt je om rust in je hoofd te krijgen zonder constant te hoeven bellen of langsgaan.'
      },
      {
        title: 'Werkt het in elke woning?',
        content: 'Ja, GerustThuis werkt in elk type woning: van appartement tot vrijstaand huis. Je hebt alleen een wifi-verbinding en een stopcontact nodig voor de hub.'
      }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy & Veiligheid',
    items: [
      {
        title: 'Worden er camera\'s gebruikt?',
        content: 'Nee, absoluut niet. We gebruiken alleen bewegingssensoren, deurcontacten en radar-technologie. Je ouder wordt nooit gefilmd of opgenomen.'
      },
      {
        title: 'Kan ik als mantelzorger zien wat mijn ouder doet?',
        content: 'Nee, en dat is bewust zo. Je kunt alleen zien dat het systeem actief is en dat er geen afwijkingen zijn. Bij afwijkingen krijg je een melding, maar je ziet nooit de sensordata of bewegingspatronen. De privacy van je ouder staat voorop.'
      },
      {
        title: 'Waar wordt de data opgeslagen?',
        content: 'Alle sensordata blijft lokaal op de hub in de woning. Er wordt GEEN data naar de cloud gestuurd. Alleen bij een afwijking wordt een melding (zonder sensordata) naar je telefoon gestuurd.'
      },
      {
        title: 'Wie kan de data zien?',
        content: 'Niemand behalve de oudere zelf, als die lokaal via wifi in de woning het systeem bekijkt. Mantelzorgers en wij als bedrijf kunnen de sensordata niet zien - die verlaat de woning niet.'
      }
    ]
  },
  {
    id: 'producten',
    title: 'Producten & Installatie',
    items: [
      {
        title: 'Welk pakket past bij mij?',
        content: 'Het Basis pakket is geschikt voor een kleine woning met 2-3 kamers. Het Compleet pakket is onze meest gekozen optie voor een gemiddelde woning. Premium is ideaal voor grotere woningen of als je extra zekerheid wilt met installatie aan huis.'
      },
      {
        title: 'Kan ik zelf installeren?',
        content: 'Ja, alle pakketten kunnen zelf geïnstalleerd worden. Je ontvangt een duidelijke handleiding en onze support is altijd bereikbaar als je hulp nodig hebt. Gemiddeld duurt de installatie 30-45 minuten.'
      },
      {
        title: 'Hoe lang duurt de installatie door jullie?',
        content: 'Bij installatie aan huis (beschikbaar bij Premium of als add-on) komt onze specialist langs. De installatie duurt gemiddeld 1-1,5 uur, inclusief uitleg.'
      }
    ]
  },
  {
    id: 'abonnement',
    title: 'Abonnement & Prijzen',
    items: [
      {
        title: 'Kan ik maandelijks opzeggen?',
        content: 'Ja, je kunt je abonnement maandelijks opzeggen. Er is geen minimum looptijd. Na opzegging blijven de sensoren van jou, maar de monitoring en alerts stoppen.'
      },
      {
        title: 'Zijn er extra kosten?',
        content: 'Nee, de genoemde prijzen zijn compleet. De eenmalige prijs is voor de hardware, de maandelijkse prijs is voor de monitoring, alerts en support. Er zijn geen verborgen kosten.'
      },
      {
        title: 'Hoe werkt de garantie?',
        content: 'Je krijgt 30 dagen niet-goed-geld-terug garantie. Daarnaast hebben alle producten 2 jaar fabrieksgarantie. Bij problemen vervangen we de sensor gratis.'
      }
    ]
  },
  {
    id: 'technisch',
    title: 'Technisch',
    items: [
      {
        title: 'Wat als internet uitvalt?',
        content: 'De hub blijft lokaal data verzamelen en analyseren. Afwijkingen worden lokaal gedetecteerd. Zodra internet weer werkt, wordt de status gesynchroniseerd (geen sensordata, alleen status). Bij langere uitval ontvang je een melding.'
      },
      {
        title: 'Hoe lang gaan de batterijen mee?',
        content: 'De batterijen van de sensoren gaan gemiddeld 1-2 jaar mee, afhankelijk van het gebruik. Je krijgt automatisch een melding wanneer een batterij bijna leeg is.'
      },
      {
        title: 'Werkt het met mijn smart home?',
        content: 'GerustThuis werkt standalone en heeft geen andere smart home systemen nodig. Integratie met andere systemen is momenteel niet beschikbaar.'
      }
    ]
  }
]

const filteredCategories = computed(() => {
  if (!searchQuery.value) return categories

  const query = searchQuery.value.toLowerCase()
  return categories.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
    )
  })).filter(cat => cat.items.length > 0)
})
</script>

<template>
  <div class="py-16 md:py-24">
    <div class="container max-w-3xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Veelgestelde vragen
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          Vind snel antwoord op je vraag
        </p>

        <!-- Search -->
        <div class="relative max-w-md mx-auto">
          <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Zoek in FAQ..."
            class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <!-- FAQ Categories -->
      <div class="space-y-8">
        <div
          v-for="category in filteredCategories"
          :key="category.id"
        >
          <h2 class="text-xl font-bold text-gray-900 mb-4">{{ category.title }}</h2>
          <Accordion :items="category.items" />
        </div>
      </div>

      <p v-if="filteredCategories.length === 0" class="text-center py-12 text-gray-500">
        Geen vragen gevonden voor "{{ searchQuery }}".
      </p>

      <!-- Contact CTA -->
      <Card class="mt-12 text-center">
        <h2 class="text-xl font-bold text-gray-900 mb-2">
          Vraag niet gevonden?
        </h2>
        <p class="text-gray-600 mb-6">
          Neem contact met ons op. We helpen je graag.
        </p>
        <RouterLink to="/contact">
          <Button variant="primary">
            Neem contact op
          </Button>
        </RouterLink>
      </Card>
    </div>
  </div>
</template>
