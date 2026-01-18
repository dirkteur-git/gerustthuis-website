<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Card from '@/components/ui/Card.vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import { Search, Clock, ArrowRight } from 'lucide-vue-next'

const searchQuery = ref('')
const activeCategory = ref('alle')

const categories = ['alle', 'tips', 'verhalen', 'technologie', 'nieuws']

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
    <section class="py-16 md:py-24 bg-gradient-to-br from-background to-primary/5">
      <div class="container">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tips & verhalen voor mantelzorgers
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Praktische tips, inspirerende verhalen en nieuws over GerustThuis.
          </p>

          <!-- Search -->
          <div class="relative max-w-md">
            <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Zoek artikelen..."
              class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section v-if="featuredPost && !searchQuery" class="py-12 md:py-16">
      <div class="container">
        <RouterLink :to="`/blog/${featuredPost.slug}`">
          <Card hover class="grid md:grid-cols-2 gap-6">
            <div class="aspect-[16/9] md:aspect-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
              <span class="text-gray-500">Afbeelding</span>
            </div>
            <div class="flex flex-col justify-center">
              <Badge variant="primary" class="w-fit mb-4">Uitgelicht</Badge>
              <h2 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {{ featuredPost.title }}
              </h2>
              <p class="text-gray-600 mb-4">{{ featuredPost.excerpt }}</p>
              <div class="flex items-center gap-4 text-sm text-gray-500">
                <span>{{ formatDate(featuredPost.date) }}</span>
                <span class="flex items-center gap-1">
                  <Clock class="w-4 h-4" />
                  {{ featuredPost.readTime }} min
                </span>
              </div>
            </div>
          </Card>
        </RouterLink>
      </div>
    </section>

    <!-- Categories & Posts -->
    <section class="py-12 md:py-16 bg-gray-50">
      <div class="container">
        <!-- Category filters -->
        <div class="flex gap-2 flex-wrap mb-8">
          <button
            v-for="cat in categories"
            :key="cat"
            class="px-4 py-2 rounded-lg font-medium transition-colors capitalize"
            :class="[
              activeCategory === cat
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            ]"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Posts grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RouterLink
            v-for="post in filteredPosts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
          >
            <Card hover class="h-full flex flex-col">
              <div class="aspect-[16/9] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span class="text-gray-400">Afbeelding</span>
              </div>
              <Badge
                :variant="post.category === 'nieuws' ? 'primary' : 'default'"
                size="sm"
                class="w-fit mb-3 capitalize"
              >
                {{ post.category }}
              </Badge>
              <h3 class="text-lg font-bold text-gray-900 mb-2 flex-1">
                {{ post.title }}
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                {{ post.excerpt }}
              </p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span>{{ formatDate(post.date) }}</span>
                <span class="flex items-center gap-1">
                  <Clock class="w-4 h-4" />
                  {{ post.readTime }} min
                </span>
              </div>
            </Card>
          </RouterLink>
        </div>

        <p v-if="filteredPosts.length === 0" class="text-center py-12 text-gray-500">
          Geen artikelen gevonden.
        </p>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 md:py-24">
      <div class="container max-w-2xl text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Blijf op de hoogte
        </h2>
        <p class="text-gray-600 mb-8">
          Ontvang maandelijks tips en nieuws voor mantelzorgers.
        </p>
        <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Je e-mailadres"
            class="flex-1"
          />
          <Button variant="primary">
            Aanmelden
          </Button>
        </form>
      </div>
    </section>
  </div>
</template>
