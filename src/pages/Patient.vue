<template>
    <div id="patientDetailPage">
        <div class="md:flex md:items-center md:justify-between pl-[80px] pr-4 mb-8">
            <div class="flex-1 min-w-0">
                <h2 id="patientNameTitle" class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Patient Details
                </h2>
            </div>
            <div class="mt-4 flex md:mt-0 md:ml-4">
                <button type="button" id="backToPatientsBtn" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <i class="fas fa-arrow-left mr-2"></i> Back to Patients
                </button>
                <button type="button" id="editPatientBtn" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <i class="fas fa-edit mr-2"></i> Edit
                </button>
            </div>
        </div>
        
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="pl-[80px] pr-4 py-5 border-b border-gray-200">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Patient Information
                </h3>
                <p id="patientAdmittedBy" class="mt-1 max-w-2xl text-sm text-gray-500">
                    Admitted by Dr. Smith on June 12, 2023 at 14:30
                </p>
            </div>
            <div class="pl-[80px] pr-4 py-5">
                <div class="grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-2">
                    <div>
                        <h4 class="text-lg font-medium text-gray-900 mb-4">Basic Information</h4>
                        <div class="space-y-4">
                            <div>
                                <p class="text-sm font-medium text-gray-500">Full Name</p>
                                <p id="detailFullName" class="mt-1 text-sm text-gray-900">John Doe</p>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-500">Gender</p>
                                <p id="detailGender" class="mt-1 text-sm text-gray-900">Male</p>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-500">Age</p>
                                <p id="detailAge" class="mt-1 text-sm text-gray-900">45</p>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-500">Room/Bed Number</p>
                                <p id="detailRoomNumber" class="mt-1 text-sm text-gray-900">ICU-203</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-medium text-gray-900 mb-4">Medical Information</h4>
                        <div class="space-y-4">
                            <div>
                                <p class="text-sm font-medium text-gray-500">Primary Diagnosis</p>
                                <p id="detailDiagnosis" class="mt-1 text-sm text-gray-900">Acute Myocardial Infarction</p>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-500">Admission Date & Time</p>
                                <p id="detailAdmissionDateTime" class="mt-1 text-sm text-gray-900">June 12, 2023 at 14:30</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="sm:col-span-2">
                        <h4 class="text-lg font-medium text-gray-900 mb-4">Anamnesis / Initial Condition</h4>
                        <div class="bg-gray-50 p-4 rounded-md">
                            <p id="detailAnamnesis" class="text-sm text-gray-900">
                                Patient presented with severe chest pain radiating to the left arm, lasting for approximately 45 minutes. History of hypertension and hyperlipidemia. ECG showed ST-segment elevation in leads II, III, and aVF. Troponin levels elevated. Immediate PCI performed with stent placement in the right coronary artery.
                            </p>
                        </div>
                    </div>
                    
                    <div class="sm:col-span-2">
                        <h4 class="text-lg font-medium text-gray-900 mb-4">Current Status</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-white border border-gray-200 rounded-lg p-4">
                                <p class="text-sm font-medium text-gray-500">Heart Rate</p>
                                <p class="mt-1 text-xl font-semibold text-gray-900">78 <span class="text-sm font-normal">bpm</span></p>
                            </div>
                            <div class="bg-white border border-gray-200 rounded-lg p-4">
                                <p class="text-sm font-medium text-gray-500">Blood Pressure</p>
                                <p class="mt-1 text-xl font-semibold text-gray-900">120/80 <span class="text-sm font-normal">mmHg</span></p>
                            </div>
                            <div class="bg-white border border-gray-200 rounded-lg p-4">
                                <p class="text-sm font-medium text-gray-500">Oxygen Saturation</p>
                                <p class="mt-1 text-xl font-semibold text-gray-900">98 <span class="text-sm font-normal">%</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>