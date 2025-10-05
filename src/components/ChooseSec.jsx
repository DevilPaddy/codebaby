import React from 'react'
import { CiMicrophoneOn } from "react-icons/ci";
import { FaRobot } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";

const ChooseSec = () => {
    return (
        <div className='h-auto w-full mt-14 mb-3 px-4 md:px-[14vh]'>
            <div className='text-center mb-8'>
                <h3 className='title-text'>Why Choose IELTS Aquila?</h3>
                <p className='max-w-2xl mx-auto text-zinc-700 md:leading-6.4'>Our comprehensive approach to IELTS preparation combines expert instruction with cutting-edge technology.</p>
            </div>

            <div className='card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                {/* card1 */}
                <div className="card bg-white p-6 rounded-xl shadow-md border border-zinc-200 ">
                    <div className="logo bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                        <CiMicrophoneOn size={32} color='#2563EB' />
                    </div>
                    <div className="heder mb-2"><h4 className='card-heder'>Speaking Practice</h4></div>
                    <div className="para"><p className='card-para leading-6'>One-on-one speaking sessions with expert tutors and AI-powered feedback.</p></div>
                </div>
                {/* card2 */}
                <div className="card bg-white p-6 rounded-xl shadow-md border border-zinc-200 ">
                    <div className="logo bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                        <FaPencil size={32} color='#16A34A' />
                    </div>
                    <div className="heder mb-2"><h4 className='card-heder'>Mock Tests</h4></div>
                    <div className="para"><p className='card-para leading-6'>Full-length simulated tests with detailed performance analysis.</p></div>
                </div>
                {/* card3 */}
                <div className="card bg-white p-6 rounded-xl shadow-md border border-zinc-200 ">
                    <div className="logo bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                        <FaRobot size={32} color='#9333EA' />
                    </div>
                    <div className="heder mb-2"><h4 className='card-heder'>AI Band Score</h4></div>
                    <div className="para"><p className='card-para leading-6'>Get instant band score predictions with our advanced AI technology.</p></div>
                </div>
                {/* card4 */}
                <div className="card bg-white p-6 rounded-xl shadow-md border border-zinc-200 ">
                    <div className="logo bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                        <BsGraphUp size={32} color='#DC2626' />
                    </div>
                    <div className="heder mb-2"><h4 className='card-heder'>Progress Tracking</h4></div>
                    <div className="para"><p className='card-para leading-6'>Monitor your improvement with detailed analytics and personalized insights.</p></div>
                </div>

            </div>
        </div>
    )
}

export default ChooseSec