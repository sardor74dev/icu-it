<template>
    <!-- Page Content -->
    <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <!-- Dashboard Page -->
        <div id="dashboardPage">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="bg-white rounded-lg shadow p-6">
                    <div class="flex items-center">
                        <div class="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                            <i class="fas fa-procedures"></i>
                        </div>
                        <div>
                            <p class="text-sm font-medium text-gray-500">Current Patients</p>
                            <p id="currentPatientsCount" class="text-2xl font-semibold text-gray-900">0</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow p-6">
                    <div class="flex items-center">
                        <div class="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                            <i class="fas fa-heartbeat"></i>
                        </div>
                        <div>
                            <p class="text-sm font-medium text-gray-500">Cardiac Cases</p>
                            <p id="cardiacCasesCount" class="text-2xl font-semibold text-gray-900">0</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow p-6">
                    <div class="flex items-center">
                        <div class="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
                            <i class="fas fa-bed"></i>
                        </div>
                        <div>
                            <p class="text-sm font-medium text-gray-500">Available Beds</p>
                            <p id="availableBedsCount" class="text-2xl font-semibold text-gray-900">12</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow p-6">
                    <div class="flex items-center">
                        <div class="p-3 rounded-full bg-red-100 text-red-600 mr-4">
                            <i class="fas fa-user-md"></i>
                        </div>
                        <div>
                            <p class="text-sm font-medium text-gray-500">On Duty Doctors</p>
                            <p id="doctorsCount" class="text-2xl font-semibold text-gray-900">5</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div class="bg-white rounded-lg shadow p-6 lg:col-span-2">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-medium text-gray-900">Recent Admissions</h2>
                        <a href="#" class="text-sm text-blue-600 hover:text-blue-500">View all</a>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admitted</th>
                                </tr>
                            </thead>
                            <tbody id="recentPatientsTable" class="bg-white divide-y divide-gray-200">
                                <!-- Will be populated by JavaScript -->
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow p-6">
                    <h2 class="text-lg font-medium text-gray-900 mb-4">Critical Alerts</h2>
                    <div id="alertsContainer" class="space-y-4">
                        <div class="p-4 bg-red-50 border-l-4 border-red-500 rounded-r">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-exclamation-circle text-red-500"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm text-red-700">
                                        Patient <span class="font-medium">John Smith</span> in Room 203 has critical BP levels.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-exclamation-triangle text-yellow-500"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm text-yellow-700">
                                        Patient <span class="font-medium">Sarah Johnson</span> needs immediate attention.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-info-circle text-blue-500"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm text-blue-700">
                                        New patient <span class="font-medium">Michael Brown</span> has been admitted.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>