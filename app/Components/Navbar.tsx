import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

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
            <ul className='w-3/5 flex flex-row items-center justify-around gap-3 '>
                {
                    navItems.map((navItem)=><li key={navItem.title}>
                      <Link href={navItem.slug}>{navItem.title}</Link>
                    </li>)
                }
            </ul>
            <div className='w-2/5 flex  items-center justify-around'>
                <Link 
                className='px-4 py-2 border-2 rounded-3xl '
                href="/contact">Contact us</Link>
                <Link 
                className='px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-300 rounded-full'
                href="/">Get Started</Link>
            </div>
        </nav>     
    </div>
  )
}

export default Navbar;