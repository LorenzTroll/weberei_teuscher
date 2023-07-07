import { createRouter, createWebHistory } from 'vue-router'

import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import VideoSection from '../components/VideoSection.vue'
import LottieSection from '../components/LottieSection.vue'
import NavSection from '../components/NavSection.vue'
import HookPhraseSection from '../components/HookPraseSection.vue'
import FabricCard from '../components/FabricCard.vue'
import FabricText from '../components/FabricText.vue'
import CardsOverview from '../components/CardsOverview.vue'
import ContactSection from '../components/ContactSection.vue'
import Footer from '../components/Footer.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      NavSection,
      LottieSection,
      VideoSection,
      HookPhraseSection,
      FabricCard,
      FabricText,
      CardsOverview,
      ContactSection,
      Footer,
    },
    {
      path: '/event/:id',
      name: 'fabric-details',
      props: true,
      component: EventDetailsView,
      NavSection,
      Footer,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: AboutView,
      NavSection,
      Footer,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
      NavSection,
      Footer,
    }
  ]
})

export default router
