<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProposition } from '@/composables/useProposition'

const router = useRouter()
const { proposition } = useProposition()

onMounted(() => {
  // Redirect based on stored proposition preference
  const target = proposition.value === 'zakelijk' ? '/zakelijk' : '/particulier'
  router.replace(target)
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="animate-pulse">
      <div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
</template>
