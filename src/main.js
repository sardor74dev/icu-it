import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'

import Profile from './pages/Profile.vue'
import PatientsRegistration from './pages/PatientsRegistration.vue'
import Patients from './pages/Patients.vue'
import Patient from './pages/Patient.vue'
import Login from './pages/Login.vue'

import { isAuthenticated } from './utils/auth'

const routes = [
    {   
        path: '/',
        component: Profile,
        meta: { requiresAuth: true },
    },
    { path: '/login', component: Login },
    { path: '/patients-reg', component: PatientsRegistration },
    { path: '/patients', component: Patients },
    { path: '/patient', component: Patient },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !isAuthenticated()){
        next('/login')
    } else {
        next()
    }
})

createApp(App)
    .use(router)
    .mount('#app')
