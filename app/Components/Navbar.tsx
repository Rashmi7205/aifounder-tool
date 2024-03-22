import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';

const Navbar = () => {
    const navItems = [
        {
            title:"home",
            slug:"/"
        },
        {
            title:"about",
            slug:"/about"
        },
    ];
    return (
      <div className='w-full py-5 h-[70px] flex items-center justify-around flex-row'>
        <nav className='w-4/5 flex items-center justify-between capitalize'>  
           <Image 
            src='/images/logo.png'
            height={150}
            width={150}
            alt='logo'
           />
            <ul className='hidden w-3/5 md:flex flex-row items-center justify-around gap-3 '>
                {
                    navItems.map((navItem)=><li key={navItem.title}>
                      <Link href={navItem.slug}>{navItem.title}</Link>
                    </li>)
                }
            </ul>
            {/* Mobile nav */}
            <ul className='flex md:hidden h-[50px] w-4/5 shadow-md bg-[#39343475] backdrop-blur-md fixed bottom-4 z-50 rounded-full text-white items-center justify-around text-md border-1 border-white'>
                <Link href="/contact">
                <MdOutlineConnectWithoutContact />
                </Link>
                <Link 
                className='border-l-2 border-r-2 px-4'
                href="/about">
                <BsFillInfoSquareFill />
                </Link>
                <Link href="/tools">
                 <FaTools />
                </Link>
            </ul>   
            <div className='w-2/5 flex  items-center justify-around'>
                <Link 
                className='hidden md:block px-4 py-2 border-2 rounded-3xl '
                href="/contact">Contact us</Link>
                <Link 
                className='px-2 py-2 text-sm md:px-4 md:py-2 bg-gradient-to-r from-purple-700 to-purple-300 rounded-full'
                href="/">Get Started</Link>
            </div>
        </nav>     
    </div>
  )
}

export default Navbar;