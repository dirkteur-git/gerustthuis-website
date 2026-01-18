import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isOpen = ref(false)

  const itemCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const subtotalOneTime = computed(() => {
    return items.value.reduce((total, item) => {
      return total + (item.priceOneTime * item.quantity)
    }, 0)
  })

  const subtotalMonthly = computed(() => {
    return items.value.reduce((total, item) => {
      return total + ((item.priceMonthly || 0) * item.quantity)
    }, 0)
  })

  const total = computed(() => subtotalOneTime.value)

  function addItem(product, quantity = 1) {
    const existingItem = items.value.find(item => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        priceOneTime: product.priceOneTime,
        priceMonthly: product.priceMonthly || 0,
        quantity
      })
    }

    isOpen.value = true
  }

  function removeItem(productId) {
    const index = items.value.findIndex(item => item.id === productId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  function updateQuantity(productId, quantity) {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeItem(productId)
      } else {
        item.quantity = quantity
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  function toggleCart() {
    isOpen.value = !isOpen.value
  }

  function openCart() {
    isOpen.value = true
  }

  function closeCart() {
    isOpen.value = false
  }

  return {
    items,
    isOpen,
    itemCount,
    subtotalOneTime,
    subtotalMonthly,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart
  }
})
