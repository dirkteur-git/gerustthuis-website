<script setup>
import { ref, computed } from 'vue'
import { useProductsStore } from '@/stores/products'
import Tabs from '@/components/ui/Tabs.vue'
import PricingCard from '@/components/blocks/PricingCard.vue'
import ProductCard from '@/components/blocks/ProductCard.vue'
import CTASection from '@/components/blocks/CTASection.vue'

const productsStore = useProductsStore()

const tabs = [
  { id: 'pakketten', label: 'Pakketten' },
  { id: 'sensoren', label: 'Losse sensoren' },
  { id: 'accessoires', label: 'Accessoires' }
]

const activeTab = ref('pakketten')

const filteredAccessories = computed(() => {
  if (activeTab.value === 'sensoren') {
    return productsStore.accessories.filter(a => a.category === 'sensor')
  }
  if (activeTab.value === 'accessoires') {
    return productsStore.accessories.filter(a => a.category === 'accessoire')
  }
  return []
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-background to-primary/5">
      <div class="container">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kies het pakket dat bij jou past
          </h1>
          <p class="text-xl text-gray-600">
            Alle pakketten inclusief 30 dagen niet-goed-geld-terug garantie.
          </p>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="py-16 md:py-24">
      <div class="container">
        <Tabs :tabs="tabs" v-model="activeTab">
          <!-- Pakketten tab -->
          <template #pakketten>
            <div class="grid md:grid-cols-3 gap-8">
              <PricingCard
                v-for="pkg in productsStore.packages"
                :key="pkg.id"
                :package="pkg"
              />
            </div>
          </template>

          <!-- Sensoren tab -->
          <template #sensoren>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                v-for="product in filteredAccessories"
                :key="product.id"
                :product="product"
              />
            </div>
            <p v-if="filteredAccessories.length === 0" class="text-center text-gray-500 py-12">
              Geen sensoren gevonden.
            </p>
          </template>

          <!-- Accessoires tab -->
          <template #accessoires>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                v-for="product in filteredAccessories"
                :key="product.id"
                :product="product"
              />
            </div>
            <p v-if="filteredAccessories.length === 0" class="text-center text-gray-500 py-12">
              Geen accessoires gevonden.
            </p>
          </template>
        </Tabs>
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>
