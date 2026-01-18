<script setup>
import { useRoute, RouterLink } from 'vue-router'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import CTASection from '@/components/blocks/CTASection.vue'
import { ChevronRight, Clock, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-vue-next'

const route = useRoute()

// Mock blog post data
const post = {
  slug: route.params.slug,
  title: '5 tips om als mantelzorger goed voor jezelf te zorgen',
  excerpt: 'Mantelzorgen is zwaar werk. Met deze tips zorg je niet alleen goed voor je naaste, maar ook voor jezelf.',
  category: 'tips',
  date: '2026-01-15',
  readTime: 5,
  author: {
    name: 'Lisa Bakker',
    role: 'Hoofd Klantsucces'
  },
  content: `
    <p class="lead">Als mantelzorger geef je veel van jezelf. Maar om goed voor een ander te kunnen zorgen, moet je ook goed voor jezelf zorgen. Hier zijn vijf praktische tips.</p>

    <h2>1. Plan tijd voor jezelf in</h2>
    <p>Het klinkt misschien egoïstisch, maar het is essentieel. Plan vaste momenten in je week voor activiteiten die jou energie geven. Of het nu een wandeling is, een kopje koffie met een vriend, of gewoon een uurtje lezen - maak het een prioriteit.</p>

    <h2>2. Vraag om hulp</h2>
    <p>Je hoeft het niet alleen te doen. Vraag familie, vrienden of buren om af en toe iets over te nemen. Veel mensen willen graag helpen, maar weten niet hoe. Geef ze concrete taken.</p>

    <h2>3. Gebruik technologie</h2>
    <p>Slimme technologie zoals GerustThuis kan een deel van de dagelijkse zorgen wegnemen. In plaats van elke dag te bellen om te checken of alles goed gaat, krijg je automatisch een update. Dat scheelt tijd én mentale energie.</p>

    <h2>4. Praat erover</h2>
    <p>Deel je ervaringen met andere mantelzorgers. Of dat nu online is, in een praatgroep, of met een professional - het helpt om je verhaal te delen. Je bent niet de enige die dit meemaakt.</p>

    <h2>5. Herken de signalen</h2>
    <p>Let op waarschuwingssignalen van overbelasting: slaapproblemen, prikkelbaarheid, fysieke klachten. Als je deze herkent, neem actie. Praat met je huisarts of zoek professionele ondersteuning.</p>

    <h2>Tot slot</h2>
    <p>Mantelzorgen is geen sprint, maar een marathon. Zorg dat je het vol kunt houden door ook goed voor jezelf te zorgen. Dat is geen luxe, maar noodzaak.</p>
  `
}

const relatedPosts = [
  {
    slug: 'gesprek-ouder-monitoring',
    title: 'Het gesprek aangaan: zo bespreek je monitoring met je ouder',
    category: 'tips'
  },
  {
    slug: 'verhaal-familie-jansen',
    title: 'Hoe de familie Jansen rust vond met GerustThuis',
    category: 'verhalen'
  }
]

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
    <!-- Breadcrumb -->
    <div class="bg-gray-50 py-4">
      <div class="container">
        <nav class="flex items-center gap-2 text-sm text-gray-500">
          <RouterLink to="/" class="hover:text-primary">Home</RouterLink>
          <ChevronRight class="w-4 h-4" />
          <RouterLink to="/blog" class="hover:text-primary">Blog</RouterLink>
          <ChevronRight class="w-4 h-4" />
          <span class="text-gray-900 truncate">{{ post.title }}</span>
        </nav>
      </div>
    </div>

    <!-- Article -->
    <article class="py-12 md:py-16">
      <div class="container max-w-3xl">
        <!-- Header -->
        <header class="mb-8">
          <Badge variant="primary" class="mb-4 capitalize">{{ post.category }}</Badge>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ post.title }}
          </h1>
          <p class="text-xl text-gray-600 mb-6">{{ post.excerpt }}</p>

          <div class="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span class="text-gray-500 font-medium">{{ post.author.name.split(' ').map(n => n[0]).join('') }}</span>
              </div>
              <div>
                <p class="font-medium text-gray-900">{{ post.author.name }}</p>
                <p class="text-gray-500">{{ post.author.role }}</p>
              </div>
            </div>
            <div class="flex items-center gap-1">
              <Calendar class="w-4 h-4" />
              {{ formatDate(post.date) }}
            </div>
            <div class="flex items-center gap-1">
              <Clock class="w-4 h-4" />
              {{ post.readTime }} min leestijd
            </div>
          </div>
        </header>

        <!-- Featured image -->
        <div class="aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-8 flex items-center justify-center">
          <span class="text-gray-500">Afbeelding</span>
        </div>

        <!-- Content -->
        <div class="prose prose-lg max-w-none" v-html="post.content" />

        <!-- Share -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex items-center gap-4">
            <span class="font-medium text-gray-900">Deel dit artikel:</span>
            <div class="flex gap-2">
              <button class="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Facebook class="w-5 h-5 text-gray-600" />
              </button>
              <button class="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Twitter class="w-5 h-5 text-gray-600" />
              </button>
              <button class="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Linkedin class="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Related Posts -->
    <section class="py-12 md:py-16 bg-gray-50">
      <div class="container max-w-3xl">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Gerelateerde artikelen</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <RouterLink
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.slug"
            :to="`/blog/${relatedPost.slug}`"
          >
            <Card hover>
              <Badge size="sm" class="mb-3 capitalize">{{ relatedPost.category }}</Badge>
              <h3 class="font-bold text-gray-900">{{ relatedPost.title }}</h3>
            </Card>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>

<style scoped>
.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
}

.prose p {
  @apply text-gray-600 mb-4;
}

.prose .lead {
  @apply text-xl text-gray-700 mb-6;
}
</style>
