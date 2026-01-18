<script setup>
import { ChevronRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <div class="bg-gray-50 py-4">
      <div class="container">
        <nav class="flex items-center gap-2 text-sm text-gray-500">
          <RouterLink to="/" class="hover:text-primary">Home</RouterLink>
          <ChevronRight class="w-4 h-4" />
          <span class="text-gray-900">Privacybeleid</span>
        </nav>
      </div>
    </div>

    <div class="py-12 md:py-16">
      <div class="container max-w-3xl">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacybeleid</h1>

        <div class="prose prose-lg max-w-none text-gray-600">
          <p class="lead">
            Bij GerustThuis nemen we je privacy zeer serieus. Dit privacybeleid beschrijft hoe we je persoonsgegevens verzamelen, gebruiken en beschermen.
          </p>

          <p><strong>Laatst bijgewerkt:</strong> 1 januari 2026</p>

          <h2>1. Ons privacy principe: data blijft lokaal</h2>
          <p>
            <strong>Alle sensorgegevens blijven in de woning.</strong> Dit is het kernprincipe van GerustThuis.
            Sensordata (bewegingsdetectie, deurcontacten, etc.) verlaat de woning nooit en wordt niet
            naar onze servers gestuurd. De data wordt alleen lokaal op de hub verwerkt.
          </p>

          <h2>2. Welke gegevens verzamelen we wel?</h2>
          <p>We verzamelen alleen:</p>
          <ul>
            <li><strong>Accountgegevens:</strong> Naam, e-mailadres, telefoonnummer (voor meldingen)</li>
            <li><strong>Systeemstatus:</strong> Of de hub online is en of sensoren werken (geen sensordata)</li>
            <li><strong>Meldingen:</strong> Wanneer er een afwijking is gedetecteerd (zonder details over de sensordata)</li>
            <li><strong>Betalingsgegevens:</strong> Via onze betalingsprovider (wij slaan geen betaalkaartgegevens op)</li>
          </ul>

          <h2>3. Wat zien mantelzorgers?</h2>
          <p>
            Mantelzorgers kunnen bewust <strong>geen sensordata zien</strong>. Ze zien alleen:
          </p>
          <ul>
            <li>"Alles is in orde" - het systeem werkt en er zijn geen afwijkingen</li>
            <li>Meldingen bij afwijkingen (zonder details over bewegingspatronen)</li>
            <li>Of de hub en sensoren actief zijn</li>
          </ul>
          <p>
            De privacy van de oudere staat voorop. Er worden geen bewegingspatronen, tijden van activiteit,
            of andere details gedeeld met familieleden of met ons.
          </p>

          <h2>4. Delen we gegevens?</h2>
          <p>
            <strong>Sensordata wordt nooit gedeeld</strong> - die verlaat de woning niet.
            Accountgegevens delen we alleen met:
          </p>
          <ul>
            <li>Familieleden die je zelf als contactpersoon hebt aangewezen (alleen voor meldingen)</li>
            <li>Dienstverleners voor notificaties (push, SMS), onder strenge contracten</li>
            <li>Autoriteiten als we daartoe wettelijk verplicht zijn</li>
          </ul>

          <h2>5. Geen camera's, geen opnames</h2>
          <p>
            We maken principieel geen gebruik van camera's of audio-opnames. Onze sensoren detecteren alleen beweging en deur-activiteit, niet wát er gebeurt of gezegd wordt.
          </p>

          <h2>6. Beveiliging</h2>
          <p>
            Sensordata blijft lokaal op de hub en is beveiligd met encryptie. Accountgegevens en meldingen worden versleuteld verzonden. Authenticatie is beveiligd via industrie-standaarden.
          </p>

          <h2>7. Je rechten</h2>
          <p>Je hebt recht op:</p>
          <ul>
            <li>Inzage in je accountgegevens</li>
            <li>Correctie van onjuiste gegevens</li>
            <li>Verwijdering van je account en meldingsgeschiedenis</li>
            <li>Export van je accountgegevens</li>
            <li>Bezwaar tegen verwerking</li>
          </ul>
          <p>
            <em>Let op: sensordata staat alleen lokaal op de hub in de woning. Deze data kunnen wij niet inzien of exporteren.</em>
          </p>

          <h2>8. Bewaartermijnen</h2>
          <p>
            <strong>Sensordata:</strong> Wordt alleen lokaal op de hub bewaard (rolling window van ca. 14 dagen). Wij bewaren geen sensordata.<br/>
            <strong>Meldingsgeschiedenis:</strong> Maximaal 1 jaar.<br/>
            <strong>Accountgegevens:</strong> Worden verwijderd 1 jaar na beëindiging van je abonnement.
          </p>

          <h2>9. Contact</h2>
          <p>
            Voor vragen over privacy kun je contact opnemen met onze Functionaris Gegevensbescherming via
            <a href="mailto:privacy@gerustthuis.nl">privacy@gerustthuis.nl</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

