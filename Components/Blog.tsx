import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <section id='Blog'>
    <div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
      <h1 className='heading'>
        MY 
        <span className='text-yellow-400'> BLOG</span>
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[4rem] gap-[3rem] w-[80%] mx-auto'>
        {/* 1st Blog Card */}
        <div>
          <div className='w-[100%] relative h-[400px]'>
            <Image  
            src="/images/blog3.jpg" 
            alt='blog' 
            layout='fill' 
            className='object-cover'/> 
            
          </div>
          <a href="https://medium.com/@uafshahzaib/introduction-8cf00b56bc8e" target="_blank" rel="noopener noreferrer">
          <div className='w-[90%] text-center mx-auto bg-[#55e6a5] relative p-[2rem] mt-[-1rem]'>
            <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black
            font-semibold text-[17px] mx-auto'>
              December 10,2023
            </div>           
            <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
              <div className='flex items-center space-x-3'>
                <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                <p className='text-white'>By Shahzaib</p>
              </div>
              <div className='flex items-center space-x-3 '>
                <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                <p className='text-white'>Comments(2)</p>
              </div>            
            </div>
            <p className='mt-[1rem] text-white text-[18px] font-semibold'>Next Js FullStack Development</p>
          </div>
          </a>
        </div>
         {/* 2nd Blog Card */}
        <div>
          <div className='w-[100%] relative h-[400px]'>
            <Image  
            src="/images/blog2.jpg"
            alt='blog' 
            layout='fill' 
            className='object-cover'/> 
            
          </div>
          <a href="https://medium.com/@dev.alisamir/advanced-react-js-concepts-a-deep-dive-c3420971825a" target="_blank" rel="noopener noreferrer">
          <div className='w-[90%] text-center mx-auto bg-[#55e6a5] relative p-[2rem] mt-[-1rem]'>
            <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black
            font-semibold text-[17px] mx-auto'>
              December 15,2023
            </div>
            <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
              <div className='flex items-center space-x-3'>
                <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                <p className='text-white'>By Ali</p>
              </div>
              <div className='flex items-center space-x-3 '>
                <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                <p className='text-white'>Comments(8)</p>
              </div>            
            </div>
            <p className='mt-[1rem] text-white text-[18px] font-semibold'>
              React New Features</p>

          </div>
          </a>
        </div>
        {/* 3rd Blog Card */}
        <div>
          <div className='w-[100%] relative h-[400px]'>
            <Image  
            src="/images/blog1.jpg" 
            alt='blog' 
            layout='fill' 
            className='object-cover'/> 
            
          </div>
          <a href="https://medium.com/@compilerharris/future-ready-frontend-exploring-next-js-in-the-year-2024-4a3760d4053d" target="_blank" rel="noopener noreferrer">
          <div className='w-[90%] text-center mx-auto bg-[#55e6a5] relative p-[2rem] mt-[-1rem]'>
            <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black
            font-semibold text-[17px] mx-auto'>
              December 20,2023
            </div>
            <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
              <div className='flex items-center space-x-3'>
                <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                <p className='text-white'>By Haris</p>
              </div>
              <div className='flex items-center space-x-3 '>
                <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                <p className='text-white'>Comments(9)</p>
              </div>            
            </div>
            <p className='mt-[1rem] text-white text-[18px] font-semibold'>
              Next Js New Features
              </p>
          </div>
          </a> 
        </div>
      </div>
    </div>
    </section>
  )
}

export default Blog
