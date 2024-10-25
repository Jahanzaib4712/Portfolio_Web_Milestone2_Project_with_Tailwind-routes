import { Bars3Icon } from '@heroicons/react/16/solid'
import Link from 'next/link';
import React from 'react'


interface Props{
  openNav: () => void;

}

const Nav = ({openNav}:Props) => {
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
          WEB 
          <span className='text-yellow-300'>DEV</span>
        </h1>                 
           <Link href="#Home"> <div className='nav-link'>HOME</div></Link>
           <Link href="#services"> <div className='nav-link'>SERVICES</div></Link>
           <Link href="#About"><div className='nav-link'>ABOUT</div></Link>
           <Link href="#Project"><div className='nav-link'>PROJECT</div></Link>
           <Link href="#Blog"><div className='nav-link'>BlOG</div></Link>
           <Link href="#Footer"><div className='nav-link'>CONTACT</div></Link>      
        <div onClick={openNav}>
          <Bars3Icon className='w-[3rem] md:hidden h-[2rem] cursor-pointer text-yellow-300 '/>
        </div>
      </div>
    </div>
  )
}

export default Nav
 