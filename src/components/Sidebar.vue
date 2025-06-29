<script>
import { logout } from '../utils/auth'

export default {
    data(){
        return {
            menu: [
                { title: 'Dashboard', slug: '/' },
                { title: 'Patients', slug: '/patients' },
                { title: 'Register Patient', slug: '/patients-reg' },
            ],
            is_open: false
        }
    },
    methods: {
        toggleSidebar(){
            this.is_open = !this.is_open
        },
        handleLogout(){
            logout()
            this.$router.push('/login')
        }
    }
}
</script>

<template>
   <div class="absolute top-0 left-0 h-full flex">
        <!-- Sidebar -->
        <div
            :class="[
                'transition-all duration-300 ease-in-out bg-gray-800 text-white p-4',
                is_open ? 'w-64' : 'w-16'
            ]"
        >
            <!-- Toggle Button -->
            <button @click="toggleSidebar" class="mb-6 focus:outline-none">
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                >
                <path
                    v-if="!is_open"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                    v-else
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>

            <!-- Navigation Items -->
            <nav>
                <ul>
                    <li
                        v-for="item in menu"
                        :key="item"
                        class="mb-4 flex items-center space-x-2 hover:text-gray-300 cursor-pointer"
                    >
                        <!-- <span class="w-6 h-6 bg-gray-700 rounded"></span> -->
                        <a v-if="is_open" :href="item.slug">{{ item.title }}</a>
                    </li>
                    <li class="mb-4 flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
                        <button v-if="is_open" @click="handleLogout()" id="logoutBtn" class="mt-4 w-full flex items-center justify-center px-4 py-2 text-sm text-red-600 hover:text-red-800">
                            <!-- <i class="fas fa-sign-out-alt mr-2"></i> -->
                            <span class="sidebar-text">Logout</span>
                        </button>
                    </li>
                </ul>
            </nav>

        </div>

        <!-- Main Content -->
        <div class="flex-1 p-6">
            <slot />
        </div>
    </div>
</template>