<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'default',
    validator: (v) => ['narrow', 'default', 'wide', 'full'].includes(v)
  }
})

const sizeClasses = {
  narrow: 'max-w-3xl',
  default: 'max-w-7xl',
  wide: 'max-w-screen-2xl',
  full: 'max-w-full'
}
</script>

<template>
  <div :class="['mx-auto px-4 sm:px-6 lg:px-8', sizeClasses[size]]">
    <slot />
  </div>
</template>
