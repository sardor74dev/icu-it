<template>
    <header class="absolute w-full left-0 top-0 bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 id="pageTitle" class="text-lg font-semibold text-gray-900">Dashboard</h1>
            
            <div class="flex items-center space-x-4">
                <button class="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                    <i class="fas fa-bell"></i>
                </button>
                <button class="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                    <i class="fas fa-envelope"></i>
                </button>
                <button class="p-2 text-gray-500 hover:text-gray-700 focus:outline-none md:hidden" id="mobileMenuButton">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </header>
</template>