import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isMobileMenuOpen = ref(false)
  const isCartOpen = ref(false)
  const activeModal = ref(null)
  const notifications = ref([])

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false
  }

  function toggleCart() {
    isCartOpen.value = !isCartOpen.value
  }

  function openCart() {
    isCartOpen.value = true
  }

  function closeCart() {
    isCartOpen.value = false
  }

  function openModal(modalId) {
    activeModal.value = modalId
  }

  function closeModal() {
    activeModal.value = null
  }

  function addNotification(notification) {
    const id = Date.now()
    notifications.value.push({
      id,
      type: notification.type || 'info',
      title: notification.title,
      message: notification.message,
      duration: notification.duration || 5000
    })

    // Auto remove after duration
    if (notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(id)
      }, notification.duration || 5000)
    }

    return id
  }

  function removeNotification(id) {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  function showSuccess(message, title = 'Gelukt') {
    return addNotification({ type: 'success', title, message })
  }

  function showError(message, title = 'Fout') {
    return addNotification({ type: 'error', title, message })
  }

  function showWarning(message, title = 'Let op') {
    return addNotification({ type: 'warning', title, message })
  }

  function showInfo(message, title = 'Info') {
    return addNotification({ type: 'info', title, message })
  }

  return {
    isMobileMenuOpen,
    isCartOpen,
    activeModal,
    notifications,
    toggleMobileMenu,
    closeMobileMenu,
    toggleCart,
    openCart,
    closeCart,
    openModal,
    closeModal,
    addNotification,
    removeNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo
  }
})
