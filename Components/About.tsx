import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='About'>
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem] h-[90vh] mt-[7rem]' >
        <div className='grid gird-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
            <div>
                <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]'>
                    about me
                    </h1>
                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capatilize mb-[3rem]
                    font-bold text-white'>
                        Transforming <span className='text-yellow-400'>Visions</span>
                    </h2>
                    <div className='mb-[3rem] flex items-center md:space-x-10'>
                      <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                      <p className='text-[19px] text-slate-300 w-[80%]'>
                      As a dedicated developer, I’m driven by the desire to turn innovative ideas into reality through cutting-edge technology, Alhamdulillah. With a foundational understanding of JavaScript, TypeScript, Next.js, and Arduino, I focus on creating solutions that are both efficient and impactful. My passion for AI, cybersecurity, and arm wrestling fuels my vision, Insha Allah, to contribute to a safer and smarter digital world. I believe in continuous learning, and I’m always striving to master new tools and techniques to transform complex challenges into simple, effective solutions, Alhamdulillah.
                        </p>
                    </div>
                    <a 
href="/Shahzaib.CV1.pdf"
download 
className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5]
text-black flex items-center space-x-2"
>
<p>Download CV</p>
<ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black "/>
</a>
            </div>
            <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
              <Image 
              src="/images/about.jpg" 
              alt="user" 
              layout="fill" 
              objectFit="contain"
              className="relative z-[11] w-[100%] h-[100%] object-contain"
              />
              <div className='absolute w-[100%] h-[100%] q-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]'></div>
            </div>
        </div>
      
    </div>
    </section>
  )
}

export default About


{/*  */}







                    