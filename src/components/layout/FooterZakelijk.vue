<script setup>
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()

const mainLinks = [
  { name: 'Oplossingen', href: '/zakelijk/oplossingen' },
  { name: 'Voor wie?', href: '/zakelijk/voor-wie' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' }
]
</script>

<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container py-12">
      <div class="flex flex-col md:flex-row justify-between items-start gap-8">
        <!-- Brand -->
        <div class="max-w-sm">
          <RouterLink to="/zakelijk" class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">G</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-bold text-xl text-white">GerustThuis</span>
              <span class="text-xs font-medium text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded">Zorg</span>
            </div>
          </RouterLink>
          <p class="text-gray-400 text-sm">
            Slim kamermonitoring voor zorginstellingen. Weet waar aandacht nodig is.
          </p>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap gap-6">
          <RouterLink
            v-for="link in mainLinks"
            :key="link.name"
            :to="link.href"
            class="text-gray-400 hover:text-white transition-colors"
          >
            {{ link.name }}
          </RouterLink>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            &copy; {{ currentYear }} GerustThuis. Alle rechten voorbehouden.
          </p>
          <div class="flex gap-6 text-sm">
            <RouterLink to="/privacy" class="text-gray-500 hover:text-white transition-colors">
              Privacy
            </RouterLink>
            <RouterLink to="/voorwaarden" class="text-gray-500 hover:text-white transition-colors">
              Voorwaarden
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
