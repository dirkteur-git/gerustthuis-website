<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { contactSchema } from '@/composables/useFormValidation'
import Input from '@/components/ui/Input.vue'
import Textarea from '@/components/ui/Textarea.vue'
import Select from '@/components/ui/Select.vue'
import Button from '@/components/ui/Button.vue'
import Alert from '@/components/ui/Alert.vue'

const emit = defineEmits(['submit', 'success'])

const submitted = ref(false)
const serverError = ref('')

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: toTypedSchema(contactSchema)
})

const { value: name } = useField('name')
const { value: email } = useField('email')
const { value: phone } = useField('phone')
const { value: subject } = useField('subject')
const { value: message } = useField('message')

const loading = ref(false)

const subjectOptions = [
  { value: 'algemeen', label: 'Algemene vraag' },
  { value: 'product', label: 'Vraag over producten' },
  { value: 'technisch', label: 'Technische ondersteuning' },
  { value: 'advies', label: 'Adviesgesprek aanvragen' },
  { value: 'anders', label: 'Anders' }
]

const onSubmit = handleSubmit(async (values) => {
  loading.value = true
  serverError.value = ''

  try {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    emit('submit', values)
    emit('success')
    submitted.value = true
    resetForm()
  } catch (error) {
    serverError.value = 'Er ging iets mis. Probeer het later opnieuw.'
  } finally {
    loading.value = false
  }
})

const reset = () => {
  submitted.value = false
  resetForm()
}
</script>

<template>
  <div>
    <Alert v-if="submitted" variant="success" class="mb-6">
      <strong>Bedankt voor je bericht!</strong>
      We nemen zo snel mogelijk contact met je op.
      <button @click="reset" class="block mt-2 text-sm underline">
        Nieuw bericht versturen
      </button>
    </Alert>

    <Alert v-if="serverError" variant="error" class="mb-6" dismissible @dismiss="serverError = ''">
      {{ serverError }}
    </Alert>

    <form v-if="!submitted" @submit="onSubmit" class="space-y-4">
      <div class="grid sm:grid-cols-2 gap-4">
        <Input
          v-model="name"
          label="Naam"
          required
          :error="errors.name"
        />
        <Input
          v-model="email"
          label="E-mail"
          type="email"
          required
          :error="errors.email"
        />
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <Input
          v-model="phone"
          label="Telefoon (optioneel)"
          type="tel"
          :error="errors.phone"
        />
        <Select
          v-model="subject"
          label="Onderwerp"
          :options="subjectOptions"
          required
          :error="errors.subject"
        />
      </div>

      <Textarea
        v-model="message"
        label="Bericht"
        :rows="5"
        required
        :error="errors.message"
      />

      <Button
        type="submit"
        variant="primary"
        :loading="loading"
      >
        Verstuur bericht
      </Button>
    </form>
  </div>
</template>
