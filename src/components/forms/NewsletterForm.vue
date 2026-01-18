<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import { CheckCircle } from 'lucide-vue-next'

const schema = z.object({
  email: z.string()
    .min(1, 'E-mail is verplicht')
    .email('Voer een geldig e-mailadres in')
})

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: toTypedSchema(schema)
})

const { value: email } = useField('email')

const loading = ref(false)
const submitted = ref(false)

const onSubmit = handleSubmit(async (values) => {
  loading.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    submitted.value = true
    resetForm()
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <div v-if="submitted" class="flex items-center gap-2 text-success">
      <CheckCircle class="w-5 h-5" />
      <span>Je bent aangemeld!</span>
    </div>

    <form v-else @submit="onSubmit" class="flex flex-col sm:flex-row gap-3">
      <div class="flex-1">
        <Input
          v-model="email"
          type="email"
          placeholder="Je e-mailadres"
          :error="errors.email"
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        :loading="loading"
      >
        Aanmelden
      </Button>
    </form>
  </div>
</template>
