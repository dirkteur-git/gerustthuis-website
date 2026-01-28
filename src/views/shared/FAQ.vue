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
        content: 'GerustThuis is een slim thuismonitoringsysteem speciaal voor mantelzorgers. Het leert het dagelijkse ritme in huis en waarschuwt alleen als er iets afwijkt — bijvoorbeeld bij een val of onverwachte stilte. Geen camera\'s, geen tracking, alleen geruststelling.'
      },
      {
        title: 'Voor wie is GerustThuis bedoeld?',
        content: 'GerustThuis is voor mantelzorgers: kinderen die zorgen voor hun ouders op afstand, of partners die niet meer met een gerust gevoel de deur uit durven. Het is voor iedereen die wil weten dat het goed gaat — zonder constant te moeten bellen.'
      },
      {
        title: 'Werkt het in elke woning?',
        content: 'Ja, GerustThuis werkt in elk type woning: van appartement tot vrijstaand huis. Je hebt alleen een wifi-verbinding nodig. De sensoren werken op batterijen en kunnen overal geplaatst worden.'
      },
      {
        title: 'Is mijn ouder niet te oud voor technologie?',
        content: 'GerustThuis vraagt niets van je ouder. Geen knoppen, geen apps, geen interactie. De sensoren werken volledig automatisch op de achtergrond. Je ouder merkt er niets van en hoeft niets te doen.'
      },
      {
        title: 'Wat maakt GerustThuis anders dan een alarm of camera?',
        content: 'Een alarm moet je activeren, een camera filmt alles. GerustThuis werkt automatisch én respecteert privacy. Het systeem leert het ritme en meldt alleen afwijkingen — geen constante surveillance, geen knoppen om te vergeten.'
      },
      {
        title: 'Moet mijn ouder ermee instemmen?',
        content: 'Ja, en dat is belangrijk. GerustThuis is geen heimelijk systeem. We raden aan om samen met je ouder te bespreken wat het doet en waarom. De meeste ouderen vinden het prettig: ze behouden hun vrijheid en jij hebt rust.'
      }
    ]
  },
  {
    id: 'installatie',
    title: 'Installatie',
    items: [
      {
        title: 'Kan ik het zelf installeren?',
        content: 'Ja, absoluut! De installatie is heel eenvoudig en doe je zelf in 15-30 minuten. De hub sluit je aan op wifi en stroom (net als een router). De sensoren werken draadloos op batterijen — je plakt ze gewoon op met de meegeleverde stickers. Geen technische kennis nodig.'
      },
      {
        title: 'Kunnen jullie het ook voor mij installeren?',
        content: 'Ja, dat kan! We bieden ook een installatieservice aan. Dan komen we bij je ouder langs, installeren alles, en leggen uit hoe het werkt. Handig als je zelf niet in de buurt woont of liever zekerheid hebt dat alles goed staat.'
      },
      {
        title: 'Wat krijg ik precies geleverd?',
        content: 'Je ontvangt één hub (het centrale apparaat dat op wifi en stroom wordt aangesloten) en een aantal draadloze sensoren. De hub heeft alleen een stopcontact en wifi nodig. De sensoren werken volledig op batterijen — geen kabels, geen boren, geen gedoe.'
      },
      {
        title: 'Hoe lang gaan de batterijen mee?',
        content: 'De sensoren werken op batterijen die ongeveer 2 jaar meegaan. Je krijgt automatisch een melding wanneer een batterij bijna leeg is, zodat je ruim de tijd hebt om te vervangen. Batterijen vervangen is simpel en doe je zelf.'
      },
      {
        title: 'Heb ik speciale technische kennis nodig?',
        content: 'Nee, helemaal niet. Als je een wifi-wachtwoord kunt invoeren, kun je GerustThuis installeren. De app leidt je stap voor stap door het proces. En mocht je vastlopen: onze support helpt je graag verder — of we komen langs.'
      },
      {
        title: 'Waar plaats ik de sensoren het beste?',
        content: 'De sensoren plaats je in de ruimtes waar je ouder het meeste komt: woonkamer, keuken, slaapkamer, badkamer en eventueel de hal. Bij de installatie geven we tips over de optimale plekken. De sensoren zijn klein en vallen nauwelijks op.'
      },
      {
        title: 'Moet ik boren of kabels trekken?',
        content: 'Nee! De hub heeft alleen een stopcontact nodig. De sensoren plak je op met dubbelzijdige stickers — geen boren, geen schroeven, geen kabels. Je kunt ze ook makkelijk verplaatsen als dat nodig is.'
      },
      {
        title: 'Wat als mijn ouder geen wifi heeft?',
        content: 'GerustThuis heeft wifi nodig om meldingen te kunnen versturen. De meeste ouderen hebben wifi via hun internetprovider. Heb je hulp nodig bij het instellen? We denken graag mee over een oplossing.'
      }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy & Veiligheid',
    items: [
      {
        title: 'Worden er camera\'s gebruikt?',
        content: 'Nee, absoluut niet. We gebruiken alleen bewegingssensoren en deurcontacten. Je ouder wordt nooit gefilmd of opgenomen. Privacy is een kernwaarde van GerustThuis.'
      },
      {
        title: 'Kan ik als mantelzorger zien wat mijn ouder doet?',
        content: 'Nee, en dat is bewust zo. Je kunt alleen zien of alles normaal verloopt of dat er een afwijking is. Je ziet nooit waar je ouder precies is of wat die doet. We melden alleen afwijkingen, geen locaties of activiteiten.'
      },
      {
        title: 'Hoe veilig is mijn data?',
        content: 'Heel veilig. De hub verwerkt sensordata slim en verstuurt alleen meldingen bij afwijkingen. Je ontvangt nooit sensorbeelden of locatiegegevens — alleen een melding dat er iets afwijkt. Alle communicatie is versleuteld.'
      },
      {
        title: 'Wie kan de data zien?',
        content: 'Alleen jij ontvangt meldingen, en alleen bij afwijkingen. Wij als bedrijf zien geen sensordata en weten niet wat je ouder doet. Het systeem stuurt alleen een signaal als er iets ongewoons is — geen details, geen locaties.'
      },
      {
        title: 'Voelt mijn ouder zich niet bekeken?',
        content: 'Dat is juist het mooie aan GerustThuis. Door de privacy-first aanpak voelt het niet als surveillance. Je ouder behoudt volledige autonomie en privacy, terwijl jij als mantelzorger gerust bent dat je gebeld wordt als er iets mis is.'
      }
    ]
  },
  {
    id: 'werking',
    title: 'Hoe werkt het?',
    items: [
      {
        title: 'Hoe weet het systeem wat normaal is?',
        content: 'GerustThuis leert de eerste weken het normale ritme in huis: wanneer staat je ouder op, wanneer gaat het licht aan, wanneer is er activiteit in de keuken. Na deze leerperiode herkent het systeem afwijkingen en waarschuwt alleen wanneer nodig.'
      },
      {
        title: 'Wat voor meldingen krijg ik?',
        content: 'Je krijgt alleen meldingen bij afwijkingen: bijvoorbeeld als er \'s ochtends geen activiteit is terwijl dat normaal wel zo is, of als er een plotselinge val wordt gedetecteerd. Geen dagelijkse updates, alleen wanneer het ertoe doet.'
      },
      {
        title: 'Hoe ontvang ik meldingen?',
        content: 'Je kiest zelf hoe je meldingen wilt ontvangen: via de app, sms, WhatsApp of telefonisch. Je kunt ook meerdere contactpersonen opgeven die meldingen ontvangen.'
      },
      {
        title: 'Wat als internet uitvalt?',
        content: 'De hub blijft lokaal analyseren, ook zonder internet. Afwijkingen worden gewoon gedetecteerd. Zodra internet weer werkt, worden meldingen alsnog verstuurd. Bij langere uitval krijg je een notificatie.'
      },
      {
        title: 'Kan het systeem een val detecteren?',
        content: 'Ja, de sensoren kunnen plotselinge valincidenten herkennen. Dit gebeurt door patroonherkenning — niet door je ouder te volgen, maar door afwijkingen in het normale bewegingspatroon te detecteren.'
      },
      {
        title: 'Hoe lang duurt de leerperiode?',
        content: 'Het systeem leert de eerste 1-2 weken het normale dagritme. In die periode kunnen er wat valse meldingen zijn terwijl het systeem leert wat normaal is. Daarna worden de meldingen steeds nauwkeuriger.'
      },
      {
        title: 'Wat als mijn ouder op vakantie gaat?',
        content: 'Je kunt het systeem tijdelijk pauzeren via de app. Zo krijg je geen onnodige meldingen terwijl je ouder weg is. Zodra je het weer activeert, pakt het systeem het dagritme weer op.'
      },
      {
        title: 'Kunnen meerdere mensen meldingen ontvangen?',
        content: 'Ja! Je kunt meerdere contactpersonen opgeven die meldingen ontvangen. Handig als je de zorg deelt met broers, zussen of andere familieleden. Iedereen krijgt dan dezelfde meldingen.'
      }
    ]
  },
  {
    id: 'kosten',
    title: 'Kosten & Beschikbaarheid',
    items: [
      {
        title: 'Wat kost GerustThuis?',
        content: 'GerustThuis is momenteel nog in ontwikkeling. Door je aan te melden voor de wachtlijst, krijg je als eerste toegang wanneer we lanceren — vaak met een vroegboekkorting.'
      },
      {
        title: 'Zijn er maandelijkse kosten?',
        content: 'We werken aan een eerlijk prijsmodel met een eenmalige aanschaf van de hardware en een klein maandelijks bedrag voor de monitoring en support. Details volgen bij de lancering.'
      },
      {
        title: 'Wanneer is GerustThuis beschikbaar?',
        content: 'We werken hard aan de lancering. Door je aan te melden voor de wachtlijst blijf je op de hoogte en krijg je als eerste toegang.'
      },
      {
        title: 'Kan ik het eerst uitproberen?',
        content: 'We plannen een proefperiode zodat je GerustThuis zonder risico kunt uitproberen. Details hierover delen we met mensen op de wachtlijst.'
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
