import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';
import React from 'react'

const Services = () => {
  return (
    <section id='services'>
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] h-[100vh] mt-[7rem]'>
        <p className='heading'>
            my <span className='text-yellow-400'>
                Services
                </span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] 
        text-white'>
            <div data-aos="fade-right">
                <div className='bg-red-700 hover:scale-110 transform transition-transform ease-in-out duration-300 hover:-rotate-6 
                uppercase font-semibold text-center p-[2rem]'>
                    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8] '/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Frontend
                    </h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Crafting visually stunning, user-friendly, and responsive interfaces with HTML, CSS, and JavaScript.
Enhancing user experience through intuitive design and interactive elements.</p>

                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
                <div className='bg-orange-700 hover:scale-110 transform transition-transform ease-in-out duration-300 
                uppercase font-semibold text-center p-[2rem]'>
                    <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8] '/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Backend
                    </h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Delivering dynamic, responsive, and seamless end-to-end web applications integrating frontend and backend expertise.
Combining design and functionality for captivating digital experiences. </p>

                </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="500">
                <div className='bg-blue-700 hover:scale-110 transform transition-all ease-in-out duration-300 hover:rotate-6 
                uppercase font-semibold text-center p-[2rem]'>
                    <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8] '/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Fullstack
                    </h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Delivering end-to-end solutions, combining frontend and backend expertise to create dynamic, responsive, and high-performance web applications.Combining design and functionality.
                    </p>

                </div>
            </div>


        </div>
      
    </div>
    </section>
  )
}

export default Services;
