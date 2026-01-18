import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'

const proposition = useLocalStorage('gerustthuis-proposition', 'particulier')

export function useProposition() {
  const router = useRouter()
  const route = useRoute()

  const isParticulier = computed(() => proposition.value === 'particulier')
  const isZakelijk = computed(() => proposition.value === 'zakelijk')

  function setProposition(value, navigate = false) {
    proposition.value = value
    if (navigate && router) {
      const targetRoute = value === 'zakelijk' ? '/zakelijk' : '/particulier'
      router.push(targetRoute)
    }
  }

  function toggleProposition() {
    proposition.value = proposition.value === 'particulier' ? 'zakelijk' : 'particulier'
  }

  // Auto-detect proposition from route
  function detectFromRoute() {
    if (route.path.startsWith('/zakelijk')) {
      proposition.value = 'zakelijk'
    } else if (route.path.startsWith('/particulier')) {
      proposition.value = 'particulier'
    }
  }

  // Get home route based on current proposition
  const homeRoute = computed(() => {
    return proposition.value === 'zakelijk' ? '/zakelijk' : '/particulier'
  })

  return {
    proposition,
    isParticulier,
    isZakelijk,
    setProposition,
    toggleProposition,
    detectFromRoute,
    homeRoute
  }
}
