<script setup>
import { ref, computed } from 'vue'
import { Mail, Check, Lock, Users } from 'lucide-vue-next'

const props = defineProps({
  variant: {
    type: String,
    default: 'light', // 'light' or 'dark'
  },
  showCounter: {
    type: Boolean,
    default: true,
  },
  showTrustBadges: {
    type: Boolean,
    default: false,
  },
})

const email = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const error = ref('')

// Simulated counter - in production this would come from API
const waitlistCount = ref(47)

const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})

const submitForm = async () => {
  if (!isValidEmail.value) {
    error.value = 'Vul een geldig e-mailadres in'
    return
  }

  error.value = ''
  isSubmitting.value = true

  try {
    // Simulate API call - replace with actual waitlist API
    // Options: Waitlist.io, Loops.so, or custom Supabase
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Track event for analytics
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('waitlist_submit')
    }

    isSubmitted.value = true
    waitlistCount.value++
  } catch (err) {
    error.value = 'Er ging iets mis. Probeer het opnieuw.'
  } finally {
    isSubmitting.value = false
  }
}

const inputClasses = computed(() => {
  if (props.variant === 'dark') {
    return 'bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary focus:ring-secondary'
  }
  return 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary'
})

const buttonClasses = computed(() => {
  if (props.variant === 'dark') {
    return 'bg-secondary hover:bg-secondary-light text-gray-900'
  }
  return 'bg-primary hover:bg-primary-light text-white'
})
</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <!-- Success State -->
    <div v-if="isSubmitted" class="text-center py-6">
      <div
        class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
        :class="variant === 'dark' ? 'bg-secondary/20' : 'bg-green-100'"
      >
        <Check
          class="w-8 h-8"
          :class="variant === 'dark' ? 'text-secondary' : 'text-green-600'"
        />
      </div>
      <h3
        class="text-xl font-bold mb-2"
        :class="variant === 'dark' ? 'text-white' : 'text-gray-900'"
      >
        Je staat op de wachtlijst!
      </h3>
      <p :class="variant === 'dark' ? 'text-white/80' : 'text-gray-600'">
        We sturen je een email zodra GerustThuis beschikbaar is.
      </p>
    </div>

    <!-- Form State -->
    <div v-else>
      <p
        class="text-center mb-4 text-sm"
        :class="variant === 'dark' ? 'text-white/80' : 'text-gray-600'"
      >
        Binnenkort beschikbaar. Krijg als eerste toegang.
      </p>

      <form @submit.prevent="submitForm" class="space-y-3">
        <div class="flex flex-col sm:flex-row gap-3">
          <div class="flex-1 relative">
            <Mail
              class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
              :class="variant === 'dark' ? 'text-white/40' : 'text-gray-400'"
            />
            <input
              v-model="email"
              type="email"
              placeholder="Je e-mailadres"
              class="w-full pl-10 pr-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0"
              :class="inputClasses"
              required
            />
          </div>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            :class="buttonClasses"
          >
            <span v-if="isSubmitting">Even geduld...</span>
            <span v-else>Houd me op de hoogte</span>
          </button>
        </div>

        <p v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </p>
      </form>

      <!-- Trust indicators -->
      <div
        class="flex items-center justify-center gap-4 mt-4 text-sm"
        :class="variant === 'dark' ? 'text-white/60' : 'text-gray-500'"
      >
        <span class="flex items-center gap-1">
          <Check class="w-4 h-4 text-green-500" />
          Geen spam
        </span>
        <span class="flex items-center gap-1">
          <Check class="w-4 h-4 text-green-500" />
          Altijd uitschrijven
        </span>
      </div>

      <!-- Social proof counter -->
      <div
        v-if="showCounter"
        class="flex items-center justify-center gap-2 mt-4"
        :class="variant === 'dark' ? 'text-white/80' : 'text-gray-600'"
      >
        <Users class="w-4 h-4" />
        <span class="text-sm font-medium">
          Al {{ waitlistCount }} families wachten
        </span>
      </div>

      <!-- Trust badges -->
      <div
        v-if="showTrustBadges"
        class="flex items-center justify-center gap-6 mt-6 text-sm"
        :class="variant === 'dark' ? 'text-white/70' : 'text-gray-600'"
      >
        <span class="flex items-center gap-2">
          <Lock class="w-4 h-4" />
          Geen camera's
        </span>
        <span>🇳🇱 Nederlands</span>
        <span class="flex items-center gap-2">
          💚 Privacy-first
        </span>
      </div>
    </div>
  </div>
</template>
