import React from 'react'
import ReviewOnScroll from '../ReviewOnScroll'

const About = () => {

    const frontendSkills=[
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "TailwindCSS",
    ]

     const backendSkills=[
        "Node.js",
        "JDBC",
        "Servlets"
    ]


  return (
    <section id='about' 
    className='min-h-screen flex items-center justify-center py-20'>
        
        <ReviewOnScroll>

        
        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
            text-transparent text-center'>About Me</h2>


            <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
                <p className='text-gray-300 mb-6'>
                    Passionate developer in building scalabe web applications and creating innovative solutions
                 </p>

                 <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                        <div className='flex flex-wrap gap-2'>
                            {frontendSkills.map((tech, key) => (
                                <span  key={key}
                                className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                 hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'> {tech} </span>
                            ))}
                        </div>

                    </div>

                    <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Backend</h3>
                        <div className='flex flex-wrap gap-2'>
                            {backendSkills.map((tech, key) => (
                                <span  key={key}
                                className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                 hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'> {tech} </span>
                            ))}
                        </div>

                    </div>

                 </div>
            </div>

            <div className='grid grid-cols-3 md:grid-cols-1 gap-6 mt-8'>
                <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'> 🎓  Education</h3>

                            <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li>
                                    <strong> B.E | Electronics & Telecommunications</strong>     
                                    <p>Jaywantrao Sawant College of Engineering, Pune (2021-2025)   </p>    
                                </li>
                                <li>
                                    Relevant Coursework: Java Full-Stack
                                </li>
                            </ul>
                </div>
                 <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'> 💼  Work Experience</h3>
                            <div className='space-y-4 text-gray-300'>
                                <div>
                                    <h4 className='font-semibold'>  <strong>Intern</strong> at Ketron Proddes </h4> <h2>(Jan/2025-Feb/2025)</h2>
                                    <p>Collaborated with the engineering team on device communication and system testing , ensuring  reliable performance. </p>
                                </div>

                                <div>
                                    <h4 className='font-semibold'>  <strong>Intern</strong> at EverElectronics Pvt Ltd </h4> <h2>(Dec/2023-Jan/2024)</h2>
                                    <p>Collaborated with the engineering team on device communication and system testing , ensuring  reliable performance. </p>
                                </div>

                            </div>
                </div>


            </div>



        </div>
        </ReviewOnScroll>
    </section>
  )
}

export default About
