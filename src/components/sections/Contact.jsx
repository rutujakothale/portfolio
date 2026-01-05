import React, { useState } from 'react'
import ReviewOnScroll from '../ReviewOnScroll'
import emailjs from 'emailjs-com' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {

    const [formData, setformData] = useState({
        name:"",
        email:"",
        message:""
    })

    

    const handleSubmit =(e) =>{
        e.preventDefault()

        emailjs.sendForm( import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY)
        .then(( result)=>{
            alert("Message Sent!")
            setformData({name:"" ,email:"" ,message:""})

        }).catch(()=>{
            alert(" Something went wrong!! Please Try Again.")
        })
    }



  return (
    <section id='contact' className='py-20 flex flex-col items-center'>
        <ReviewOnScroll>
            <div className='w-full max-w-5xl px-4 sm:px-6'>
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
            text-transparent text-center'> Get In Touch </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                <div className="rounded-xl border border-white/10 p-6 flex flex-col justify-center">
                        

                        <p className="text-gray-400 mb-6">
                            You can connect with me through the platforms below.
                        </p>

                        <a
                            href="https://www.linkedin.com/in/rutujakothale"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 flex items-center gap-3 text-gray-300 hover:text-white transition"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size='lg'
                             className="text-blue-500 text-2xl hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition" /> 
                             Rutuja Kothale   
                        </a>
                        

                        <a
                            href="https://github.com/rutujakothale"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                        >
                            <FontAwesomeIcon icon={faGithub} size="lg"  
                            className="text-blue-500 text-2xl hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition"/> 
                            rutujakothale
                        </a>
                </div>
            
                <div className="rounded-xl border border-white/10 p-6">
                <h3 className="text-gray-400 mb-6">
                    Reach out for collaborations, opportunities, or inquiries. I’ll respond as soon as possible.
                </h3>
                <form className='space-y-6' onSubmit={handleSubmit}>

                    <div className='relative'>
                        <input type="text" name="name" id="name" required value={formData.name}
                        onChange={(e) => setformData({...formData, name: e.target.value})}
                        placeholder='Enter Name:'
                        className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                        />
                    </div>

                     <div className='relative'>
                        <input type="email" name="email" id="email" required  value={formData.email}
                         onChange={(e) => setformData({...formData, email: e.target.value})}
                        placeholder='Enter Email:'
                        className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                        />
                    </div>

                    <div className='relative'>
                        <textarea  name="message" id="message" required   value={formData.message}
                         onChange={(e) => setformData({...formData, message: e.target.value})}
                        rows={5}
                        placeholder='Your Message'
                        className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                        />
                    </div>
                    <button type='submit'
                    className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                     hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'> Send Message


                        </button>
                    </form>
                    </div>
                </div>
            </div>

        </ReviewOnScroll>
         
    </section>
  )
}

export default Contact
