<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main id="main-content" class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
