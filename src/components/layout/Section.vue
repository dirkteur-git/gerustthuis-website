<script setup>
import { computed } from 'vue'

const props = defineProps({
  background: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'light', 'dark', 'primary'].includes(v)
  },
  padding: {
    type: String,
    default: 'default',
    validator: (v) => ['none', 'small', 'default', 'large'].includes(v)
  }
})

const bgClasses = {
  default: 'bg-background',
  light: 'bg-gray-50',
  dark: 'bg-gray-900 text-white',
  primary: 'bg-primary text-white'
}

const paddingClasses = {
  none: '',
  small: 'py-8 md:py-12',
  default: 'py-16 md:py-24',
  large: 'py-24 md:py-32'
}
</script>

<template>
  <section :class="[bgClasses[background], paddingClasses[padding]]">
    <slot />
  </section>
</template>
