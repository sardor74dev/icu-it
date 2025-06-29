<script>
import { login } from '../utils/auth'
// import { useRouter } from 'vue-router'

export default {
    methods: {
        handleLogin(){
            login()
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <div id="loginPage" class="min-h-screen flex items-center justify-center gradient-bg">
        <div class="bg-white rounded-lg p-8 card-shadow w-full max-w-md">
            <div class="text-center mb-8">
                <div class="flex justify-center mb-4">
                    <i class="fas fa-heartbeat text-5xl text-blue-600"></i>
                </div>
                <h1 class="text-3xl font-bold text-gray-800">CardioCare ICU</h1>
                <p class="text-gray-600 mt-2">Intensive Care & Cardiology Management</p>
            </div>
            
            <form id="loginForm" class="space-y-6">
                <div>
                    <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-user text-gray-400"></i>
                        </div>
                        <input type="text" id="username" name="username" required 
                            class="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 border">
                    </div>
                </div>
                
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input type="password" id="password" name="password" required 
                            class="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 border">
                    </div>
                </div>
                
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" 
                            class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                        <label for="remember-me" class="ml-2 block text-sm text-gray-700">Remember me</label>
                    </div>
                    
                    <div class="text-sm">
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
                    </div>
                </div>
                
                <div>
                    <button @click="handleLogin()" 
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Sign in
                    </button>
                </div>
            </form>
            
            <div class="mt-6 text-center text-sm text-gray-500">
                <p>Need help? Contact IT support at <span class="text-blue-600">support@cardiocare.com</span></p>
            </div>
        </div>
    </div>
</template>