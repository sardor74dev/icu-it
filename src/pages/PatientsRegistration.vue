<template>
    <div id="registerPage">
        <div class="md:flex md:items-center md:justify-between pl-[80px] pr-4 mb-8">
            <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Register New Patient
                </h2>
            </div>
        </div>
        
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="pl-[80px] pr-4 py-5 border-b border-gray-200">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Patient Information
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Fill in all required fields to register a new patient.
                </p>
            </div>
            <div class="pl-[80px] pr-4 py-5">
                <form id="patientForm" class="space-y-8 divide-y divide-gray-200">
                    <div class="space-y-8 divide-y divide-gray-200">
                        <div>
                            <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div class="sm:col-span-3">
                                    <label for="fullName" class="block text-sm font-medium text-gray-700">
                                        Full Name <span class="text-red-500">*</span>
                                    </label>
                                    <div class="mt-1">
                                        <input type="text" name="fullName" id="fullName" autocomplete="name" required
                                            class="py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md">
                                    </div>
                                </div>
                                
                                <div class="sm:col-span-3">
                                    <label for="gender" class="block text-sm font-medium text-gray-700">
                                        Gender <span class="text-red-500">*</span>
                                    </label>
                                    <div class="mt-1">
                                        <select id="gender" name="gender" required
                                            class="py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md">
                                            <option value="">Select gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="sm:col-span-2">
                                    <label for="age" class="block text-sm font-medium text-gray-700">
                                        Age <span class="text-red-500">*</span>
                                    </label>
                                    <div class="mt-1">
                                        <input type="number" name="age" id="age" min="0" max="120" required
                                            class="py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md">
                                    </div>
                                </div>
                                
                                <div class="sm:col-span-2">
                                    <label for="arrivalDate" class="block text-sm font-medium text-gray-700">
                                        Arrival Date <span class="text-red-500">*</span>
                                    </label>
                                    <div class="mt-1">
                                        <input type="date" name="arrivalDate" id="arrivalDate" required
                                            class="py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md">
                                    </div>
                                </div>
                                
                                <div class="sm:col-span-2">
                                    <label for="arrivalTime" class="block text-sm font-medium text-gray-700">
                                        Arrival Time <span class="text-red-500">*</span>
                                    </label>
                                    <div class="mt-1">
                                        <input type="time" name="arrivalTime" id="arrivalTime" required
                                            class="py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md">
                                    </div>
                                </div>
                                
                                <div class="sm:col-span-3">
                                    <label for="diagnosis" class="block text-sm font-medium text-gray-700">
                                        Primary Diagnosis <span class="text-red-500">*</span>
                                    </label>
                                    <div class="mt-1">
                                        <input type="text" name="diagnosis" id="diagnosis" required
                                            class="py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md">
                                    </div>
                                </div>
                                
                                <div class="sm:col-span-3">
                                    <label for="roomNumber" class="block text-sm font-medium text-gray-700">
                                        Room/Bed Number <span class="text-red-500">*</span>
                                    </label>
                                    <div class="mt-1">
                                        <input type="text" name="roomNumber" id="roomNumber" required
                                            class="py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md">
                                    </div>
                                </div>
                                
                                <div class="sm:col-span-6">
                                    <label for="anamnesis" class="block text-sm font-medium text-gray-700">
                                        Anamnesis / Initial Condition <span class="text-red-500">*</span>
                                    </label>
                                    <div class="mt-1">
                                        <textarea id="anamnesis" name="anamnesis" rows="4" required
                                            class="py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
                                    </div>
                                    <p class="mt-2 text-sm text-gray-500">
                                        Provide detailed information about the patient's condition, symptoms, and medical history.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pt-5">
                        <div class="flex justify-end">
                            <button type="button" id="cancelPatientBtn" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Cancel
                            </button>
                            <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Register Patient
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>