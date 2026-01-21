<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Card from '@/components/ui/Card.vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import { Search, Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-vue-next'

const searchQuery = ref('')
const activeCategory = ref('alle')

const categories = ['alle', 'tips', 'verhalen', 'technologie', 'nieuws']

const categoryColors = {
  tips: 'blue',
  verhalen: 'rose',
  technologie: 'purple',
  nieuws: 'emerald'
}

const posts = ref([
  {
    slug: '5-tips-voor-mantelzorgers',
    title: '5 tips om als mantelzorger goed voor jezelf te zorgen',
    excerpt: 'Mantelzorgen is zwaar werk. Met deze tips zorg je niet alleen goed voor je naaste, maar ook voor jezelf.',
    category: 'tips',
    date: '2026-01-15',
    readTime: 5,
    featured: true
  },
  {
    slug: 'verhaal-familie-jansen',
    title: 'Hoe de familie Jansen rust vond met GerustThuis',
    excerpt: 'Na jaren van dagelijkse telefoontjes en ongerustheid, vond de familie Jansen eindelijk een oplossing.',
    category: 'verhalen',
    date: '2026-01-10',
    readTime: 4,
    featured: false
  },
  {
    slug: 'hoe-ai-dagritme-leert',
    title: 'Hoe onze AI het dagritme van je ouder leert kennen',
    excerpt: 'Een kijkje achter de schermen: zo werkt de technologie die GerustThuis mogelijk maakt.',
    category: 'technologie',
    date: '2026-01-05',
    readTime: 7,
    featured: false
  },
  {
    slug: 'nieuw-valdetectie-radar',
    title: 'Nieuw: Valdetectie met radar-technologie',
    excerpt: 'We introduceren een nieuwe sensor die vallen detecteert zonder camera - met behulp van radar.',
    category: 'nieuws',
    date: '2025-12-20',
    readTime: 3,
    featured: false
  },
  {
    slug: 'gesprek-ouder-monitoring',
    title: 'Het gesprek aangaan: zo bespreek je monitoring met je ouder',
    excerpt: 'Tips voor een goed gesprek over zelfstandigheid, veiligheid en monitoring.',
    category: 'tips',
    date: '2025-12-15',
    readTime: 6,
    featured: false
  }
])

const filteredPosts = computed(() => {
  let result = posts.value

  if (activeCategory.value !== 'alle') {
    result = result.filter(p => p.category === activeCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.excerpt.toLowerCase().includes(query)
    )
  }

  return result
})

const featuredPost = computed(() => posts.value.find(p => p.featured))

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/5 overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div class="absolute bottom-10 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div class="container relative">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-semibold text-sm mb-6 shadow-sm border border-primary/10">
            <BookOpen class="w-4 h-4" />
            Blog
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Voor mantelzorgers
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Praktische tips, inspirerende verhalen en nieuws over GerustThuis.
          </p>

          <!-- Search -->
          <div class="relative max-w-md mx-auto">
            <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Zoek artikelen..."
              class="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white shadow-sm text-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section v-if="featuredPost && !searchQuery" class="py-16 md:py-20 bg-white">
      <div class="container">
        <div class="max-w-5xl mx-auto">
          <RouterLink :to="`/blog/${featuredPost.slug}`" class="group block">
            <div class="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-10 border border-primary/10 hover:shadow-xl transition-all duration-300">
              <div class="aspect-[16/9] md:aspect-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center min-h-[200px]">
                <span class="text-gray-500">Afbeelding</span>
              </div>
              <div class="flex flex-col justify-center">
                <Badge variant="primary" class="w-fit mb-4">Uitgelicht</Badge>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {{ featuredPost.title }}
                </h2>
                <p class="text-gray-600 text-lg mb-6">{{ featuredPost.excerpt }}</p>
                <div class="flex items-center gap-4 text-sm text-gray-500">
                  <span>{{ formatDate(featuredPost.date) }}</span>
                  <span class="flex items-center gap-1">
                    <Clock class="w-4 h-4" />
                    {{ featuredPost.readTime }} min
                  </span>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Categories & Posts -->
    <section class="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div class="container">
        <div class="max-w-6xl mx-auto">
          <!-- Category filters -->
          <div class="flex gap-3 flex-wrap mb-12 justify-center">
            <button
              v-for="cat in categories"
              :key="cat"
              class="px-5 py-2.5 rounded-full font-semibold transition-all capitalize"
              :class="[
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              ]"
              @click="activeCategory = cat"
            >
              {{ cat }}
            </button>
          </div>

          <!-- Posts grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RouterLink
              v-for="post in filteredPosts"
              :key="post.slug"
              :to="`/blog/${post.slug}`"
              class="group"
            >
              <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div class="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <span class="text-gray-400">Afbeelding</span>
                </div>
                <div class="p-6 flex flex-col flex-1">
                  <div
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold w-fit mb-4 capitalize"
                    :class="{
                      'bg-blue-100 text-blue-700': categoryColors[post.category] === 'blue',
                      'bg-rose-100 text-rose-700': categoryColors[post.category] === 'rose',
                      'bg-purple-100 text-purple-700': categoryColors[post.category] === 'purple',
                      'bg-emerald-100 text-emerald-700': categoryColors[post.category] === 'emerald'
                    }"
                  >
                    {{ post.category }}
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors flex-1">
                    {{ post.title }}
                  </h3>
                  <p class="text-gray-600 mb-4">
                    {{ post.excerpt }}
                  </p>
                  <div class="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>{{ formatDate(post.date) }}</span>
                    <span class="flex items-center gap-1">
                      <Clock class="w-4 h-4" />
                      {{ post.readTime }} min
                    </span>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>

          <p v-if="filteredPosts.length === 0" class="text-center py-16 text-gray-500 text-lg">
            Geen artikelen gevonden.
          </p>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container">
        <div class="max-w-2xl mx-auto text-center">
          <span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
            Nieuwsbrief
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blijf op de hoogte
          </h2>
          <p class="text-xl text-gray-600 mb-10">
            Ontvang maandelijks tips en nieuws voor mantelzorgers.
          </p>
          <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Je e-mailadres"
              class="flex-1 px-5 py-4 border border-gray-200 rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <Button variant="primary" size="lg" class="shadow-lg shadow-primary/25">
              Aanmelden
            </Button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
