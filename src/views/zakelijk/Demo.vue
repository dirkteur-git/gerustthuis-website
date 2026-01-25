<script setup>
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import {
  Building2,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  Calendar,
  MapPin,
  Clock
} from 'lucide-vue-next'

const formData = ref({
  organisatie: '',
  naam: '',
  functie: '',
  email: '',
  telefoon: '',
  locaties: '',
  kamers: '',
  bericht: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
}

const benefits = [
  { icon: Calendar, text: 'Gratis demonstratie op locatie' },
  { icon: MapPin, text: 'We komen naar u toe' },
  { icon: Clock, text: 'Binnen 2 weken ingepland' },
]
</script>

<template>
  <div class="py-20 md:py-28">
    <div class="container">
      <div class="max-w-5xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Left: Info -->
          <div>
            <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
              Demo aanvragen
            </span>

            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ontdek GerustThuis voor uw organisatie
            </h1>

            <p class="text-xl text-gray-600 mb-8">
              Plan een gratis demonstratie op locatie. We laten zien hoe het dashboard werkt en bespreken de mogelijkheden voor uw situatie.
            </p>

            <div class="space-y-4 mb-8">
              <div
                v-for="benefit in benefits"
                :key="benefit.text"
                class="flex items-center gap-3"
              >
                <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <component :is="benefit.icon" class="w-5 h-5 text-emerald-600" />
                </div>
                <span class="text-gray-700">{{ benefit.text }}</span>
              </div>
            </div>

            <div class="bg-slate-50 rounded-2xl p-6">
              <h3 class="font-bold text-gray-900 mb-3">Wat kunt u verwachten?</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start gap-2">
                  <CheckCircle class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Live demonstratie van het dashboard</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckCircle class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Toelichting op de werking van sensoren</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckCircle class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Bespreking van uw specifieke situatie</span>
                </li>
                <li class="flex items-start gap-2">
                  <CheckCircle class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Offerte op maat na de demo</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right: Form -->
          <div>
            <Card v-if="!isSubmitted" class="p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Vraag een demo aan</h2>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    <Building2 class="w-4 h-4 inline mr-2" />
                    Organisatie *
                  </label>
                  <input
                    v-model="formData.organisatie"
                    type="text"
                    required
                    placeholder="Naam van uw organisatie"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      <User class="w-4 h-4 inline mr-2" />
                      Uw naam *
                    </label>
                    <input
                      v-model="formData.naam"
                      type="text"
                      required
                      placeholder="Volledige naam"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Functie
                    </label>
                    <input
                      v-model="formData.functie"
                      type="text"
                      placeholder="Bijv. Zorgmanager"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      <Mail class="w-4 h-4 inline mr-2" />
                      E-mail *
                    </label>
                    <input
                      v-model="formData.email"
                      type="email"
                      required
                      placeholder="u@organisatie.nl"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      <Phone class="w-4 h-4 inline mr-2" />
                      Telefoon
                    </label>
                    <input
                      v-model="formData.telefoon"
                      type="tel"
                      placeholder="06-12345678"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Aantal locaties
                    </label>
                    <select
                      v-model="formData.locaties"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Selecteer...</option>
                      <option value="1">1 locatie</option>
                      <option value="2-5">2-5 locaties</option>
                      <option value="6-10">6-10 locaties</option>
                      <option value="10+">Meer dan 10</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Aantal kamers/woningen
                    </label>
                    <select
                      v-model="formData.kamers"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Selecteer...</option>
                      <option value="1-25">1-25</option>
                      <option value="26-50">26-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">Meer dan 100</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare class="w-4 h-4 inline mr-2" />
                    Bericht (optioneel)
                  </label>
                  <textarea
                    v-model="formData.bericht"
                    rows="3"
                    placeholder="Vertel ons meer over uw situatie of stel een vraag..."
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  full-width
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">Verzenden...</span>
                  <span v-else>Demo aanvragen</span>
                </Button>

                <p class="text-gray-500 text-sm text-center">
                  We nemen binnen 2 werkdagen contact met u op.
                </p>
              </form>
            </Card>

            <!-- Success state -->
            <Card v-else class="p-8 text-center">
              <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle class="w-8 h-8 text-emerald-600" />
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Aanvraag ontvangen!</h2>
              <p class="text-gray-600 mb-6">
                Bedankt voor uw interesse. We nemen binnen 2 werkdagen contact met u op om een demo in te plannen.
              </p>
              <p class="text-gray-500 text-sm">
                Heeft u vragen? Mail naar <a href="mailto:zakelijk@gerustthuis.nl" class="text-primary">zakelijk@gerustthuis.nl</a>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
