<script setup>
import { RouterLink, useRoute } from 'vue-router'
import {
  LayoutDashboard,
  Activity,
  Bell,
  BookOpen,
  Cpu,
  Users,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-vue-next'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const authStore = useAuthStore()

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Live status', href: '/dashboard/status', icon: Activity },
  { name: 'Alerts & meldingen', href: '/dashboard/alerts', icon: Bell },
  { name: 'Dagboek', href: '/dashboard/dagboek', icon: BookOpen },
  { name: 'Sensoren', href: '/dashboard/sensoren', icon: Cpu },
  { name: 'Familie', href: '/dashboard/familie', icon: Users },
  { name: 'Instellingen', href: '/dashboard/instellingen', icon: Settings }
]

const isActive = (href) => route.path === href
</script>

<template>
  <aside class="w-64 bg-surface border-r border-gray-200 min-h-screen">
    <div class="flex flex-col h-full">
      <!-- Logo -->
      <div class="p-6 border-b border-gray-200">
        <RouterLink to="/" class="flex items-center gap-2">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">G</span>
          </div>
          <span class="font-bold text-xl text-gray-900">GerustThuis</span>
        </RouterLink>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-1">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors"
          :class="[
            isActive(item.href)
              ? 'bg-primary/10 text-primary'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          ]"
        >
          <component :is="item.icon" class="w-5 h-5" />
          {{ item.name }}
        </RouterLink>
      </nav>

      <!-- Bottom Actions -->
      <div class="p-4 border-t border-gray-200 space-y-1">
        <RouterLink
          to="/contact"
          class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          <HelpCircle class="w-5 h-5" />
          Support
        </RouterLink>
        <button
          @click="authStore.logout"
          class="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          <LogOut class="w-5 h-5" />
          Uitloggen
        </button>
      </div>
    </div>
  </aside>
</template>
