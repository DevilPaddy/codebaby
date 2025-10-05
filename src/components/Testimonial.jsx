import React from 'react'

const Testimonial = () => {
    return (
        <div class="py-16 bg-gray-100">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="title-text text-gray-800 mb-4">What Our Students Say</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">Hear from students who achieved their target band scores with our help.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="testimonial-card bg-white p-6 rounded-xl shadow-md">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                                <span class="text-blue-800 font-bold">SR</span>
                            </div>
                            <div>
                                <h4 class="card-heder text-gray-800">Sarah Johnson</h4>
                                <p class="card-para text-gray-600 text-sm">Band 8.5 Achieved</p>
                            </div>
                        </div>
                        <div class="mb-4">⭐⭐⭐⭐⭐</div>
                        <p class="card-para text-gray-600 italic">"The speaking practice sessions were incredibly helpful. My tutor provided detailed feedback that helped me improve from Band 6.5 to 8.5 in just 2 months!"</p>
                    </div>

                    <div class="testimonial-card bg-white p-6 rounded-xl shadow-md">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                                <span class="text-green-800 font-bold">AR</span>
                            </div>
                            <div>
                                <h4 class="card-heder text-gray-800">Ahmed Rahman</h4>
                                <p class="card-para text-gray-600 text-sm">Band 7.5 Achieved</p>
                            </div>
                        </div>
                        <div class="mb-4">⭐⭐⭐⭐⭐</div>
                        <p class="card-para text-gray-600 italic">"The mock tests were exactly like the real exam. The detailed feedback helped me identify my weak areas and focus my preparation effectively."</p>
                    </div>

                    <div class="testimonial-card bg-white p-6 rounded-xl shadow-md">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                                <span class="text-purple-800 font-bold">ML</span>
                            </div>
                            <div>
                                <h4 class="card-heder text-gray-800">Maria Lopez</h4>
                                <p class="card-para text-gray-600 text-sm">Band 8.0 Achieved</p>
                            </div>
                        </div>
                        <div class="mb-4">⭐⭐⭐⭐⭐</div>
                        <p class="card-para text-gray-600 italic">"The AI band score predictor was surprisingly accurate. It helped me understand exactly where I stood and what I needed to improve to reach my target score."</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial