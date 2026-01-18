<script setup>
import { RouterLink } from 'vue-router'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import { useCartStore } from '@/stores/cart'
import { ShoppingCart, Package } from 'lucide-vue-next'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const formatPrice = (price) => {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

const addToCart = () => {
  cartStore.addItem(props.product)
}
</script>

<template>
  <Card hover class="h-full flex flex-col">
    <!-- Image -->
    <div class="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative">
      <Package class="w-16 h-16 text-gray-400" />
      <Badge
        v-if="product.popular"
        variant="primary"
        class="absolute top-2 right-2"
      >
        Populair
      </Badge>
    </div>

    <!-- Content -->
    <div class="flex-1 flex flex-col">
      <RouterLink :to="`/producten/${product.slug}`" class="group">
        <h3 class="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
          {{ product.name }}
        </h3>
      </RouterLink>
      <p class="text-gray-600 text-sm mb-4 flex-1">
        {{ product.description }}
      </p>

      <!-- Price -->
      <div class="mb-4">
        <span class="text-xl font-bold text-gray-900">
          {{ formatPrice(product.priceOneTime) }}
        </span>
        <span v-if="product.priceMonthly" class="text-gray-500 text-sm block">
          + {{ formatPrice(product.priceMonthly) }}/maand
        </span>
      </div>

      <!-- Actions -->
      <div class="flex gap-2">
        <RouterLink :to="`/producten/${product.slug}`" class="flex-1">
          <Button variant="outline" full-width size="sm">
            Details
          </Button>
        </RouterLink>
        <Button variant="primary" size="sm" @click="addToCart">
          <ShoppingCart class="w-4 h-4" />
        </Button>
      </div>
    </div>
  </Card>
</template>
