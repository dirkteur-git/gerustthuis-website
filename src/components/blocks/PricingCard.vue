<script setup>
import { RouterLink } from 'vue-router'
import { Check } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import Card from '@/components/ui/Card.vue'

const props = defineProps({
  package: {
    type: Object,
    required: true
  }
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}
</script>

<template>
  <Card
    :class="[
      'relative h-full flex flex-col',
      package.popular ? 'ring-2 ring-primary' : ''
    ]"
  >
    <!-- Popular badge -->
    <Badge
      v-if="package.popular"
      variant="primary"
      class="absolute -top-3 left-1/2 -translate-x-1/2"
    >
      Meest gekozen
    </Badge>

    <!-- Header -->
    <div class="mb-6">
      <h3 class="text-2xl font-bold text-gray-900 mb-2">
        {{ package.name }}
      </h3>
      <p class="text-gray-600">
        {{ package.description }}
      </p>
    </div>

    <!-- Pricing -->
    <div class="mb-6">
      <div class="flex items-baseline gap-1 mb-1">
        <span class="text-4xl font-bold text-gray-900">
          {{ formatPrice(package.priceOneTime) }}
        </span>
        <span class="text-gray-500">eenmalig</span>
      </div>
      <div class="text-gray-600">
        + {{ formatPrice(package.priceMonthly) }}/maand
      </div>
    </div>

    <!-- Features -->
    <ul class="space-y-3 mb-8 flex-1">
      <li
        v-for="feature in package.features"
        :key="feature"
        class="flex items-start gap-3"
      >
        <Check class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
        <span class="text-gray-700">{{ feature }}</span>
      </li>
    </ul>

    <!-- CTA -->
    <RouterLink :to="`/producten/${package.slug}`">
      <Button
        :variant="package.popular ? 'primary' : 'outline'"
        full-width
      >
        Kies {{ package.name }}
      </Button>
    </RouterLink>
  </Card>
</template>
