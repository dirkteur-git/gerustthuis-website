<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { loginSchema } from '@/composables/useFormValidation'
import { useAuthStore } from '@/stores/auth'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Alert from '@/components/ui/Alert.vue'
import { RouterLink } from 'vue-router'

const authStore = useAuthStore()

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(loginSchema)
})

const { value: email } = useField('email')
const { value: password } = useField('password')
const rememberMe = ref(false)

const onSubmit = handleSubmit(async (values) => {
  await authStore.login(values.email, values.password)
})
</script>

<template>
  <form @submit="onSubmit" class="space-y-4">
    <Alert v-if="authStore.error" variant="error" class="mb-4">
      {{ authStore.error }}
    </Alert>

    <Input
      v-model="email"
      label="E-mailadres"
      type="email"
      autocomplete="email"
      required
      :error="errors.email"
    />

    <Input
      v-model="password"
      label="Wachtwoord"
      type="password"
      autocomplete="current-password"
      required
      :error="errors.password"
    />

    <div class="flex items-center justify-between">
      <Checkbox v-model="rememberMe">
        Onthoud mij
      </Checkbox>
      <RouterLink to="/wachtwoord-vergeten" class="text-sm text-primary hover:underline">
        Wachtwoord vergeten?
      </RouterLink>
    </div>

    <Button
      type="submit"
      variant="primary"
      full-width
      :loading="authStore.loading"
    >
      Inloggen
    </Button>
  </form>
</template>
