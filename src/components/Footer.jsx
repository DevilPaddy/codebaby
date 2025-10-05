import React from 'react'
import { IoSchoolSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="w-full h-screen">
            {/* Top Footer CTA */}
            <div className=" md:h-[50%] w-full bg-blue-700 text-zinc-50 flex flex-col items-center pb-12">
                <h4 className="footer-title-text pt-14 mb-4 font-semibold">
                    Ready to Start Your IELTS Journey?
                </h4>
                <p className="footer-para mb-14 max-w-xl text-center text-gray-100">
                    Join thousands of successful students who achieved their desired band scores with our proven methods.
                </p>

                <div className="log flex items-center justify-center gap-4">
                    <div className="trial-btn text-[3.6vw] font-semibold md:text-[2.6vh] md:font-medium">
                        <a
                            href="https://babycode.org/"
                            className="px-4 py-2 md:px-8 md:py-3 bg-zinc-50 hover:bg-blue-50 border-2 border-zinc-50 rounded-lg text-blue-600 duration-150 ease-in-out"
                        >
                            Start Free Trial
                        </a>
                    </div>
                    <div className="courses-btn text-[3.6vw] font-semibold md:text-[2.6vh] md:font-medium">
                        <a
                            href="https://babycode.org/"
                            className="px-4 py-2 md:px-8 md:py-3 hover:bg-blue-800 rounded-lg text-zinc-50 border-2 border-zinc-50 duration-150 ease-in-out"
                        >
                            Book a Consultation
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <footer className="footer h-auto md:h-[50%] bg-gray-800 text-gray-400">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">

                        {/* Brand Info */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-600 text-white p-2 rounded-lg mr-2">
                                    <IoSchoolSharp />
                                </div>
                                <span className="font-bold text-white">
                                    AQUILA <span className="text-blue-500">IELTS</span>
                                </span>
                            </div>
                            <span className="text-gray-400 mb-4 block">
                                Your pathway to IELTS success with expert guidance and cutting-edge technology.
                            </span>
                            <div className="flex space-x-4 mt-2">
                                <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="card-heder mb-4 text-white">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white">Home</a></li>
                                <li><a href="#" className="hover:text-white">Courses</a></li>
                                <li><a href="#" className="hover:text-white">Mock Tests</a></li>
                                <li><a href="#" className="hover:text-white">Resources</a></li>
                            </ul>
                        </div>

                        {/* IELTS Sections */}
                        <div>
                            <h3 className="card-heder mb-4 text-white">IELTS Sections</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white">Listening</a></li>
                                <li><a href="#" className="hover:text-white">Reading</a></li>
                                <li><a href="#" className="hover:text-white">Writing</a></li>
                                <li><a href="#" className="hover:text-white">Speaking</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="card-heder mb-4 text-white">Contact Us</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <FaMapMarkerAlt color="#3B82F6" />
                                    <span>23 Education St, Learning City</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IoCall color="#3B82F6" />
                                    <span>+91 (555) 123-4567</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MdEmail color="#3B82F6" />
                                    <span>info@aquilaielts.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-gray-700 pt-6 pb-6 text-center text-gray-400">
                        <p className="footer-para text-gray-600">
                            &copy; 2025 Aquila IELTS Institute. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
