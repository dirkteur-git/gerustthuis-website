<script setup>
import { RouterLink } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import PricingCard from './PricingCard.vue'

const productsStore = useProductsStore()
</script>

<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Eenvoudige, eerlijke prijzen
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Kies het pakket dat bij jouw situatie past
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
        <PricingCard
          v-for="pkg in productsStore.packages"
          :key="pkg.id"
          :package="pkg"
        />
      </div>

      <div class="text-center">
        <p class="text-gray-600 mb-4">
          30 dagen niet-goed-geld-terug garantie
        </p>
        <RouterLink to="/producten" class="text-primary hover:text-primary-light font-medium">
          Bekijk alle details &rarr;
        </RouterLink>
      </div>
    </div>
  </section>
</template>
