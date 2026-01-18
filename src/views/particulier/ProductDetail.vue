<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import Tabs from '@/components/ui/Tabs.vue'
import {
  ChevronRight,
  Package,
  ShoppingCart,
  Check,
  Minus,
  Plus,
  Shield,
  Truck,
  HeadphonesIcon
} from 'lucide-vue-next'

const route = useRoute()
const productsStore = useProductsStore()
const cartStore = useCartStore()

const quantity = ref(1)

const product = computed(() => {
  return productsStore.getProductBySlug(route.params.slug)
})

const isPackage = computed(() => {
  return product.value?.features !== undefined
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

const decrementQuantity = () => {
  if (quantity.value > 1) quantity.value--
}

const incrementQuantity = () => {
  quantity.value++
}

const addToCart = () => {
  if (product.value) {
    cartStore.addItem(product.value, quantity.value)
  }
}

const tabs = [
  { id: 'beschrijving', label: 'Beschrijving' },
  { id: 'specificaties', label: 'Specificaties' },
  { id: 'inhoud', label: 'Wat zit erin' }
]

const activeTab = ref('beschrijving')

const trustBadges = [
  { icon: Shield, text: '30 dagen retour' },
  { icon: Truck, text: 'Gratis verzending' },
  { icon: HeadphonesIcon, text: 'Nederlandse support' }
]
</script>

<template>
  <div v-if="product">
    <!-- Breadcrumb -->
    <div class="bg-gray-50 py-4">
      <div class="container">
        <nav class="flex items-center gap-2 text-sm text-gray-500">
          <RouterLink to="/" class="hover:text-primary">Home</RouterLink>
          <ChevronRight class="w-4 h-4" />
          <RouterLink to="/producten" class="hover:text-primary">Producten</RouterLink>
          <ChevronRight class="w-4 h-4" />
          <span class="text-gray-900">{{ product.name }}</span>
        </nav>
      </div>
    </div>

    <!-- Product Hero -->
    <section class="py-12 md:py-16">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Images -->
          <div>
            <Card class="aspect-square flex items-center justify-center bg-gray-50 mb-4">
              <Package class="w-32 h-32 text-gray-400" />
            </Card>
            <div class="grid grid-cols-4 gap-4">
              <Card
                v-for="i in 4"
                :key="i"
                padding="sm"
                class="aspect-square flex items-center justify-center bg-gray-50 cursor-pointer hover:ring-2 hover:ring-primary"
              >
                <Package class="w-8 h-8 text-gray-400" />
              </Card>
            </div>
          </div>

          <!-- Product Info -->
          <div>
            <Badge v-if="product.popular" variant="primary" class="mb-4">
              Meest gekozen
            </Badge>

            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {{ product.name }}
            </h1>

            <p class="text-lg text-gray-600 mb-6">
              {{ product.description }}
            </p>

            <!-- Pricing -->
            <div class="mb-6">
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-bold text-gray-900">
                  {{ formatPrice(product.priceOneTime) }}
                </span>
                <span class="text-gray-500">eenmalig</span>
              </div>
              <div v-if="product.priceMonthly" class="text-gray-600">
                + {{ formatPrice(product.priceMonthly) }}/maand
              </div>
            </div>

            <!-- Features (for packages) -->
            <ul v-if="isPackage && product.features" class="space-y-2 mb-6">
              <li
                v-for="feature in product.features.slice(0, 5)"
                :key="feature"
                class="flex items-center gap-2"
              >
                <Check class="w-5 h-5 text-success" />
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>

            <!-- Quantity & Add to Cart -->
            <div class="flex flex-col sm:flex-row gap-4 mb-6">
              <div class="flex items-center border border-gray-300 rounded-lg">
                <button
                  @click="decrementQuantity"
                  class="p-3 hover:bg-gray-100 transition-colors"
                  aria-label="Verlaag aantal"
                >
                  <Minus class="w-5 h-5" />
                </button>
                <span class="px-6 py-3 font-medium">{{ quantity }}</span>
                <button
                  @click="incrementQuantity"
                  class="p-3 hover:bg-gray-100 transition-colors"
                  aria-label="Verhoog aantal"
                >
                  <Plus class="w-5 h-5" />
                </button>
              </div>
              <Button variant="primary" size="lg" @click="addToCart" class="flex-1">
                <ShoppingCart class="w-5 h-5 mr-2" />
                In winkelwagen
              </Button>
            </div>

            <!-- Trust badges -->
            <div class="flex flex-wrap gap-4">
              <div
                v-for="badge in trustBadges"
                :key="badge.text"
                class="flex items-center gap-2 text-sm text-gray-600"
              >
                <component :is="badge.icon" class="w-4 h-4 text-primary" />
                <span>{{ badge.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Details Tabs -->
    <section class="py-12 md:py-16 bg-gray-50">
      <div class="container">
        <Tabs :tabs="tabs" v-model="activeTab">
          <template #beschrijving>
            <div class="prose max-w-none">
              <p class="text-lg text-gray-600">
                {{ product.description }}
              </p>
              <p v-if="isPackage" class="text-gray-600 mt-4">
                Dit pakket bevat alles wat je nodig hebt om te starten met GerustThuis.
                Onze sensoren zijn eenvoudig te installeren en werken direct uit de doos.
                Na installatie leert het systeem automatisch het dagritme van je ouder.
              </p>
            </div>
          </template>

          <template #specificaties>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="font-semibold text-gray-900 mb-4">Technische specificaties</h3>
                <dl class="space-y-3">
                  <div class="flex justify-between py-2 border-b border-gray-200">
                    <dt class="text-gray-600">Verbinding</dt>
                    <dd class="font-medium text-gray-900">Zigbee 3.0</dd>
                  </div>
                  <div class="flex justify-between py-2 border-b border-gray-200">
                    <dt class="text-gray-600">Bereik</dt>
                    <dd class="font-medium text-gray-900">Tot 100 meter</dd>
                  </div>
                  <div class="flex justify-between py-2 border-b border-gray-200">
                    <dt class="text-gray-600">Batterij</dt>
                    <dd class="font-medium text-gray-900">Tot 2 jaar</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-4">Vereisten</h3>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center gap-2">
                    <Check class="w-4 h-4 text-success" />
                    Wifi-verbinding (2.4 GHz)
                  </li>
                  <li class="flex items-center gap-2">
                    <Check class="w-4 h-4 text-success" />
                    Stopcontact voor hub
                  </li>
                  <li class="flex items-center gap-2">
                    <Check class="w-4 h-4 text-success" />
                    Smartphone (iOS/Android)
                  </li>
                </ul>
              </div>
            </div>
          </template>

          <template #inhoud>
            <div v-if="isPackage && product.includes">
              <h3 class="font-semibold text-gray-900 mb-4">Dit pakket bevat:</h3>
              <ul class="space-y-3">
                <li
                  v-for="item in product.includes"
                  :key="item.name"
                  class="flex items-center gap-3 p-3 bg-white rounded-lg"
                >
                  <Package class="w-6 h-6 text-primary" />
                  <span class="text-gray-900">{{ item.quantity }}x {{ item.name }}</span>
                </li>
              </ul>
            </div>
            <p v-else class="text-gray-600">
              Dit product bevat 1x {{ product.name }}.
            </p>
          </template>
        </Tabs>
      </div>
    </section>

    <!-- Related Products -->
    <section class="py-12 md:py-16">
      <div class="container">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">
          Past hier goed bij
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            v-for="accessory in productsStore.accessories.slice(0, 4)"
            :key="accessory.id"
            hover
            class="text-center"
          >
            <div class="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
              <Package class="w-12 h-12 text-gray-400" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">{{ accessory.name }}</h3>
            <p class="text-primary font-medium">{{ formatPrice(accessory.priceOneTime) }}</p>
          </Card>
        </div>
      </div>
    </section>
  </div>

  <!-- Not found -->
  <div v-else class="py-24 text-center">
    <div class="container">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Product niet gevonden</h1>
      <p class="text-gray-600 mb-8">Het product dat je zoekt bestaat niet of is niet meer beschikbaar.</p>
      <RouterLink to="/producten">
        <Button variant="primary">Bekijk alle producten</Button>
      </RouterLink>
    </div>
  </div>
</template>
