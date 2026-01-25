<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import HeaderZakelijk from '@/components/layout/HeaderZakelijk.vue'
import Footer from '@/components/layout/Footer.vue'
import FooterZakelijk from '@/components/layout/FooterZakelijk.vue'

const route = useRoute()

const isZakelijk = computed(() => route.path.startsWith('/zakelijk'))
</script>

<template>
  <div class="min-h-screen flex flex-col" :class="{ 'theme-zakelijk': isZakelijk }">
    <component :is="isZakelijk ? HeaderZakelijk : Header" />
    <main id="main-content" class="flex-1">
      <RouterView />
    </main>
    <component :is="isZakelijk ? FooterZakelijk : Footer" />
  </div>
</template>
