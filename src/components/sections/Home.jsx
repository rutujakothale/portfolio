import React from 'react'
import ReviewOnScroll from '../ReviewOnScroll'

const Home = () => {
  return (
    <section id='home' 
    className='min-h-screen flex items-center justify-center relative'
    >
        <ReviewOnScroll>
    <div className='text-center z-10 px-4'> 
        <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-l from-blue-500 to-purple-600  
        bg-clip-text text-transparent leading-right'>
            Hi , I am Rutuja Kothale
        </h1>

        <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto font-bold'>
            Web Developer | Front-End | Java Development
        </p>

        <p className='text-gray-400 text-justify mb-8 max-w-160 mx-auto'>
            Interested in full-stack development with a foundation in Java and web technologies.
            Enjoy working on both user interfaces and backend logic.
            Passionate about building scalable and reliable applications.
            Continuously improving problem-solving and development skills.</p>

        <div className='flex justify-center space-x-4'>
            <a href="#projects" className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
            '>
                View Projects
            </a>
            <a href="#contact" 
            className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
             hover:bg-blue-500/10
            '>
                Contact Me
            </a>

        </div>
    </div>
    
    </ReviewOnScroll>
    </section>
  )
}

export default Home
