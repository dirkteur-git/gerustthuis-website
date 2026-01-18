<script setup>
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { Home, ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-[70vh] flex items-center justify-center py-16">
    <div class="text-center px-4">
      <h1 class="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Pagina niet gevonden
      </h2>
      <p class="text-xl text-gray-600 mb-8 max-w-md mx-auto">
        De pagina die je zoekt bestaat niet of is verplaatst.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/">
          <Button variant="primary">
            <Home class="w-4 h-4 mr-2" />
            Naar homepage
          </Button>
        </RouterLink>
        <Button variant="outline" @click="$router.back()">
          <ArrowLeft class="w-4 h-4 mr-2" />
          Ga terug
        </Button>
      </div>
    </div>
  </div>
</template>
