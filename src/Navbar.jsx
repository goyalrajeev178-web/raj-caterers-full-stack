import React, { useState } from 'react'
import logo from './assets/logo.svg'
import arrow_icon from './assets/arrow_icon.svg'
import close_icon from './assets/close_icon.svg'
import menu_icon from './assets/menu_icon.svg'
import menu_icon_dark from './assets/menu_icon_dark.svg'
const Navbar = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false)
  return (
    <div className='flex justify-between item-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

        <img src={logo} alt="logo"  className="w-24 sm:w-32 lg:w-40 h-12 sm:h-14 object-contain object-left"/>

        <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ?'max-sm:w-0 overflow-hidden' :'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0  bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

            <img src={close_icon} alt="" className=' w-5 absolute right-4 top-4 sm:hidden' onClick={()=> setsidebarOpen(false) }/>
            <a onClick={()=> setsidebarOpen(false)} href="/home" className='sm:hover:border-b'>Home</a>
            <a onClick={()=> setsidebarOpen(false)} href="/about" className='sm:hover:border-b'>About</a>
            <a onClick={()=> setsidebarOpen(false)} href="/service" className='sm:hover:border-b'>Service</a>
            <a onClick={()=> setsidebarOpen(false)} href="/contact" className='sm:hover:border-b'>Contact</a>
        </div>

        <div>
        <div className='flex items-center gap-2 sm:gap-4'>
          <img src={menu_icon} alt="" onClick={()=> setsidebarOpen(true)} className=' w-8 sm:hidden'/>
            <a href="/booking" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>Booking <img src={arrow_icon} alt="" width={14} /></a>
          </div>
        </div>
    </div>
  )
}

export default Navbar
