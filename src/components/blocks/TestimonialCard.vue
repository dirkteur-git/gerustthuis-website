<script setup>
import { Quote } from 'lucide-vue-next'
import Card from '@/components/ui/Card.vue'
import Avatar from '@/components/ui/Avatar.vue'

defineProps({
  quote: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  relation: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <Card class="h-full flex flex-col">
    <Quote class="w-8 h-8 text-secondary mb-4" />
    <blockquote class="text-gray-700 text-lg mb-6 flex-1">
      "{{ quote }}"
    </blockquote>
    <div class="flex items-center gap-3">
      <Avatar :src="avatar" :initials="name.split(' ').map(n => n[0]).join('')" />
      <div>
        <p class="font-semibold text-gray-900">{{ name }}</p>
        <p class="text-sm text-gray-500">{{ relation }}</p>
      </div>
    </div>
  </Card>
</template>
