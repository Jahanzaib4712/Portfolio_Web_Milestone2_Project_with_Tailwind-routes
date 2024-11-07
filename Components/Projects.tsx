import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section id='Project'>
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem] h-[100vh]'>
        <h1 className='heading'>
            Pro<span className='text-yellow-400'>Ject</span>
        </h1>
        <div className='w-[80%] pt-[2rem] items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-[2rem]'>
            <a href="https://burger-landing-website-next-js.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div data-aos="fade-up">
                <div className='transform ease-in-out cursor-pointer hover:translate-y-6 transition-all duration-200 relative 
                w-[100%] h-[200px] md:h-[300px] '>
                    <Image 
                    src="/images/p1.jpg" 
                    alt="portfolio" 
                    layout='fill' 
                    className='object-contain'/>
                </div>
            </div>
            </a>
            <a href="https://online-resume-generator.vercel.app/" target="_blank" rel="noopener noreferrer">
    <div data-aos="fade-up" data-aos-delay="400">
        <div className="transform ease-in-out cursor-pointer hover:translate-y-6 transition-all duration-200 relative 
        w-[100%] h-[200px] md:h-[300px]">
            <Image 
                src="/images/p2.jpg" 
                alt="portfolio" 
                layout="fill" 
                className="object-contain"/>
        </div>
    </div>
</a> 
<a href="https://github.com/Jahanzaib4712/_Countdown_Timer_with_NODE.JS" target="_blank" rel="noopener noreferrer">
            <div data-aos="fade-up" data-aos-delay="600">
                <div className='transform ease-in-out cursor-pointer hover:translate-y-6 transition-all duration-200 relative 
                w-[100%] h-[200px] md:h-[300px] '>
                    <Image 
                    src="/images/p3.jpg" 
                    alt="portfolio" 
                    layout='fill' 
                    className='object-contain'/>
                </div>
            </div>
            </a>
            <a href="https://github.com/Jahanzaib4712/SF_numberGuessing_Game" target="_blank" rel="noopener noreferrer">
            <div data-aos="fade-up" data-aos-delay="900">
                <div className='transform ease-in-out cursor-pointer hover:translate-y-6 transition-all duration-200 relative 
                w-[100%] h-[200px] md:h-[300px] '>
                    <Image 
                    src="/images/p4.jpg" 
                    alt="portfolio" 
                    layout='fill' 
                    className='object-contain'/>
                </div>
            </div>
            </a>

            <a href="https://burger-landing-website-next-js.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div data-aos="fade-up" data-aos-delay="1200">
                <div className='transform ease-in-out cursor-pointer hover:translate-y-6 transition-all duration-200 relative 
                w-[100%] h-[200px] md:h-[300px] '>
                    <Image 
                    src="/images/p5.jpg" 
                    alt="portfolio" 
                    layout='fill' 
                    className='object-contain'/>
                </div>
            </div>
            </a>
            <a href="https://online-resume-generator.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div data-aos="fade-up" data-aos-delay="1600">
                <div className='transform ease-in-out cursor-pointer hover:translate-y-6 transition-all duration-200 relative 
                w-[100%] h-[200px] md:h-[300px] '>
                    <Image 
                    src="/images/p1.jpg" 
                    alt="portfolio" 
                    layout='fill' 
                    className='object-contain'/>
                </div>
            </div>
            </a>
        </div>
        
      
    </div>
    </section>
  )
}

export default Projects
