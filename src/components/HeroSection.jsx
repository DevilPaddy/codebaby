import React from 'react'

const HeroSection = () => {
  return (
    <div className="heroSection h-[100%] w-full px-2 md:px-12">
      <div className="hero-content flex flex-col md:flex-row md:justify-start items-center md:items-start">
        
        {/* Text Section */}
        <div className="hero-text px-4 mt-12 md:mt-22 w-full md:w-[55%] flex flex-col items-center md:items-start gap-8">
          <h2 className="leading-[2.9rem] md:leading-16 text-zinc-900 text-center md:text-left text-pretty md:text-balance">
            Achieve Your Dream IELTS Band Score IELTS Institute
          </h2>

          <p className="text-zinc-800 text-center md:text-left md:leading-8 text-pretty md:text-wrap">
            Personalized coaching, expert instructors, and proven strategies to help you succeed in your IELTS exam.
          </p>

          {/* Buttons Section */}
          <div className="log flex flex-wrap justify-center md:justify-start gap-2.5 mt-2 text-[5vw] md:text-[2.6vh] font-medium">
            <div className="trial-btn">
              <a
                href="/"
                className="px-3.5 py-1.5 md:px-8 md:py-3 bg-blue-600 hover:bg-blue-500 border-[1.4px] border-blue-600 
                rounded-lg text-zinc-50 duration-75 ease-in-out"
              >
                Start Free Trial
              </a>
            </div>
            <div className="courses-btn">
              <a
                href="/"
                className="px-3.5 py-1.5 md:px-8 md:py-3 hover:bg-zinc-200 rounded-lg text-zinc-900 border-[1.4px] 
                border-zinc-900 duration-75 ease-in-out"
              >
                View Courses
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hero-img w-full md:w-[45%] md:px-10 md:mt-12">
          <img className="h-full w-full object-cover" src="/hero_pic.png" alt="hero-pic" />
        </div>
      </div>

      {/* Rating Section */}
      <div className="rating-container flex flex-wrap items-center justify-center gap-6 md:gap-20 mt-2 mb-6">
        <div className="rating flex flex-col items-center">
          <span className="rating-text text-zinc-900 font-semibold">98%</span>
          <p className="text-zinc-700">Success Rate</p>
        </div>

        <div className="rating flex flex-col items-center">
          <span className="rating-text text-zinc-900 font-semibold">5000+</span>
          <p className="text-zinc-700">Students Trained</p>
        </div>

        <div className="rating flex flex-col items-center">
          <span className="rating-text text-zinc-900 font-semibold">4.9/5</span>
          <p className="text-zinc-700">Student Rating</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
