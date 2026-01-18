<script setup>
import { ref } from 'vue'
import Card from '@/components/ui/Card.vue'
import Input from '@/components/ui/Input.vue'
import Textarea from '@/components/ui/Textarea.vue'
import Select from '@/components/ui/Select.vue'
import Button from '@/components/ui/Button.vue'
import { RouterLink } from 'vue-router'
import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const submitted = ref(false)

const subjectOptions = [
  { value: 'algemeen', label: 'Algemene vraag' },
  { value: 'product', label: 'Vraag over producten' },
  { value: 'technisch', label: 'Technische ondersteuning' },
  { value: 'advies', label: 'Adviesgesprek aanvragen' },
  { value: 'anders', label: 'Anders' }
]

const handleSubmit = async () => {
  loading.value = true
  // Mock submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  loading.value = false
  submitted.value = true
}
</script>

<template>
  <div class="py-16 md:py-24">
    <div class="container">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          We helpen je graag
        </h1>
        <p class="text-xl text-gray-600">
          Heb je een vraag of wil je advies? Neem contact met ons op.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Contact Form -->
        <Card class="lg:col-span-2">
          <div v-if="submitted" class="text-center py-8">
            <div class="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle class="w-8 h-8 text-success" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Bedankt voor je bericht!</h2>
            <p class="text-gray-600 mb-6">We nemen zo snel mogelijk contact met je op.</p>
            <Button variant="outline" @click="submitted = false">
              Nieuw bericht versturen
            </Button>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-4">
              <Input
                v-model="form.name"
                label="Naam"
                required
              />
              <Input
                v-model="form.email"
                label="E-mail"
                type="email"
                required
              />
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <Input
                v-model="form.phone"
                label="Telefoon (optioneel)"
                type="tel"
              />
              <Select
                v-model="form.subject"
                label="Onderwerp"
                :options="subjectOptions"
                required
              />
            </div>
            <Textarea
              v-model="form.message"
              label="Bericht"
              :rows="5"
              required
            />
            <Button
              type="submit"
              variant="primary"
              :loading="loading"
            >
              Verstuur bericht
            </Button>
          </form>
        </Card>

        <!-- Contact Info -->
        <div class="space-y-6">
          <Card>
            <h3 class="font-bold text-gray-900 mb-4">Direct contact</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <Phone class="w-5 h-5 text-primary mt-1" />
                <div>
                  <p class="font-medium text-gray-900">088-123 4567</p>
                  <p class="text-sm text-gray-500">Ma-vr 9:00 - 17:00</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Mail class="w-5 h-5 text-primary mt-1" />
                <div>
                  <p class="font-medium text-gray-900">hallo@gerustthuis.nl</p>
                  <p class="text-sm text-gray-500">Reactie binnen 24 uur</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 class="font-bold text-gray-900 mb-4">Openingstijden</h3>
            <div class="flex items-start gap-3">
              <Clock class="w-5 h-5 text-primary mt-1" />
              <div class="text-sm">
                <p class="text-gray-700">Maandag - Vrijdag: 9:00 - 17:00</p>
                <p class="text-gray-500">Weekend: Gesloten</p>
                <p class="text-gray-500 mt-2">Technische support 24/7 voor Premium klanten</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 class="font-bold text-gray-900 mb-4">FAQ</h3>
            <p class="text-gray-600 text-sm mb-4">
              Misschien staat het antwoord op je vraag al in onze veelgestelde vragen.
            </p>
            <RouterLink to="/veelgestelde-vragen">
              <Button variant="outline" size="sm" full-width>
                Bekijk FAQ
              </Button>
            </RouterLink>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
