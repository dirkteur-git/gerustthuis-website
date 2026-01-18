<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Card from '@/components/ui/Card.vue'
import Radio from '@/components/ui/Radio.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import { Check, Package, Trash2 } from 'lucide-vue-next'

const router = useRouter()
const cartStore = useCartStore()

const currentStep = ref(1)
const loading = ref(false)

// Form data
const form = ref({
  // Step 1: Account
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',

  // Step 2: Delivery
  seniorStreet: '',
  seniorPostcode: '',
  seniorCity: '',
  seniorNotes: '',
  sameAddress: true,
  billingStreet: '',
  billingPostcode: '',
  billingCity: '',
  installationType: 'self',
  installationDate: '',

  // Step 3: Payment
  paymentMethod: 'ideal',
  agreeTerms: false
})

const steps = [
  { number: 1, label: 'Gegevens' },
  { number: 2, label: 'Bezorging' },
  { number: 3, label: 'Betaling' },
  { number: 4, label: 'Bevestiging' }
]

const formatPrice = (price) => {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

const installationCost = computed(() => {
  return form.value.installationType === 'home' ? 99 : 0
})

const totalOneTime = computed(() => {
  return cartStore.subtotalOneTime + installationCost.value
})

const canProceed = computed(() => {
  if (currentStep.value === 1) {
    return form.value.firstName && form.value.lastName && form.value.email && form.value.phone
  }
  if (currentStep.value === 2) {
    return form.value.seniorStreet && form.value.seniorPostcode && form.value.seniorCity
  }
  if (currentStep.value === 3) {
    return form.value.paymentMethod && form.value.agreeTerms
  }
  return true
})

const nextStep = () => {
  if (currentStep.value < 4 && canProceed.value) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const placeOrder = async () => {
  loading.value = true

  try {
    // Mock order placement
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Clear cart and redirect
    cartStore.clearCart()
    router.push('/checkout/succes')
  } catch (error) {
    console.error('Order failed:', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="py-8 md:py-12">
    <div class="container max-w-5xl">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <!-- Empty cart -->
      <div v-if="cartStore.items.length === 0" class="text-center py-12">
        <Package class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 class="text-xl font-semibold text-gray-900 mb-2">Je winkelwagen is leeg</h2>
        <p class="text-gray-600 mb-6">Voeg eerst producten toe aan je winkelwagen.</p>
        <Button variant="primary" @click="router.push('/producten')">
          Bekijk producten
        </Button>
      </div>

      <div v-else class="grid lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Steps indicator -->
          <div class="flex items-center justify-between mb-8 overflow-x-auto pb-2">
            <div
              v-for="step in steps"
              :key="step.number"
              class="flex items-center"
            >
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors"
                :class="[
                  currentStep > step.number ? 'bg-success text-white' :
                  currentStep === step.number ? 'bg-primary text-white' :
                  'bg-gray-200 text-gray-500'
                ]"
              >
                <Check v-if="currentStep > step.number" class="w-4 h-4" />
                <span v-else>{{ step.number }}</span>
              </div>
              <span
                class="ml-2 text-sm font-medium hidden sm:inline"
                :class="currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'"
              >
                {{ step.label }}
              </span>
              <div
                v-if="step.number < 4"
                class="w-8 sm:w-16 h-0.5 mx-2 sm:mx-4"
                :class="currentStep > step.number ? 'bg-success' : 'bg-gray-200'"
              />
            </div>
          </div>

          <!-- Step 1: Account -->
          <Card v-show="currentStep === 1">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Jouw gegevens</h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <Input
                v-model="form.firstName"
                label="Voornaam"
                required
              />
              <Input
                v-model="form.lastName"
                label="Achternaam"
                required
              />
              <Input
                v-model="form.email"
                label="Email"
                type="email"
                required
              />
              <Input
                v-model="form.phone"
                label="Telefoon"
                type="tel"
                required
              />
              <Input
                v-model="form.password"
                label="Wachtwoord (voor je account)"
                type="password"
                class="sm:col-span-2"
              />
            </div>
          </Card>

          <!-- Step 2: Delivery -->
          <Card v-show="currentStep === 2">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Bezorgadres (waar de sensoren komen)</h2>
            <div class="grid sm:grid-cols-2 gap-4 mb-8">
              <Input
                v-model="form.seniorStreet"
                label="Straat + huisnummer"
                class="sm:col-span-2"
                required
              />
              <Input
                v-model="form.seniorPostcode"
                label="Postcode"
                required
              />
              <Input
                v-model="form.seniorCity"
                label="Plaats"
                required
              />
              <Input
                v-model="form.seniorNotes"
                label="Opmerkingen voor installatie"
                class="sm:col-span-2"
              />
            </div>

            <Checkbox v-model="form.sameAddress" class="mb-6">
              Factuuradres is hetzelfde
            </Checkbox>

            <div v-if="!form.sameAddress" class="grid sm:grid-cols-2 gap-4 mb-8">
              <h3 class="text-lg font-semibold text-gray-900 sm:col-span-2">Factuuradres</h3>
              <Input
                v-model="form.billingStreet"
                label="Straat + huisnummer"
                class="sm:col-span-2"
              />
              <Input
                v-model="form.billingPostcode"
                label="Postcode"
              />
              <Input
                v-model="form.billingCity"
                label="Plaats"
              />
            </div>

            <h3 class="text-lg font-semibold text-gray-900 mb-4">Installatie</h3>
            <div class="space-y-3">
              <Radio
                v-model="form.installationType"
                value="self"
                name="installation"
                label="Zelf installeren (gratis)"
                description="Je ontvangt een duidelijke handleiding. Duurt gemiddeld 30 minuten."
              />
              <Radio
                v-model="form.installationType"
                value="home"
                name="installation"
                label="Installatie aan huis (+€99)"
                description="Onze specialist komt langs en installeert alles voor je."
              />
            </div>

            <div v-if="form.installationType === 'home'" class="mt-4">
              <Input
                v-model="form.installationDate"
                label="Gewenste installatiedatum"
                type="date"
              />
            </div>
          </Card>

          <!-- Step 3: Payment -->
          <Card v-show="currentStep === 3">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Betaalmethode</h2>

            <div class="space-y-3 mb-8">
              <Radio
                v-model="form.paymentMethod"
                value="ideal"
                name="payment"
                label="iDEAL"
              />
              <Radio
                v-model="form.paymentMethod"
                value="creditcard"
                name="payment"
                label="Creditcard"
              />
              <Radio
                v-model="form.paymentMethod"
                value="bancontact"
                name="payment"
                label="Bancontact"
              />
              <Radio
                v-model="form.paymentMethod"
                value="klarna"
                name="payment"
                label="Achteraf betalen (Klarna)"
              />
            </div>

            <Checkbox v-model="form.agreeTerms" required>
              <span>
                Ik ga akkoord met de
                <RouterLink to="/voorwaarden" class="text-primary hover:underline">algemene voorwaarden</RouterLink>
                en het
                <RouterLink to="/privacy" class="text-primary hover:underline">privacybeleid</RouterLink>
              </span>
            </Checkbox>
          </Card>

          <!-- Step 4: Confirmation -->
          <Card v-show="currentStep === 4">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Bevestig je bestelling</h2>

            <div class="space-y-4 mb-6">
              <div class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-gray-600">Naam</span>
                <span class="font-medium">{{ form.firstName }} {{ form.lastName }}</span>
              </div>
              <div class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-gray-600">Email</span>
                <span class="font-medium">{{ form.email }}</span>
              </div>
              <div class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-gray-600">Bezorgadres</span>
                <span class="font-medium text-right">
                  {{ form.seniorStreet }}<br>
                  {{ form.seniorPostcode }} {{ form.seniorCity }}
                </span>
              </div>
              <div class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-gray-600">Installatie</span>
                <span class="font-medium">
                  {{ form.installationType === 'home' ? 'Aan huis' : 'Zelf installeren' }}
                </span>
              </div>
              <div class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-gray-600">Betaalmethode</span>
                <span class="font-medium capitalize">{{ form.paymentMethod }}</span>
              </div>
            </div>
          </Card>

          <!-- Navigation buttons -->
          <div class="flex justify-between mt-6">
            <Button
              v-if="currentStep > 1"
              variant="outline"
              @click="prevStep"
            >
              Vorige
            </Button>
            <div v-else />

            <Button
              v-if="currentStep < 4"
              variant="primary"
              :disabled="!canProceed"
              @click="nextStep"
            >
              Volgende
            </Button>
            <Button
              v-else
              variant="primary"
              :loading="loading"
              @click="placeOrder"
            >
              Bestelling plaatsen
            </Button>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <Card class="sticky top-24">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Besteloverzicht</h3>

            <!-- Items -->
            <div class="space-y-4 mb-6">
              <div
                v-for="item in cartStore.items"
                :key="item.id"
                class="flex gap-3"
              >
                <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package class="w-8 h-8 text-gray-400" />
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-medium text-gray-900 truncate">{{ item.name }}</h4>
                  <p class="text-sm text-gray-500">Aantal: {{ item.quantity }}</p>
                  <p class="text-sm font-medium text-gray-900">
                    {{ formatPrice(item.priceOneTime * item.quantity) }}
                  </p>
                </div>
                <button
                  @click="cartStore.removeItem(item.id)"
                  class="text-gray-400 hover:text-error"
                  aria-label="Verwijderen"
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- Totals -->
            <div class="border-t border-gray-200 pt-4 space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Subtotaal</span>
                <span class="font-medium">{{ formatPrice(cartStore.subtotalOneTime) }}</span>
              </div>
              <div v-if="installationCost > 0" class="flex justify-between text-sm">
                <span class="text-gray-600">Installatie</span>
                <span class="font-medium">{{ formatPrice(installationCost) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Verzending</span>
                <span class="font-medium text-success">Gratis</span>
              </div>
              <div class="flex justify-between pt-2 border-t border-gray-200">
                <span class="font-semibold text-gray-900">Totaal eenmalig</span>
                <span class="font-bold text-gray-900">{{ formatPrice(totalOneTime) }}</span>
              </div>
              <div v-if="cartStore.subtotalMonthly > 0" class="flex justify-between text-sm text-gray-600">
                <span>Maandelijks</span>
                <span>{{ formatPrice(cartStore.subtotalMonthly) }}/maand</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
