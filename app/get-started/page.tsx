import React from 'react'
import { Card, Navbar, Sidebar } from '../Components'
import { toolsList } from '../utils/data';

const page = () => {
  return (
    <div className='w-full min-h-screen relative bg-[#302C42] text-white'>
        {/* Nav bar section */}
        <Navbar/>
        <div className='w-full flex flex-row items-start justify-between gap-10 '>
            
            <Sidebar/>
            <main className='w-4/5 flex flex-wrap gap-10 my-10 '>
                 {
                    toolsList.map((tool)=><Card key={tool.Site_name} cardDetails={tool} />)
                 }  
            </main>
        </div>
    </div>
  )
}

export default page