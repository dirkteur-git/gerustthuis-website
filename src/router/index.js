import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'

const routes = [
  // Landing - redirect to particulier home
  {
    path: '/',
    redirect: '/particulier'
  },

  // Particulier routes
  {
    path: '/particulier',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'particulier-home',
        component: () => import('@/views/particulier/Home.vue')
      },
      {
        path: 'voor-wie',
        name: 'particulier-for-who',
        component: () => import('@/views/particulier/VoorWie.vue')
      },
      {
        path: 'hoe-het-werkt',
        name: 'particulier-how-it-works',
        component: () => import('@/views/particulier/HoeHetWerkt.vue')
      },
      {
        path: 'producten',
        name: 'particulier-products',
        component: () => import('@/views/particulier/Producten.vue')
      },
      {
        path: 'producten/:slug',
        name: 'particulier-product-detail',
        component: () => import('@/views/particulier/ProductDetail.vue')
      },
      {
        path: 'prijzen',
        name: 'particulier-pricing',
        component: () => import('@/views/particulier/Prijzen.vue')
      },
      {
        path: 'wachtlijst',
        name: 'particulier-waitlist',
        component: () => import('@/views/particulier/Waitlist.vue')
      }
    ]
  },

  // Shared routes
  {
    path: '/over-ons',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'about',
        component: () => import('@/views/shared/OverOns.vue')
      }
    ]
  },
  {
    path: '/contact',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'contact',
        component: () => import('@/views/shared/Contact.vue')
      }
    ]
  },
  {
    path: '/blog',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'blog',
        component: () => import('@/views/shared/Blog.vue')
      },
      {
        path: ':slug',
        name: 'blog-post',
        component: () => import('@/views/shared/BlogPost.vue')
      }
    ]
  },
  {
    path: '/veelgestelde-vragen',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'faq',
        component: () => import('@/views/shared/FAQ.vue')
      }
    ]
  },

  // Legal routes
  {
    path: '/privacy',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'privacy',
        component: () => import('@/views/legal/Privacy.vue')
      }
    ]
  },
  {
    path: '/voorwaarden',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'terms',
        component: () => import('@/views/legal/Voorwaarden.vue')
      }
    ]
  },
  {
    path: '/cookies',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'cookies',
        component: () => import('@/views/legal/Cookies.vue')
      }
    ]
  },
  {
    path: '/garantie',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'warranty',
        component: () => import('@/views/legal/Garantie.vue')
      }
    ]
  },
  {
    path: '/retourneren',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'returns',
        component: () => import('@/views/legal/Retourneren.vue')
      }
    ]
  },

  // Checkout routes
  {
    path: '/checkout',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'checkout',
        component: () => import('@/views/checkout/Checkout.vue')
      },
      {
        path: 'succes',
        name: 'checkout-success',
        component: () => import('@/views/checkout/CheckoutSuccess.vue')
      }
    ]
  },

  // Legacy redirects (for backwards compatibility)
  { path: '/hoe-het-werkt', redirect: '/particulier/hoe-het-werkt' },
  { path: '/producten', redirect: '/particulier/producten' },
  { path: '/prijzen', redirect: '/particulier/prijzen' },
  { path: '/wachtlijst', redirect: '/particulier/wachtlijst' },

  // Login redirect to cloud app
  { path: '/login', redirect: () => {
    window.location.href = 'https://app.gerustthuis.nl/login'
    return '/particulier'
  }},

  // 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
