import React from 'react'
import ReviewOnScroll from '../ReviewOnScroll'

const Projects = () => {
  return (
    <section id='projects' 
    className='min-h-screen flex items-center justify-center py-20'>
            <ReviewOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
            text-transparent text-center'> Featured Projects</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                {/* Project 1 */}
                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>
                        <strong>Trainer and Student Management System  </strong> </h3>

                    <p className='text-gray-400 mb-4'>Developed a Trainer–Student Management System using React.js.  Implemented CRUD operations and dynamic forms for
                        managing student details.  
                    </p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {["React.js", "VS code"].map((tech , key)=>(
                            <span  key={key}
                                className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                 hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'> {tech} </span>
                        ))}
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="#" 
                        className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                        >View Project ➡️</a>
                    </div>
                </div>


                {/* Project 2 */}
                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>
                        <strong>Next-Gen Energy Meter   </strong> </h3>

                    <p className='text-gray-400 mb-4'>Developed a full-stack web app for real-time energy monitoring . Implemented live power usage tracking, and PDF 
                        report generation. 
                    </p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {["Java", "Firebase","LoRa", "Android Studio"].map((tech , key)=>(
                            <span  key={key}
                                className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                 hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'> {tech} </span>
                        ))}
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="#" 
                        className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                        >View Project ➡️</a>
                    </div>
                </div>


            </div>

        </div>
        </ReviewOnScroll>
    </section>
  )
}

export default Projects
