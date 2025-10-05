import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ChooseSec from './components/ChooseSec'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="h-full w-full">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us Section */}
      <ChooseSec />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Footer Section */}
      <Footer />

    </div>
  )
}

export default App
