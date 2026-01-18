<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X, ShoppingCart, Building2, User } from 'lucide-vue-next'
import { useCartStore } from '@/stores/cart'
import { useProposition } from '@/composables/useProposition'
import Button from '@/components/ui/Button.vue'

const route = useRoute()
const cartStore = useCartStore()
const { proposition, isParticulier, isZakelijk, setProposition, homeRoute } = useProposition()
const isMenuOpen = ref(false)

// Navigation items based on proposition
const particulierNavigation = [
  { name: 'Hoe het werkt', href: '/particulier/hoe-het-werkt' },
  { name: 'Producten', href: '/particulier/producten' },
  { name: 'Wachtlijst', href: '/particulier/wachtlijst' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Blog', href: '/blog' }
]

const zakelijkNavigation = [
  { name: 'Oplossingen', href: '/zakelijk/oplossingen' },
  { name: 'Wachtlijst', href: '/zakelijk/wachtlijst' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' }
]

const navigation = computed(() => isZakelijk.value ? zakelijkNavigation : particulierNavigation)

const isActive = (href) => route.path === href || route.path.startsWith(href + '/')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Update proposition based on route
watch(() => route.path, (path) => {
  if (path.startsWith('/zakelijk')) {
    setProposition('zakelijk')
  } else if (path.startsWith('/particulier')) {
    setProposition('particulier')
  }
}, { immediate: true })
</script>

<template>
  <header class="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-gray-100">
    <a href="#main-content" class="skip-link">
      Ga naar hoofdinhoud
    </a>

    <!-- Proposition Toggle Bar -->
    <div class="bg-gray-50 border-b border-gray-100">
      <div class="container">
        <div class="flex items-center justify-center gap-1 py-2">
          <button
            @click="setProposition('particulier', true)"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all"
            :class="isParticulier ? 'bg-primary text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'"
          >
            <User class="w-4 h-4" />
            Particulier
          </button>
          <button
            @click="setProposition('zakelijk', true)"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all"
            :class="isZakelijk ? 'bg-primary text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'"
          >
            <Building2 class="w-4 h-4" />
            Zorginstellingen
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <nav class="flex items-center justify-between h-16 md:h-20" aria-label="Hoofdnavigatie">
        <!-- Logo -->
        <RouterLink :to="homeRoute" class="flex items-center gap-2" @click="closeMenu">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">{{ isZakelijk ? 'S' : 'G' }}</span>
          </div>
          <div>
            <span v-if="isZakelijk" class="font-bold text-xl text-gray-900">Sensor.Care</span>
            <span v-else class="font-bold text-xl text-gray-900">GerustThuis</span>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-gray-600 hover:text-primary font-medium transition-colors"
            :class="{ 'text-primary': isActive(item.href) }"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex items-center gap-4">
          <a href="https://app.gerustthuis.nl/login" class="text-gray-600 hover:text-primary font-medium transition-colors">
            Inloggen
          </a>

          <!-- Particulier: Cart + Order button -->
          <template v-if="isParticulier">
            <RouterLink to="/particulier/producten" class="relative">
              <Button variant="outline" size="sm" class="relative">
                <ShoppingCart class="w-5 h-5" />
                <span
                  v-if="cartStore.itemCount > 0"
                  class="absolute -top-2 -right-2 w-5 h-5 bg-secondary text-gray-900 text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {{ cartStore.itemCount }}
                </span>
              </Button>
            </RouterLink>
            <RouterLink to="/particulier/producten">
              <Button variant="primary">Bestel nu</Button>
            </RouterLink>
          </template>

          <!-- Zakelijk: Demo button -->
          <template v-else>
            <RouterLink to="/zakelijk/demo">
              <Button variant="primary">Demo aanvragen</Button>
            </RouterLink>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Menu openen"
        >
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="isMenuOpen"
        id="mobile-menu"
        class="lg:hidden bg-surface border-t border-gray-100"
      >
        <div class="container py-4 space-y-4">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="block py-2 text-gray-600 hover:text-primary font-medium transition-colors"
            :class="{ 'text-primary': isActive(item.href) }"
            @click="closeMenu"
          >
            {{ item.name }}
          </RouterLink>
          <hr class="border-gray-200" />
          <a
            href="https://app.gerustthuis.nl/login"
            class="block py-2 text-gray-600 hover:text-primary font-medium transition-colors"
            @click="closeMenu"
          >
            Inloggen
          </a>

          <template v-if="isParticulier">
            <RouterLink to="/particulier/producten" @click="closeMenu">
              <Button variant="primary" full-width>Bestel nu</Button>
            </RouterLink>
          </template>
          <template v-else>
            <RouterLink to="/zakelijk/demo" @click="closeMenu">
              <Button variant="primary" full-width>Demo aanvragen</Button>
            </RouterLink>
          </template>
        </div>
      </div>
    </Transition>
  </header>
</template>
