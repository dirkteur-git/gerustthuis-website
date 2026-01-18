<script setup>
import { RouterLink } from 'vue-router'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const productLinks = [
  { name: 'Hoe het werkt', href: '/hoe-het-werkt' },
  { name: 'Pakketten', href: '/producten' },
  { name: 'Webshop', href: '/producten' },
  { name: 'Installatie', href: '/hoe-het-werkt#installatie' }
]

const infoLinks = [
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Blog', href: '/blog' },
  { name: 'Veelgestelde vragen', href: '/veelgestelde-vragen' },
  { name: 'Contact', href: '/contact' }
]

const serviceLinks = [
  { name: 'Inloggen', href: '/login' },
  { name: 'Support', href: '/contact' },
  { name: 'Garantie', href: '/garantie' },
  { name: 'Retourneren', href: '/retourneren' }
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' }
]
</script>

<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <RouterLink to="/" class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">G</span>
            </div>
            <span class="font-bold text-xl text-white">GerustThuis</span>
          </RouterLink>
          <p class="text-gray-400 mb-6">
            AI-gestuurde thuismonitor die mantelzorgers helpt om op afstand een oogje te houden op hun ouders of familieleden.
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Products Column -->
        <div>
          <h3 class="font-semibold text-white mb-4">Producten</h3>
          <ul class="space-y-3">
            <li v-for="link in productLinks" :key="link.name">
              <RouterLink
                :to="link.href"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Info Column -->
        <div>
          <h3 class="font-semibold text-white mb-4">Informatie</h3>
          <ul class="space-y-3">
            <li v-for="link in infoLinks" :key="link.name">
              <RouterLink
                :to="link.href"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Service Column -->
        <div>
          <h3 class="font-semibold text-white mb-4">Klantenservice</h3>
          <ul class="space-y-3">
            <li v-for="link in serviceLinks" :key="link.name">
              <RouterLink
                :to="link.href"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            &copy; {{ currentYear }} GerustThuis. Alle rechten voorbehouden.
          </p>
          <div class="flex flex-wrap gap-6 text-sm">
            <RouterLink to="/privacy" class="text-gray-500 hover:text-white transition-colors">
              Privacy
            </RouterLink>
            <RouterLink to="/voorwaarden" class="text-gray-500 hover:text-white transition-colors">
              Voorwaarden
            </RouterLink>
            <RouterLink to="/cookies" class="text-gray-500 hover:text-white transition-colors">
              Cookies
            </RouterLink>
            <span class="text-gray-600">KvK: 12345678</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
