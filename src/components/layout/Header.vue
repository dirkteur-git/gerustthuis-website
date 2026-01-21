<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'

const route = useRoute()
const isMenuOpen = ref(false)

const navigation = [
  { name: 'Voor wie?', href: '/particulier/voor-wie' },
  { name: 'Hoe het werkt', href: '/particulier/hoe-het-werkt' },
  { name: 'Eerste toegang', href: '/particulier/wachtlijst' },
  { name: 'Waarom we dit doen', href: '/over-ons' },
  { name: 'Voor mantelzorgers', href: '/blog' }
]

const isActive = (href) => route.path === href || route.path.startsWith(href + '/')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-gray-100">
    <div class="container">
      <nav class="flex items-center justify-between h-16 md:h-20" aria-label="Hoofdnavigatie">
        <!-- Logo -->
        <RouterLink to="/particulier" class="flex items-center gap-2" @click="closeMenu">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">G</span>
          </div>
          <div>
            <span class="font-bold text-xl text-gray-900">GerustThuis</span>
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
          <RouterLink to="/particulier/wachtlijst">
            <Button variant="primary">Eerste toegang</Button>
          </RouterLink>
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
          <RouterLink to="/particulier/wachtlijst" @click="closeMenu">
            <Button variant="primary" full-width>Eerste toegang</Button>
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
