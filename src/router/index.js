import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import Service2View from '../views/Service2View.vue'
import PortofolioView from '../views/PortofolioView.vue'
import Portofolio2View from '../views/Portofolio2View.vue'
import Portofolio3View from '../views/Portofolio3View.vue'
import ReviewView from '../views/ReviewView.vue'
import TeamView from '../views/TeamView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/service',
      name: 'service',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ServiceView
    },
    {
      path: '/service2',
      name: 'service2',
      component: Service2View
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: PortofolioView
    },
    {
      path: '/portofolio2',
      name: 'portofolio2',
      component: Portofolio2View
    },
    {
      path: '/portofolio3',
      name: 'portofolio3',
      component: Portofolio3View
    },
    {
      path: '/reviews',
      name: 'Review',
      component: ReviewView
    },
    {
      path: '/team',
      name: 'Team',
      component: TeamView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView
    }
  ]
})

export default router
