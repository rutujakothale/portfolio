import React, { useState } from 'react'
import ReviewOnScroll from '../ReviewOnScroll'
import emailjs from 'emailjs-com' 

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
    <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
        <ReviewOnScroll>
            <div className='px-4 w-150'>
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
            text-transparent text-center'> Get In Touch </h2>

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







        </ReviewOnScroll>
         
    </section>
  )
}

export default Contact
