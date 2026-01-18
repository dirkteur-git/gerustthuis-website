<script setup>
import { ref } from 'vue'
import Section from '@/components/layout/Section.vue'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Textarea from '@/components/ui/Textarea.vue'
import Select from '@/components/ui/Select.vue'
import { Building2, Users, Phone, Mail, CheckCircle2 } from 'lucide-vue-next'

const form = ref({
  organizationName: '',
  contactPerson: '',
  email: '',
  phone: '',
  numberOfRooms: '',
  currentSolution: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const error = ref('')

const roomOptions = [
  { value: '1-25', label: '1-25 kamers' },
  { value: '26-50', label: '26-50 kamers' },
  { value: '51-100', label: '51-100 kamers' },
  { value: '100+', label: 'Meer dan 100 kamers' }
]

async function handleSubmit() {
  isSubmitting.value = true
  error.value = ''

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    isSubmitted.value = true
  } catch (e) {
    error.value = 'Er is iets misgegaan. Probeer het later opnieuw.'
  } finally {
    isSubmitting.value = false
  }
}

const benefits = [
  'Persoonlijke demonstratie op locatie of online',
  'Vrijblijvend advies over sensorconfiguratie',
  'Antwoord op al uw vragen',
  'Offerte op maat binnen 3 werkdagen'
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
      <div class="container">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Demo <span class="text-primary">aanvragen</span>
          </h1>
          <p class="text-xl text-gray-600">
            Ontdek hoe Sensor.Care uw zorginstelling kan helpen met kamer monitoring en valdetectie.
            Vul het formulier in en we nemen binnen 1 werkdag contact met u op.
          </p>
        </div>
      </div>
    </section>

    <!-- Form Section -->
    <Section>
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Form -->
        <div>
          <Card class="p-8">
            <div v-if="isSubmitted" class="text-center py-8">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 class="w-8 h-8 text-green-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Bedankt voor uw aanvraag!</h3>
              <p class="text-gray-600">We nemen binnen 1 werkdag contact met u op om een afspraak te maken.</p>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-6">
              <Input
                v-model="form.organizationName"
                label="Organisatienaam"
                placeholder="Naam van uw zorginstelling"
                required
              />

              <Input
                v-model="form.contactPerson"
                label="Contactpersoon"
                placeholder="Uw naam"
                required
              />

              <div class="grid md:grid-cols-2 gap-4">
                <Input
                  v-model="form.email"
                  type="email"
                  label="E-mailadres"
                  placeholder="uw@email.nl"
                  required
                />

                <Input
                  v-model="form.phone"
                  type="tel"
                  label="Telefoonnummer"
                  placeholder="+31 6 12345678"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Aantal kamers <span class="text-red-500">*</span>
                </label>
                <select
                  v-model="form.numberOfRooms"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  required
                >
                  <option value="" disabled>Selecteer aantal kamers</option>
                  <option v-for="option in roomOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <Input
                v-model="form.currentSolution"
                label="Huidige monitoringoplossing"
                placeholder="Bijv. geen, domotica, andere leverancier"
              />

              <Textarea
                v-model="form.message"
                label="Uw vraag of opmerking"
                placeholder="Vertel ons meer over uw situatie of specifieke wensen..."
                rows="4"
              />

              <div v-if="error" class="p-4 bg-red-50 text-red-700 rounded-lg">
                {{ error }}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                :loading="isSubmitting"
                full-width
              >
                Demo aanvragen
              </Button>

              <p class="text-sm text-gray-500 text-center">
                Door dit formulier in te vullen gaat u akkoord met ons
                <RouterLink to="/privacy" class="text-primary hover:underline">privacybeleid</RouterLink>.
              </p>
            </form>
          </Card>
        </div>

        <!-- Benefits -->
        <div class="lg:sticky lg:top-8 h-fit">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Wat u kunt verwachten</h2>

          <ul class="space-y-4 mb-8">
            <li v-for="benefit in benefits" :key="benefit" class="flex items-start gap-3">
              <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 class="w-4 h-4 text-primary" />
              </div>
              <span class="text-gray-700">{{ benefit }}</span>
            </li>
          </ul>

          <Card class="p-6 bg-gray-50 border-0">
            <h3 class="font-semibold text-gray-900 mb-4">Liever direct contact?</h3>
            <div class="space-y-3">
              <a href="tel:+31851234567" class="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                <Phone class="w-5 h-5" />
                +31 (0)85 123 4567
              </a>
              <a href="mailto:info@sensor.care" class="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                <Mail class="w-5 h-5" />
                info@sensor.care
              </a>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  </div>
</template>
