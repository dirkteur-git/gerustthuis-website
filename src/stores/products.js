import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const packages = ref([
    {
      id: 'basis',
      slug: 'basis-pakket',
      name: 'Basis',
      description: 'Perfect voor starters die basale monitoring willen',
      priceOneTime: 349,
      priceMonthly: 12.95,
      image: '/images/products/basis.jpg',
      popular: false,
      features: [
        '3 bewegingssensoren',
        '2 deurcontacten',
        'Meldingen bij afwijkingen',
        '1 familielid toegang',
        'Email support'
      ],
      includes: [
        { name: 'Bewegingssensor', quantity: 3 },
        { name: 'Deurcontact', quantity: 2 },
        { name: 'Hub', quantity: 1 }
      ]
    },
    {
      id: 'compleet',
      slug: 'compleet-pakket',
      name: 'Compleet',
      description: 'Onze meest gekozen oplossing met uitgebreide monitoring',
      priceOneTime: 499,
      priceMonthly: 19.95,
      image: '/images/products/compleet.jpg',
      popular: true,
      features: [
        '5 bewegingssensoren',
        '3 deurcontacten',
        '1 slimme stekker',
        'Valdetectie radar',
        'Spraakherinneringen',
        '3 familieleden toegang',
        'Prioriteit support'
      ],
      includes: [
        { name: 'Bewegingssensor', quantity: 5 },
        { name: 'Deurcontact', quantity: 3 },
        { name: 'Slimme stekker', quantity: 1 },
        { name: 'Valdetectie radar', quantity: 1 },
        { name: 'Spraakhub', quantity: 1 },
        { name: 'Hub', quantity: 1 }
      ]
    },
    {
      id: 'premium',
      slug: 'premium-pakket',
      name: 'Premium',
      description: 'Volledige dekking met persoonlijke onboarding',
      priceOneTime: 699,
      priceMonthly: 29.95,
      image: '/images/products/premium.jpg',
      popular: false,
      features: [
        'Alles van Compleet',
        '8 sensoren totaal',
        'Noodknop',
        'Onbeperkt familieleden',
        'Installatie aan huis',
        'Persoonlijke onboarding',
        '24/7 telefonische support'
      ],
      includes: [
        { name: 'Bewegingssensor', quantity: 6 },
        { name: 'Deurcontact', quantity: 4 },
        { name: 'Slimme stekker', quantity: 2 },
        { name: 'Valdetectie radar', quantity: 1 },
        { name: 'Spraakhub', quantity: 1 },
        { name: 'Noodknop', quantity: 1 },
        { name: 'Hub', quantity: 1 }
      ]
    }
  ])

  const accessories = ref([
    {
      id: 'bewegingssensor',
      slug: 'bewegingssensor',
      name: 'Bewegingssensor',
      description: 'Detecteert beweging in een ruimte. Batterij gaat tot 2 jaar mee.',
      priceOneTime: 29,
      priceMonthly: 0,
      image: '/images/products/bewegingssensor.jpg',
      category: 'sensor',
      stock: 50
    },
    {
      id: 'deurcontact',
      slug: 'deurcontact',
      name: 'Deurcontact',
      description: 'Weet wanneer deuren of kasten worden geopend.',
      priceOneTime: 19,
      priceMonthly: 0,
      image: '/images/products/deurcontact.jpg',
      category: 'sensor',
      stock: 75
    },
    {
      id: 'slimme-stekker',
      slug: 'slimme-stekker',
      name: 'Slimme stekker',
      description: 'Meet stroomverbruik van aangesloten apparaten.',
      priceOneTime: 24,
      priceMonthly: 0,
      image: '/images/products/slimme-stekker.jpg',
      category: 'accessoire',
      stock: 30
    },
    {
      id: 'valdetectie-radar',
      slug: 'valdetectie-radar',
      name: 'Valdetectie radar',
      description: 'Detecteert een val zonder camera, met radar technologie.',
      priceOneTime: 89,
      priceMonthly: 0,
      image: '/images/products/valdetectie.jpg',
      category: 'sensor',
      stock: 20
    },
    {
      id: 'noodknop',
      slug: 'noodknop',
      name: 'Noodknop',
      description: 'Draagbare knop voor directe hulp. Waterbestendig.',
      priceOneTime: 49,
      priceMonthly: 0,
      image: '/images/products/noodknop.jpg',
      category: 'accessoire',
      stock: 40
    },
    {
      id: 'spraakhub',
      slug: 'spraakhub',
      name: 'Spraakhub',
      description: 'Voor spraakherinneringen en communicatie.',
      priceOneTime: 59,
      priceMonthly: 0,
      image: '/images/products/spraakhub.jpg',
      category: 'accessoire',
      stock: 25
    }
  ])

  const loading = ref(false)
  const error = ref(null)

  const allProducts = computed(() => [...packages.value, ...accessories.value])

  function getProductBySlug(slug) {
    return allProducts.value.find(p => p.slug === slug)
  }

  function getPackageById(id) {
    return packages.value.find(p => p.id === id)
  }

  function getAccessoriesByCategory(category) {
    if (!category) return accessories.value
    return accessories.value.filter(a => a.category === category)
  }

  async function fetchProducts() {
    loading.value = true
    error.value = null

    try {
      // Mock API call - products are already loaded
      await new Promise(resolve => setTimeout(resolve, 300))
      return true
    } catch (err) {
      error.value = 'Producten laden mislukt'
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    packages,
    accessories,
    loading,
    error,
    allProducts,
    getProductBySlug,
    getPackageById,
    getAccessoriesByCategory,
    fetchProducts
  }
})
